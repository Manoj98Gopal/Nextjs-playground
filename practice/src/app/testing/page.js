"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { list } from "@/constants/dataContants";

function Page() {
  const [openTooltip, setOpenTooltip] = useState({});
  const [buttonColorChange, setButtonColorChange] = useState(null);

  const handleTooltipClose = (name) => {
    setOpenTooltip((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  };

  const handleTooltipOpen = (name) => {
    setOpenTooltip((prevState) => ({
      ...prevState,
      [name]: true,
    }));

    setTimeout(() => {
      setOpenTooltip({});
    }, 1500);
  };

  return (
    <Stack
      direction="row"
      spacing={13}
      justifyContent="center"
      sx={{
        mt: 10,
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "13rem" }}
        flexWrap="wrap"
        spacing={5}
      >
        {list?.map((name, idx) => (
          <ClickAwayListener
            key={idx}
            onClickAway={() => handleTooltipClose(name)}
          >
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              placement="top"
              onClose={() => handleTooltipClose(name)}
              open={openTooltip[name] || false}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <div>
                  <Typography variant="h5">{name}</Typography>
                </div>
              }
            >
              <Typography variant="h4" onClick={() => handleTooltipOpen(name)}>
                {name}
              </Typography>
            </Tooltip>
          </ClickAwayListener>
        ))}
      </Stack>

      <Box>
        <Stack
          direction="column"
          spacing={2}
          sx={{ maxHeight: "500px", overflow: "auto", padding: "30px" }}
        >
          {list.map((data, idx) => {
            return (
              <Stack
                direction="column"
                spacing={2}
                sx={{
                  border: "1px solid black",
                  borderRadius: "12px",
                  height: "150px",
                  width: "200px",
                  padding: "20px",
                }}
                key={idx}
                onMouseEnter={() => setButtonColorChange(data)}
                onMouseLeave={() => setButtonColorChange(null)}
              >
                <Typography variant="h4">{data}</Typography>
                <Divider />
                <Button
                  variant={
                    buttonColorChange === data ? "contained" : "outlined"
                  }
                >
                  Click Here
                </Button>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}

export default Page;
