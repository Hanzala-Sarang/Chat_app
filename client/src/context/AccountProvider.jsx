import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [text, setText] = useState("");
  const [currMsg, setCurrMsg] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [typing, setTyping] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        text,
        setText,
        socket,
        activeUsers,
        setActiveUsers,
        currMsg,
        setCurrMsg,
        typing,
        setTyping,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
