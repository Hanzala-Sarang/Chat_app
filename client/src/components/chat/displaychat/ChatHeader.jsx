import { Box, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
  height: 44px;
  background: #111a20;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
  border: " 1px solid rgba(255, 255, 255, 0.7)",
});

const Name = styled(Typography)`
  margin-left: 15px !important;
  color: #ffffff;
`;

const Status = styled(Typography)`
  margin-left: 15px !important;
  color: #ffffff;
  font-size: 11px;
`;
const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    color: #ffffff;
    font-size: 26px;
    padding: 10px;
  }
`;
function ChatHeader({ person }) {
  const { typing, setTyping, activeUsers, socket } = useContext(AccountContext);
  const [senderID, setSenderID] = useState("");

  useEffect(() => {
    socket.current.on("sender-typing", ({ isTyping, senderId }) => {
      setSenderID(senderId);
      if (senderId === person.sub) {
        setTyping(isTyping);
      }
    });
    return () => {
      console.log("i am executed");
      socket.current.off("sender-typing");
    };
  }, [socket]);
  return (
    <>
      <Header>
        <Image src={person.picture} alt="dp" />
        <Box>
          <Name>{person.name}</Name>
          <Status>
            {activeUsers?.find((user) => user.sub === person.sub)
              ? typing && senderID === person.sub
                ? "Typing..."
                : "Online" // Check if person.sub matches senderId
              : "Offline"}
          </Status>
        </Box>
        <RightContainer>
          <SearchIcon />
          <MoreVertIcon />
        </RightContainer>
      </Header>
    </>
  );
}

export default ChatHeader;
