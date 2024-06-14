import MoreVert from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";

function HeaderMenu({ setOpenDrawer }) {
  const [open, setOpen] = useState(null);
  const { setAccount } = useContext(AccountContext);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleLogout = () => {
    setAccount("");
  };

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted={true}
        open={open}
        getContentAnchorE1={null}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ style: { backgroundColor: "#223139", color: "#d3d3d3" } }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleLogout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
