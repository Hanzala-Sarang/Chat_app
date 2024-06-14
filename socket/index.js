import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userData, socketId) => {
  !users.some((user) => user.sub == userData.sub) &&
    users.push({ ...userData, socketId });
};

const getUser = (userId) => {
  console.log(users);
  return users.find((user) => user.sub === userId);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("addUsers", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("typing", ({ isTyping, recieverId, senderId }) => {
    const user = getUser(recieverId);
    const sender = getUser(senderId);
    if (user) {
      socket.to(user?.socketId).emit("sender-typing", {
        isTyping,
        senderId: sender?.sub,
      });
    } else {
      console.log("reciever not found");
    }
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.recieverId);
    if (user) {
      io.to(user?.socketId).emit("getMessage", data);
    } else {
      console.log("User not found or disconnected");
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
