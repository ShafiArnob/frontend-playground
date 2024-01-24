import React from "react";
import RootLayout from "../../components/Layouts/RootLayout";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const DashboardPage = () => {
  return <div>Dashboard Page</div>;
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
