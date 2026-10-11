"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "@/components/widgets/navbar";

export default function ProductLayout() {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#0a0a0a",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar currentSlideIndex={1} />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          pt: 12,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "var(--font-trimod), var(--font-unifix), Arial, sans-serif",
            textTransform: "uppercase",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Product Overview Coming Soon
        </Typography>
      </Box>
    </Box>
  );
}
