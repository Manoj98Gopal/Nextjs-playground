"use client"


import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Editor } from "./Editor";

export const EditorComponent = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ padding: "20px" }}>
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: "15px",
            height: "89vh",
            padding: "20px 8rem",
          }}
        >
          <Typography variant="h5" textAlign="center" pb={2}>
            Text Editor
          </Typography>
          <Editor />
        </Box>
      </Container>
    </>
  );
};
