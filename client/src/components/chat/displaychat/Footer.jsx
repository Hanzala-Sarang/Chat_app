import { Box, styled, InputBase } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import MicIcon from "@mui/icons-material/Mic";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Container = styled(Box)`
  display: flex;
  align-items: center;
  height: 55px;
  background-color: #111a20;
  padding: 0 15px;

  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #2a3942;
  border-radius: 30px;
  width: calc(94% - 60px);
`;

const Input = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  color: white;
  font-size: 17px;
  height: 20px;
`;

function Footer({ sendText, setMsgText, value }) {
  const { setTyping, socket, person, account } = useContext(AccountContext);

  const handleTyping = () => {
    socket.current.emit("typing", {
      isTyping: true,
      recieverId: person.sub,
      senderId: account.sub,
    });
    setTyping(true);

    setTimeout(() => {
      socket.current.emit("typing", {
        isTyping: false,
        recieverId: person.sub,
      });
      setTyping(false);
    }, 3000);
  };

  return (
    <>
      <Container>
        <EmojiEmotionsOutlinedIcon />
        <Search>
          <Input
            placeholder="Type a Message"
            onChange={(e) => {
              setMsgText(e.target.value);
              handleTyping();
            }}
            onKeyPress={(e) => sendText(e)}
            value={value}
          />
        </Search>
        <MicIcon />
      </Container>
    </>
  );
}

export default Footer;
