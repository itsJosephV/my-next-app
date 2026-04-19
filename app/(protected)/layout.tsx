import Navbar from "@/components/Navbar";

import React from "react";

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="p-5">{children}</div>
    </>
  );
};

export default SharedLayout;
