import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../../utils/utils";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Own = styled(Box)`
  background: #005d4a;
  color: #d3d3d3;
  max-width: 450px;
  padding: 8px;
  margin-left: auto;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;
const Recieved = styled(Box)`
  background: #202d32;
  color: #d3d3d3;
  max-width: 450px;
  padding: 8px;
  margin-right: auto;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  margin-top: auto;
  word-break: keep-all;
`;
function Message({ message }) {
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Own>
      ) : (
        <Recieved>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Recieved>
      )}
    </>
  );
}

export default Message;
