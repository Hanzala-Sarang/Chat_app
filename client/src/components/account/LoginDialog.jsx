import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 56px 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "56px 0 0 56px",
});

const Title = styled(Typography)`
  font-size: 30px;
  color: #5e6c76;
  font-family: inherit;
  margin-bottom: 25px;
  font-weight: 300;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin: 20px;
    font-size: 18px;
    line-height: 28px;
    color: #58666f;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxshadow: "none",
  overflow: "hidden",
};
function LoginDialog() {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log(res);
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>Use WhatsApp on your computer</Title>
            <StyledList>
              <ListItem>1. Open Whatsapp on your phone</ListItem>
              <ListItem>2. Tap Menu Settings</ListItem>
              <ListItem>
                3. Point your phone to this screen to capture the code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QRCode src={qrCodeImage} alt="qr-code" />
            <Box
              style={{
                position: "absolute",
                top: "45%",
                right: "15%",
                left: "15%",
                transform: "translateX(25%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
}

export default LoginDialog;
