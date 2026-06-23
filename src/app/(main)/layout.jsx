import AdvertisementModal from "@/components/shared/AdvertisementModal";
import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <AdvertisementModal />
      {children}
    </div>
  );
};

export default MainLayout;
