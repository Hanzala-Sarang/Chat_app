import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/utils";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
});

const StyleTypo = styled(Typography)`
  color: #ffffff;
`;

const MsgTime = styled(Box)`
  color: #d3d3d3;
  margin-left: auto;
  padding: 0 15px;

  & > p {
    font-size: 12px;
    padding: 0 15px;
  }
`;

const LatestMsg = styled(Typography)`
  color: #d3d3d3;
  padding: 0 15px;
  font-weight: 500;
`;
function SingleChat({ user }) {
  const { setPerson, account, currMsg } = useContext(AccountContext);

  const [latestMessage, setLatestMessage] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        recieverId: user.sub,
      });
      setLatestMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [currMsg]);
  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, recieverId: user.sub });
  };
  return (
    <>
      <Component onClick={() => getUser()}>
        <Box>
          <Image src={user.picture} alt="dp" />
        </Box>
        <Box>
          <StyleTypo>{user.name}</StyleTypo>
          <LatestMsg>{latestMessage.text}</LatestMsg>
        </Box>
        <MsgTime>
          {latestMessage?.text && (
            <Typography>{formatDate(latestMessage?.timestamp)}</Typography>
          )}
        </MsgTime>
      </Component>
    </>
  );
}

export default SingleChat;
