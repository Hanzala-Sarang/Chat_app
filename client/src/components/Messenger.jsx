import { AppBar, Toolbar, styled, Box } from "@mui/material";

import LoginDialog from "./account/LoginDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #111b21;
`;

const Header = styled(AppBar)`
  height: 130px;
  background-color: #01a885;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 230px;
  background-color: #01a885;
  box-shadow: none;
`;

function Messenger() {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
}

export default Messenger;
