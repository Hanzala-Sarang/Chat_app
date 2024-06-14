import { Dialog, Box, styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./displaychat/EmptyChat";
import ChatBox from "./displaychat/ChatBox";
import { useContext, useEffect } from "react";
import { AccountContext } from "../../context/AccountProvider";
import Chat from "@mui/icons-material/Chat";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  background-color: #111a20;
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 100%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

const dialogStyle = {
  height: "92%",
  width: "100%",
  margin: "20px",
  borderRadius: 0,
  maxWidth: "100%",
  maxHeight: "100%",
  boxshadow: "none",
  overflow: "hidden",
};

function ChatDialog() {
  const { person } = useContext(AccountContext);

  return (
    <>
      <Dialog
        open={true}
        PaperProps={{ sx: dialogStyle }}
        hideBackdrop={true}
        maxWidth={"md"}
      >
        <Component>
          <LeftComponent>
            <Menu />
          </LeftComponent>
          <RightComponent>
            {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
          </RightComponent>
        </Component>
      </Dialog>
    </>
  );
}

export default ChatDialog;
