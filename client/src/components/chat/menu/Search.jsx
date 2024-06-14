import { Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  background-color: #111a20;
`;

const Wrapper = styled(Box)`
  background-color: #202c33;
  position: relative;
  margin: 0 13px;
  width: 100%;
  border-radius: 30px;
`;

const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 8px;
  color: #d3d3d3;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding-left: 65px;
  color: #fff;
  font-size: 15px;
`;

function Search() {
  const { setText } = useContext(AccountContext);
  return (
    <>
      <Component>
        <Wrapper>
          <Icon>
            <SearchIcon fontSize="small" />
          </Icon>
          <InputField
            placeholder="Search or Start a new chat"
            onChange={(e) => setText(e.target.value)}
          />
        </Wrapper>
      </Component>
    </>
  );
}

export default Search;
