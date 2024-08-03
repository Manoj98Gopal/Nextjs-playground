import { FooterLinks } from "@/constants/dataContants";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Box component="footer" sx={{ padding: "10px 20px" }}>
      <Typography variant="h4" component="h2" sx={{ mt: 2, mb: 3 }}>
        Quick links
      </Typography>
      <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 3 }}>
        Page links
      </Typography>
      <Box
        component="nav"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4px 8px",
          marginBottom: "50px",
          alignItems: "center",
        }}
      >
        {FooterLinks?.map((data, idx) => (
          <React.Fragment
            key={idx}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              "&::after": {
                content: idx < FooterLinks.length - 1 ? "'•'" : "''",
                color: "#cdcdcd",
                marginLeft: "8px",
                fontSize: "12px",
              },
            }}
          >
            <Box
              component={Link}
              href={data.pageLink}
              sx={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
                lineHeight: "1.5",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "black",
                },
              }}
              aria-label={data.label}
              target="_blank"
              rel="noopener noreferrer"
              className="Link"
            >
              {data.label}
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
