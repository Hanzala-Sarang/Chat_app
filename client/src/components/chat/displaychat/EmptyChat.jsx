import { emptyChatImage } from "../../../constants/data";
import { Box, Typography, styled, Divider } from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";

const Component = styled(Box)`
  background: #232f35;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
  borderRadius: "10px",
});

const Title = styled(Typography)`
  font-size: 36px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #ffffff;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #8796a1;
  font-family: inherit;
  font-weight: 400;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0;
`;

const PrivacyMsg = styled(Typography)`
  color: #8796a1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
  gap: 5px;

  & > :first-child {
    font-size: 14px;
  }
`;

function EmptyChat() {
  return (
    <>
      <Component>
        <Container>
          <Image src={emptyChatImage} alt="" />
          <Title>whatsApp Web</Title>
          <SubTitle>
            Now send and recieve messages without keeping your phone online
          </SubTitle>
          <SubTitle>
            Use WhatsApp on up to 4 linked devices and 1 phone at the Same time
          </SubTitle>
          <StyledDivider />
          <PrivacyMsg>
            <HttpsIcon />
            Your personal messages are end to end encrypted
          </PrivacyMsg>
        </Container>
      </Component>
    </>
  );
}

export default EmptyChat;
