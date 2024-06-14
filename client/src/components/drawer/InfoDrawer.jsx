import { Drawer, Box, Typography, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profile from "./Profile";

const drawerStyle = {
  left: 20,
  top: 24,
  width: "23.5%",
  height: "95%",
  backgroundColor: "#111b21",
};

const Header = styled(Box)`
  background: #01a885;
  height: 107px;
  display: flex;
  align-items: center;
  color: #ffffff;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 20px;
    font-weight: 600;
    font-size: 20px;
  }
`;

const Component = styled(Box)``;
function InfoDrawer({ openDrawer, setOpenDrawer }) {
  const handleClose = () => {
    setOpenDrawer(false);
  };
  return (
    <Drawer
      open={openDrawer}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBackIcon onClick={handleClose} />
        <Typography>Profile</Typography>
      </Header>

      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
}

export default InfoDrawer;
