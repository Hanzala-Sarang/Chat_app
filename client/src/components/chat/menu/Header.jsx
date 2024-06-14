import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 50px;
  background: #111a20;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #d3d3d3;
  }
`;

const Image = styled("img")({
  height: 45,
  width: 45,
  borderRadius: "50%",
});
function Header() {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Component>
        <Image src={account.picture} alt="DP" onClick={() => toggleDrawer()} />
        <Wrapper>
          <ChatIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
}

export default Header;
