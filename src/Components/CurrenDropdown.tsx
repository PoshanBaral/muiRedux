import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";

export const CurrenDropdown = () => {
  const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorE1);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };

  return (
    <>
      <Button
        color="inherit"
        id="lang-button"
        endIcon={<KeyboardArrowDownRoundedIcon />}
        onClick={handleClick}
        aria-controls={open ? "lang-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        Currency
      </Button>
      <Menu
        id="curn-menu"
        anchorEl={anchorE1}
        open={open}
        MenuListProps={{
          "aria-labelledby": "curn-button",
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}> Rupees </MenuItem>
        <MenuItem onClick={handleClose}> Dollar </MenuItem>
        <MenuItem onClick={handleClose}> Euro </MenuItem>
        <MenuItem onClick={handleClose}> Yen </MenuItem>
      </Menu>
    </>
  );
};
