import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
function Profile() {
  const { account } = useContext(AccountContext);

  const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
  `;

  const Image = styled("img")({
    height: 200,
    width: 200,
    borderRadius: "50%",
    padding: "25px",
  });

  const BoxWrapper = styled(Box)`
    padding: 12px 30px 2px;

    & :last-child {
      margin: 14px 0;
      color: #8796a1;
    }
  `;

  const CustomTypo = styled(Typography)`
    color: #018169;
    font-size: 15px;
  `;

  const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;

    & > p {
      color: #8796a1;
      font-size: 14px;
    }
  `;
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="" />
      </ImageContainer>
      <BoxWrapper>
        <CustomTypo>Your Name</CustomTypo>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DescriptionContainer>
        <Typography>
          This is not your username or PIN. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DescriptionContainer>
      <BoxWrapper>
        <CustomTypo>About</CustomTypo>
        <Typography>Eat! Sleep! Code! Repeat!</Typography>
      </BoxWrapper>
    </>
  );
}

export default Profile;
