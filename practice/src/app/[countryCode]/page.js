"use client";

import { usePathname } from "next/navigation";
import React from "react";

function page() {
  const path = usePathname();

  return <div>Country code ....{path}</div>;
}

export default page;
