"use client";
import React from "react";
import PropertyList from "./PropertyList";
import CallToAction from "./CallToAction";
import FeatureNeighborhood from "./FeatureNeighborhood";
import GlobalSearch from "./GlobalSearch";
import AboutDetails from "./AboutDetails";
import Testimonials from "./Testimonials";

const Dashboard = () => {
  return (
    <div
      className={`min-h-[calc(100vh-100px)] relative overflow-hidden`}
    >
      <GlobalSearch />
      <AboutDetails />
      <PropertyList />
      <FeatureNeighborhood />
      <CallToAction />
      <Testimonials />
    </div>
  );
};

export default Dashboard;
