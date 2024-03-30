"use client";

import React, { useState } from "react";
import { ClickAwayListener, Stack, Tooltip, Typography } from "@mui/material";
import { list } from "@/constants/dataContants";

function Page() {
  const [openTooltip, setOpenTooltip] = useState({});

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
    <div>
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
    </div>
  );
}

export default Page;
