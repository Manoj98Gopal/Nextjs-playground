import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import React from "react";

function page() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid black",
          padding: "20px",
          height: "90vh",
        }}
      >
        <h1>working</h1>
      </Box>
      <Footer />
    </>
  );
}

export default page;
