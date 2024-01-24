import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div>Sidebar</div>
      {children}
    </>
  );
};

export default DashboardLayout;
