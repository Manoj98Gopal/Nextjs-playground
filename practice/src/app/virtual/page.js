"use client";

import { personRecord } from "@/constants/dataContants";
import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";

const Record = ({ name, age, location, salary }) => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "30px",
        }}
      >
        <h3>Name : {name}</h3>
        <h3>age : {age}</h3>
        <h3>location : {location}</h3>
        <h3>salary : {salary}</h3>
      </div>
    </>
  );
};

function page() {
  const data = [...personRecord];

  const [height, setHeight] = useState(700);

  const tempHeight = useRef();

  useEffect(() => {
    setHeight(tempHeight.current.clientHeight);
  }, []);

  const Row = ({ index, style, data }) => {
    console.log("calling ",index)
    return (
      <div style={{ ...style, overflow: "hidden" }}>
        <Record {...data[index]} />
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "96vh",
          overflow: "hidden",
        }}
        ref={tempHeight}
      >
        <List
          height={height}
          itemCount={data.length}
          itemSize={230}
          width="60%"
          itemData={data}
        >
          {Row}
        </List>
      </div>
    </>
  );
}

export default page;
