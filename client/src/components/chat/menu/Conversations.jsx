import { useEffect, useState, useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getUser } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";
import SingleChat from "./SingleChat";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  background-color: #d3d3d3;
  margin: 0 0 0 70px;
  opacity: 0.2;
`;
function Conversations() {
  const [users, setUsers] = useState([]);
  const { account, text, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUser();
      const filteredUser = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredUser);
    };
    fetchData();
  }, [text]);

  const socketC = socket.current;

  useEffect(() => {
    socketC.emit("addUsers", account);
    socketC.on("getUsers", (users) => {
      setActiveUsers(users);
    });

    return () => {
      socketC.off("disconnect");
      socketC.off("getUsers", (users) => {
        setActiveUsers(users);
      });
    };
  }, [account]);

  return (
    <>
      <Component>
        {users.map(
          (user) =>
            user.sub !== account.sub && (
              <>
                <SingleChat user={user} />
                <StyledDivider />
              </>
            )
        )}
      </Component>
    </>
  );
}

export default Conversations;
