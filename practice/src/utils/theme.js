"use client";

import { Inter } from "next/font/google";
import { createTheme } from "@mui/material";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const theme = createTheme({
    palette: {
        primary: {
          main: "#272727",
          dark: "#000000",
        },
        text: {
          primary: "#222222",
          secondary: "#717171",
        },
        divider: "#dddddd",
        background: {
          default: "#ffff",
        },
      },
    
      typography: {
        fontFamily: inter.style.fontFamily,
        htmlFontSize: 14,
        color: "#222222",
    
        h1: {
          fontSize: "2.875rem",
          fontWeight: 500,
          lineHeight: "52px",
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 500,
          lineHeight: "36px",
        },
    
        h3: {
          fontSize: "1.625rem",
          fontWeight: 500,
          lineHeight: "30px",
        },
        h4: {
          fontSize: "1.375rem",
          fontWeight: 500,
          letterSpacing: "-0.22px",
          lineHeight: "26px",
        },
        h5: {
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: "20px",
        },
        h6: {
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: "20px",
        },
        subtitle1: {
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: "20px",
        },
        subtitle2: {
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: "22px",
        },
        body1: {
          fontSize: "1.375rem",
          fontWeight: 400,
          lineHeight: "26px",
        },
        body2: {
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: "24px",
        },
        button: {
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "normal",
        },
    
        caption: {
          fontSize: "0.75rem",
          lineHeight: "20px",
          fontWeight: 400,
        },
        overline: {
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        },
        secondary: {
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: "1.4",
          color: "rgba(0, 0, 0, 0.45)",
        },
      },
    
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              boxShadow: "none",
              borderRadius: "8px",
              padding: "8px 20px",
              "&:hover": {
                boxShadow: "none",
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: "24px",
              boxShadow: "0px 0px 0px 1px #DDD",
            },
          },
        },
    
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              backgroundColor: "#ffffff",
              padding: "16px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              color: "#222222 !important",
              borderRadius: "8px",
            },
          },
        },
        MuiCheckbox: {
          styleOverrides: {
            root: {
              color: "#b0b0b0",
            },
          },
        },
    
        MuiFormControlLabel: {
          styleOverrides: {
            label: {
              fontSize: "14px",
              fontWeight: 400,
            },
          },
        },
    
        MuiChip: {
          styleOverrides: {
            root: {
              padding: "20px 10px",
              fontSize: "14px",
              borderRadius: "50px",
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              borderRadius: "24px",
              boxShadow: "0px 6px 20px 0px rgba(0, 0, 0, 0.20);",
            },
          },
        },
        MuiBackdrop: {
          styleOverrides: {
            root: {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          },
        },
      },
});

export default theme;
