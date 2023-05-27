import React from "react";
import {
  IconButton,
  Typography,
  Grid,
  Paper,
  Button,
  CardContent,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export const Footer = () => {
  return (
    <Paper
      sx={{
        height: "300px",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop_1258-55967.jpg?w=826&t=st=1684830918~exp=1684831518~hmac=b5e4acae1847e996624e90786d0d9447b6abcb20ea8db82f34af2f62750b99b7')",
      }}
    >
      <Grid container height={"250px"} spacing={2}>
        <Grid item>
          <CardContent>
            <IconButton
              sx={{
                ":hover": {
                  color: "#ff5722",
                },
              }}
            >
              <AcUnitIcon />
              <Typography sx={{ fontSize: 20 }} color="inherit" gutterBottom>
                Shopping Palace
              </Typography>
            </IconButton>
            <Typography sx={{ fontSize: 16 }} color="inherit" gutterBottom>
              Shopping Palace is a Dummy Shopping Website !
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="inherit" gutterBottom>
              Developed using Material ui for the UI Design !
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="inherit" gutterBottom>
              Languages used are HTML,CSS, JS, Typescript ! !
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="inherit" gutterBottom>
              Redux Toolkit/Saga is used for State Management !
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="inherit" gutterBottom>
              Formik and Yup are used for Form and Validations !
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="inherit" gutterBottom>
              Axios is used for API Calling !
            </Typography>
          </CardContent>
        </Grid>

        <Grid item>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="inherit" gutterBottom>
              Useful Link
            </Typography>
            <Button
              color="inherit"
              href="#text-buttons"
              sx={{
                ":hover": {
                  color: "#ff5722",
                },
              }}
            >
              FAQ
            </Button>
            <br />
            <Button
              color="inherit"
              href="#text-buttons"
              sx={{
                ":hover": {
                  color: "#ff5722",
                },
              }}
            >
              Contact Us
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#ff5722",
                },
              }}
              color="inherit"
              href="#text-buttons"
              onClick={() => {
                alert("clicked");
              }}
            >
              Log In
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#ff5722",
                },
              }}
              color="inherit"
              href="#text-buttons"
              onClick={() => {
                alert("clicked");
              }}
            >
              About Us
            </Button>
            <br />
          </CardContent>
        </Grid>

        <Grid item>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="inherit" gutterBottom>
              Customer Service
            </Typography>
            <Button
              sx={{
                ":hover": {
                  color: "#f4511e",
                },
              }}
              color="inherit"
              href="#text-buttons"
            >
              Payment Method
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#f4511e",
                },
              }}
              color="inherit"
              href="#text-buttons"
            >
              Money-Back
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#f4511e",
                },
              }}
              color="inherit"
              href="#text-buttons"
              onClick={() => {
                alert("clicked");
              }}
            >
              Returns
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#f4511e",
                },
              }}
              color="inherit"
              href="#text-buttons"
              onClick={() => {
                alert("clicked");
              }}
            >
              Terms and Conditions
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#f4511e",
                },
              }}
              color="inherit"
              href="#text-buttons"
              onClick={() => {
                alert("clicked");
              }}
            >
              Privacy Policy
            </Button>
            <br />
          </CardContent>
        </Grid>

        <Grid item>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="inherit" gutterBottom>
              My Account
            </Typography>
            <Button
              sx={{
                ":hover": {
                  color: "#e64a19",
                },
              }}
              color="inherit"
              href="#text-buttons"
            >
              Sign In
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#e64a19",
                },
              }}
              color="inherit"
              href="#text-buttons"
            >
              View Cart
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#e64a19",
                },
              }}
              color="inherit"
              href="#text-buttons"
              onClick={() => {
                alert("clicked");
              }}
            >
              My Wishlist
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#e64a19",
                },
              }}
              color="inherit"
              href="#text-buttons"
              onClick={() => {
                alert("clicked");
              }}
            >
              Track My Order
            </Button>
            <br />
            <Button
              sx={{
                ":hover": {
                  color: "#e64a19",
                },
              }}
              color="inherit"
              href="#text-buttons"
              onClick={() => {
                alert("clicked");
              }}
            >
              Help
            </Button>
            <br />
          </CardContent>
        </Grid>

        <Grid item>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="inherit" gutterBottom>
              Our Partnered Companies !
            </Typography>
            <FacebookIcon sx={{ fontSize: 50 }} />
            <InstagramIcon sx={{ fontSize: 50 }} />
            <LinkedInIcon sx={{ fontSize: 50 }} /> <br />
            <PinterestIcon sx={{ fontSize: 50 }} />
            <RedditIcon sx={{ fontSize: 50 }} />
            <TwitterIcon sx={{ fontSize: 50 }} /> <br />
            <YouTubeIcon sx={{ fontSize: 50 }} />
            <WhatsAppIcon sx={{ fontSize: 50 }} />
            <WhatshotIcon sx={{ fontSize: 50 }} />
          </CardContent>
        </Grid>
      </Grid>
    </Paper>
  );
};
