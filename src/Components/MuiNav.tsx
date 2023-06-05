import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Badge,
  Tooltip,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";

const menuItems = [
  { label: "HOME", onClick: () => alert("Clicked HOME") },
  { label: "SHOP", onClick: () => alert("Clicked SHOP") },
  { label: "PRODUCT", onClick: () => alert("Clicked PRODUCT") },
  // Add more menu items as needed
];

export const MuiNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <AcUnitIcon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          Shopping Palace
        </Typography>
        <Stack direction="row" spacing={2}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              onClick={item.onClick}
              variant="text"
              color="inherit"
              endIcon={<KeyboardArrowDownRoundedIcon />}
            >
              {item.label}
            </Button>
          ))}
          <Button
            color="inherit"
            id="pages-button"
            endIcon={<KeyboardArrowDownRoundedIcon />}
            onClick={handleClick}
            aria-controls={open ? "pages-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            PAGES
          </Button>
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="text"
            color="inherit"
            endIcon={<KeyboardArrowDownRoundedIcon />}
          >
            BLOG
          </Button>
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="text"
            color="inherit"
            endIcon={<KeyboardArrowDownRoundedIcon />}
          >
            ELEMENTS
          </Button>
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="text"
            color="inherit"
            startIcon={<SearchOutlinedIcon />}
          ></Button>
          <Tooltip
            title="No Wishlist Yet"
            placement="bottom"
            arrow
            enterDelay={500}
            leaveDelay={200}
          >
            <Badge
              onClick={() => {
                alert("clicked");
              }}
              badgeContent={0}
              color="secondary"
              showZero
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Tooltip>
        </Stack>

        <Menu
          id="pages-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "pages-button",
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
          <MenuItem onClick={handleClose}>About Us</MenuItem>
          <MenuItem onClick={handleClose}>Contact Us</MenuItem>
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
