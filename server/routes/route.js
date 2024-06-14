import express from "express";
import { addUsers, getUsers } from "../controller/userController.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversation-controller.js";
import { newMessage, getMessages } from "../controller/message-controller.js";

const route = express.Router();

route.post("/add", addUsers);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/addNew", newMessage);
route.get("/message/get/:id", getMessages);

export default route;
