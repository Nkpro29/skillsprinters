import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Item from "./Item.js";
import slider from "./helper/slider.json";
import { Container, Grid, Box, CssBaseline } from "@mui/material";
import { useState } from "react";

function Profile() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleNext = () => {
    setSelectedItem((prevSelectedItem) => (prevSelectedItem + 1) % slider.length);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          padding: 0,
          margin: 0,
          maxWidth: "100%",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box
              sx={{
                border: "2px solid #ccc",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                padding: "20px",
                width: "100%",
                maxWidth: "600px", 
                height: "400px", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column", 
                overflow: "hidden", 
              }}
            >
              <Carousel
                selectedItem={selectedItem}
              >
                {slider.map((item) => (
                  <Item key={item.id} item={item} onNext={handleNext} />
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Profile;
