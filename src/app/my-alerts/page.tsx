import React from "react";
import { Metadata } from "next";
import MyAlerts from "@/component/MyAlerts";
import AppLayout from "@/component/Layout/AppLayout";

export const metadata: Metadata = {
  title: "Alerts Page",
};

const Alerts = () => {
  return (
    <AppLayout>
      <MyAlerts />
    </AppLayout>
  );
};

export default Alerts;
