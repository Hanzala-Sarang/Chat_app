import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useState, useEffect, useRef } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getAllMessages, newMessage } from "../../../service/api";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://i.pinimg.com/564x/c3/67/25/c36725a5a2a254a5df8c7dd4bdaa05af.jpg"});
  background-size: 30%;
  background-position: center;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px; /* Set the width of the scrollbar */
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Track color */
    border-radius: 4px; /* Rounded corners for the track */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Thumb color */
    border-radius: 4px; /* Rounded corners for the thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Thumb color on hover */
  }
`;

const Container = styled(Box)`
  padding: 2px 70px;
`;
function Messages({ person, conversation }) {
  const { account, socket, currMsg, setCurrMsg } = useContext(AccountContext);
  const [msgText, setMsgText] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [incomingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  });
  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getAllMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, currMsg]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);
  const sendText = async (e) => {
    const code = e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        recieverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: msgText,
      };

      socket.current.emit("sendMessage", message);

      await newMessage(message);
      setMsgText("");
      setCurrMsg((prev) => !prev);
    }
  };
  return (
    <>
      <Wrapper>
        <Component>
          {messages &&
            messages.map((message) => (
              <Container ref={scrollRef}>
                <Message message={message} />
              </Container>
            ))}
        </Component>
        <Footer
          sendText={sendText}
          setMsgText={setMsgText}
          value={msgText}
          file={file}
          setFile={setFile}
        />
      </Wrapper>
    </>
  );
}

export default Messages;
