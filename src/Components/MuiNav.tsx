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

export const MuiNav = () => {
  const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorE1);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
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
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="text"
            color="inherit"
            endIcon={<KeyboardArrowDownRoundedIcon />}
          >
            HOME
          </Button>
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="text"
            color="inherit"
            endIcon={<KeyboardArrowDownRoundedIcon />}
          >
            SHOP
          </Button>
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="text"
            color="inherit"
            endIcon={<KeyboardArrowDownRoundedIcon />}
          >
            PRODUCT
          </Button>
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
          anchorEl={anchorE1}
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
          <MenuItem onClick={handleClose}> About Us </MenuItem>
          <MenuItem onClick={handleClose}> Contact Us </MenuItem>
          <MenuItem onClick={handleClose}> Login </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
