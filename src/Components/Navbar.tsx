import React from "react";
import { Grid, Button, Box, Paper } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { Login } from "./Login";
import { LangDropdown } from "./LangDropdown";
import { CurrenDropdown } from "./CurrenDropdown";

export const Navbar = () => {
  return (
    <Paper
      sx={{
        height: "50px",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop_1258-55967.jpg?w=826&t=st=1684830918~exp=1684831518~hmac=b5e4acae1847e996624e90786d0d9447b6abcb20ea8db82f34af2f62750b99b7')",
      }}
    >
      <Grid container ml={2} direction="row">
        <Grid item xs={2}>
          <Box width={"100px"}>
            <CurrenDropdown />
          </Box>
        </Grid>

        <Grid item xs={2}>
          <Box width={"100px"}>
            <LangDropdown />
          </Box>
        </Grid>

        <Grid item xs={2}>
          <Button variant="text" color="inherit" startIcon={<CallIcon />}>
            CALL: 01-2364597
          </Button>
        </Grid>

        <Grid item xs={2}>
          <Button
            variant="text"
            color="inherit"
            startIcon={<FavoriteBorderOutlinedIcon />}
          >
            Wishlist (0)
          </Button>
        </Grid>

        <Grid item xs={1}>
          ABOUT US
        </Grid>

        <Grid item xs={1}>
          CONTACT US
        </Grid>

        <Grid item xs={1}>
          <Button variant="text" color="inherit" startIcon={<PersonIcon />}>
            <Login />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
