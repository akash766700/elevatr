"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: { xs: 3, md: 8 },
        bgcolor: "#000000",
        color: "rgba(255, 255, 255, 0.7)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="body2">
        © 2026 elevatr.in. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Typography
          component={Link}
          href="/privacy"
          variant="body2"
          sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "#fff" } }}
        >
          Privacy Policy
        </Typography>
        <Typography
          component={Link}
          href="/terms"
          variant="body2"
          sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "#fff" } }}
        >
          Terms of Service
        </Typography>
      </Box>
    </Box>
  );
}
