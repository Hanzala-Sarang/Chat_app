import { Box } from "@mui/material";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

function Menu() {
  return (
    <Box>
      <Header />
      <Search />
      <Conversations />
    </Box>
  );
}

export default Menu;
