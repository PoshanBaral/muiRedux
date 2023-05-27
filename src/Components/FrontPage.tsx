import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export const FrontPage = () => {
  return (
    <>
      <Box
        sx={{
          height: "450px",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop_1258-55967.jpg?w=826&t=st=1684830918~exp=1684831518~hmac=b5e4acae1847e996624e90786d0d9447b6abcb20ea8db82f34af2f62750b99b7')",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box width={"300px"}>
              <Card>
                <CardMedia
                  sx={{
                    height: "180px",
                    width: "300px",
                  }}
                  component="img"
                  image="https://img.freepik.com/premium-photo/blob-shape-organic-boho-style-acidic-background-with-distorted-texture-blotch-shape-fluid-dynamical-colored-forms-generated-ai_1423-11077.jpg?w=740"
                ></CardMedia>

                <CardContent
                  sx={{
                    height: "190px",
                  }}
                >
                  <Typography gutterBottom variant="h3">
                    {" "}
                    Top Sale Collection{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    Best Lighting Collection{" "}
                  </Typography>

                  <CardActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      SHOP NOW
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box width={"300px"}>
              <Card>
                <CardMedia
                  sx={{
                    height: "200px",
                    width: "300px",
                  }}
                  component="img"
                  image="https://img.freepik.com/premium-photo/ai-generated-photo-golden-lines-green-wallpaper-table-chair-vase-with-minimalist-style_812649-780.jpg?w=740"
                ></CardMedia>

                <CardContent>
                  <Typography gutterBottom variant="h3">
                    {" "}
                    Clearence{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    Sofa upto{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    50% OFF{" "}
                  </Typography>

                  <CardActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      SHOP NOW
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box width={"300px"}>
              <Card>
                <CardMedia
                  sx={{
                    height: "200px",
                    width: "300px",
                  }}
                  component="img"
                  image="https://img.freepik.com/free-vector/cosmectic-elements-collection-watercolor-style_23-2147829325.jpg?size=626&ext=jpg&ga=GA1.2.2135726082.1684822524&semt=sph"
                ></CardMedia>

                <CardContent>
                  <Typography gutterBottom variant="h4">
                    New In
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Best Cosmetic
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Produt
                  </Typography>

                  <CardActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      SHOP NOW
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box width={"300px"} mb={2}>
              <Card>
                <CardMedia
                  sx={{
                    height: "200px",
                    width: "300px",
                  }}
                  component="img"
                  image="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309652.jpg?w=740&t=st=1684996789~exp=1684997389~hmac=3b341ec7bd442058bd3c2620017c7e215feaa7e39fe7a27997ef06e26980c085"
                ></CardMedia>

                <CardContent>
                  <Typography gutterBottom variant="h4">
                    Most Viewed
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Best Electronic
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Produt
                  </Typography>

                  <CardActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      SHOP NOW
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
