import React from "react";

const RootLayout = ({ children }) => {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </>
  );
};

export default RootLayout;
