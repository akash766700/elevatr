"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/widgets/navbar";
import HeroSection from "./heroSection";


export default function HomeLayout() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#000000",
        position: "relative",
      }}
    >
      {/* Top Navbar */}
      <Navbar currentSlideIndex={activeSlide} />

      {/* Hero Section Parallax Slider */}
      <HeroSection onSlideChange={(index) => setActiveSlide(index)} />
    </Box>
  );
}
