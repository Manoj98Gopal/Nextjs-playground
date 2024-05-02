"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { list } from "@/constants/dataContants";

function Page() {
  const [openTooltip, setOpenTooltip] = useState({});
  const [buttonColorChange, setButtonColorChange] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const [secondWay, setSecondWay] = useState(null);

  const stackRef = useRef(null);
  const secondWayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackRef.current) return;

      const container = stackRef.current;
      const containerRect = container.getBoundingClientRect();
      const boxes = container.querySelectorAll(".inner-stack");
      const visibleIds = [];

      boxes.forEach((data) => {
        const boxRect = data.getBoundingClientRect();

        // Check if the box is within the visible area of the container
        if (
          boxRect.top >= containerRect.top &&
          boxRect.bottom <= containerRect.bottom
        ) {
          visibleIds.push(data.id);
        }
      });

      const middleIndex = Math.floor(visibleIds.length / 2); // Calculate the middle index
      let middleCard;

      if (visibleIds.length % 2 === 0) {
        // If the array has an even number of elements, return the two middle elements
        middleCard = parseInt(visibleIds[middleIndex - 1]);
      } else {
        // If the array has an odd number of elements, return the middle element
        middleCard = parseInt(visibleIds[middleIndex]);
      }

      setActiveIndex(middleCard);

      // console.log("box ====", visibleIds);
    };

    if (stackRef.current) {
      stackRef.current.addEventListener("scroll", handleScroll);

      handleScroll();
    }

    return () => {
      if (stackRef.current) {
        stackRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  //second way  experiment of enabling the button
  useEffect(() => {
    const handleScrollSecond = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleChildIds = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target.id);

          setSecondWay(parseInt(visibleChildIds[1]));
        },
        { threshold: 1.0 }
      );

      const children = Array.from(secondWayRef.current.children);
      children.forEach((child) => observer.observe(child));
    };

    if (secondWayRef.current) {
      secondWayRef.current.addEventListener("scroll", handleScrollSecond);

      handleScrollSecond();
    }

    return () => {
      if (secondWayRef.current) {
        secondWayRef.current.removeEventListener("scroll", handleScrollSecond);
      }
    };
  }, []);

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

     <TextField 
      label="Email"
      size="small"
      />


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
          ref={stackRef}
          direction="column"
          spacing={2}
          sx={{ maxHeight: "500px", overflow: "auto", padding: "30px" }}
        >
          {list.map((data, idx) => {
            return (
              <Stack
                className="inner-stack"
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
                id={idx}
              >
                <Typography variant="h4">{data}</Typography>
                <Divider />
                <Button
                  variant={activeIndex === idx ? "contained" : "outlined"}
                >
                  Click Here
                </Button>
              </Stack>
            );
          })}
        </Stack>
      </Box>

      <Box>
        <Stack
          ref={secondWayRef}
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
                id={idx}
              >
                <Typography variant="h4">{data}</Typography>
                <Divider />
                <Button variant={secondWay === idx ? "contained" : "outlined"}>
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
