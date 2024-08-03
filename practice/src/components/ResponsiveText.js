import { SKILLS } from "@/constants/dataContants";
import { Box, Stack, Link } from "@mui/material";
import React from "react";

function ResponsiveText() {
  return (
    <Box sx={{ padding: "40px" }}>
      <Box
        sx={{
          margin: "40px auto",
          border: "1px solid black",
          borderRadius: "8px",
          padding: "40px",
          maxWidth: "60%",
          textAlign: "left",
        }}
      >
        <Stack direction="row" gap={1} flexWrap="wrap" alignItems="center">
          {SKILLS?.map((data, idx) => (
            <Link
              key={idx}
              href="/"
              sx={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
                "&::after": {
                  content: idx < SKILLS.length - 1 ? "' •'" : "''",
                  color: "gray",
                  marginLeft: "4px",
                  whiteSpace: "nowrap",
                },
              }}
            >
              {data}
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default ResponsiveText;
