"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/assets/generic-data";

export interface NavbarProps {
  currentSlideIndex?: number;
}

export default function Navbar({ currentSlideIndex = 0 }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  // Lock body scroll when menu is active & listen to Escape key
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Set current year
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2.5, sm: 4.5, md: 6, lg: 7 },
          py: { xs: 2.2, sm: 2.8, md: 3.5 },
          background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "auto",
        }}
      >
        {/* Left Spacer for symmetric center alignment of the logo */}
        <Box sx={{ width: { xs: "auto", md: 220 }, display: { xs: "none", md: "block" } }} />

        {/* Center: Elevatr.in Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              "&:hover": { opacity: 0.9, transform: "scale(1.02)" },
            }}
          >
            <Image
              src="/Logo.png"
              alt="elevatr.in"
              width={160}
              height={75}
              priority
              style={{
                width: "auto",
                height: "auto",
                maxHeight: "54px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Link>

        {/* Right: Actions dynamically matching each screen */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: { xs: "auto", md: 220 },
            justifyContent: "flex-end",
          }}
        >
          {/* Screen 1: FOR EMPLOYER  |  MENU */}
          {currentSlideIndex === 0 ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component={Link}
                href="/employer"
                sx={{
                  color: "#ffffff",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: { xs: "0.78rem", sm: "0.85rem", md: "0.88rem" },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                FOR EMPLOYER
              </Typography>

              <Typography
                component="span"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mx: 1.6,
                  fontWeight: 300,
                  fontSize: "0.9rem",
                }}
              >
                |
              </Typography>

              <Typography
                onClick={() => setMenuOpen(true)}
                sx={{
                  color: "#ffffff",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: { xs: "0.78rem", sm: "0.85rem", md: "0.88rem" },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                MENU
              </Typography>
            </Box>
          ) : currentSlideIndex === 1 ? (
            /* Screen 2: FOR EMPLOYER + Hamburger */
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Typography
                component={Link}
                href="/employer"
                sx={{
                  color: "#ffffff",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: { xs: "0.78rem", sm: "0.85rem", md: "0.88rem" },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                FOR EMPLOYER
              </Typography>

              <IconButton
                onClick={() => setMenuOpen(true)}
                aria-label="Open Menu"
                sx={{
                  color: "#ffffff",
                  p: 0.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                }}
              >
                <MenuIcon sx={{ fontSize: "1.7rem" }} />
              </IconButton>
            </Box>
          ) : (
            /* Screens 3, 4, 5: Hamburger only */
            <IconButton
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              sx={{
                color: "#ffffff",
                p: 0.5,
                "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
              }}
            >
              <MenuIcon sx={{ fontSize: "1.7rem" }} />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* ================= FULLSCREEN AWWWARDS MENU OVERLAY ================= */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 2000,
          backgroundColor: "#070709",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          visibility: menuOpen ? "visible" : "hidden",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.65s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.5s ease, visibility 0.65s",
          overflow: "hidden",
          px: { xs: 2.5, sm: 5, md: 7, lg: 8 },
          py: { xs: 2, sm: 2.8, md: 3 },
          boxSizing: "border-box",
          backgroundImage: `
            radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.04) 0%, transparent 55%),
            radial-gradient(circle at 10% 85%, rgba(255, 255, 255, 0.02) 0%, transparent 45%)
          `,
        }}
      >
        {/* 1. MENU TOP BAR */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            pb: { xs: 1.5, md: 2 },
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-15px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
          }}
        >
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                "&:hover": { opacity: 0.85, transform: "scale(1.02)" },
              }}
            >
              <Image
                src="/Logo.png"
                alt="elevatr.in"
                width={160}
                height={75}
                priority
                style={{
                  width: "auto",
                  height: "auto",
                  maxHeight: "52px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Link>

          {/* Interactive Close Pill Button */}
          <Box
            onClick={() => setMenuOpen(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              cursor: "pointer",
              px: { xs: 1.8, sm: 2.2 },
              py: 0.7,
              borderRadius: "40px",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              "&:hover": {
                backgroundColor: "#ffffff",
                borderColor: "#ffffff",
                "& .close-text": { color: "#000000" },
                "& .close-icon": { color: "#000000", transform: "rotate(90deg)" },
              },
            }}
          >
            <Typography
              className="close-text"
              sx={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: { xs: "0.75rem", sm: "0.82rem" },
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#ffffff",
                transition: "color 0.25s ease",
              }}
            >
              CLOSE
            </Typography>
            <CloseIcon
              className="close-icon"
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.15rem" },
                color: "#ffffff",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </Box>
        </Box>

        {/* 2. MAIN BODY: LEFT NAVIGATION + RIGHT DESCRIPTION & SOCIALS */}
        <Box
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.25fr 0.75fr", lg: "1.35fr 0.65fr" },
            gap: { xs: 4, md: 6, lg: 8 },
            alignItems: "center",
            py: { xs: 2, sm: 3 },
            width: "100%",
          }}
        >
          {/* Left Column: Navigation Links */}
          <Box
            component="nav"
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2.5, sm: 3.2, md: 4 },
              width: "100%",
            }}
          >
            {NAV_LINKS.map((link, idx) => {
              const isHovered = hoveredIndex === idx;
              const isDimmed = hoveredIndex !== null && !isHovered;

              return (
                <Box
                  key={link.label}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  sx={{
                    position: "relative",
                    opacity: menuOpen ? (isDimmed ? 0.25 : 1) : 0,
                    transform: menuOpen
                      ? isHovered
                        ? "translateX(18px)"
                        : "translateX(0)"
                      : "translateY(25px)",
                    transition: `
                      opacity ${isDimmed ? "0.25s" : "0.5s"} ease ${menuOpen ? `${0.15 + idx * 0.04}s` : "0s"},
                      transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)
                    `,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "20px",
                      textDecoration: "none",
                      width: "100%",
                    }}
                  >
                    {/* Monospaced numbering */}
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: { xs: "0.9rem", sm: "1.05rem", md: "1.2rem" },
                        fontWeight: 500,
                        color: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.35)",
                        letterSpacing: "0.05em",
                        transition: "color 0.25s ease",
                        minWidth: { xs: "30px", sm: "38px" },
                      }}
                    >
                      {link.number || `0${idx + 1}`}
                    </Typography>

                    {/* Main Link Title */}
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: {
                          xs: "1.8rem",
                          sm: "2.4rem",
                          md: "3.2rem",
                          lg: "3.8rem",
                        },
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        textTransform: "uppercase",
                        lineHeight: 1.15,
                        whiteSpace: "nowrap",
                        color: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.9)",
                        textShadow: isHovered ? "0 0 25px rgba(255,255,255,0.35)" : "none",
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {link.label}
                    </Typography>

                    {/* Tag Indicator & Arrow on hover */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <ArrowForwardIcon
                        sx={{
                          fontSize: { xs: "1.35rem", sm: "1.8rem", md: "2.2rem" },
                          color: "#ffffff",
                        }}
                      />
                      {link.tag ? (
                        <Typography
                          sx={{
                            display: { xs: "none", sm: "inline-block" },
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            px: 1.4,
                            py: 0.3,
                            borderRadius: "4px",
                            border: "1px solid rgba(255,255,255,0.3)",
                            color: "rgba(255,255,255,0.8)",
                          }}
                        >
                          {link.tag}
                        </Typography>
                      ) : null}
                    </Box>
                  </Link>
                </Box>
              );
            })}
          </Box>

          {/* Right Column: Platform Manifesto, Inquiries & Socials */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              gap: { md: 3, lg: 3.5 },
              borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
              pl: { md: 4.5, lg: 5.5 },
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            {/* Statement / Manifesto */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.4)",
                  mb: 1,
                }}
              >
                // PLATFORM MANIFESTO
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: { md: "0.92rem", lg: "1.02rem" },
                  fontWeight: 400,
                  lineHeight: 1.55,
                  color: "rgba(255, 255, 255, 0.75)",
                  maxWidth: "420px",
                }}
              >
                Your career is more than a two-page PDF. Elevatr replaces guesswork with verifiable
                proof, connecting ambitious talent directly with companies that value craft.
              </Typography>
            </Box>

            {/* Direct Line / Contact */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.4)",
                  mb: 0.8,
                }}
              >
                // DIRECT INQUIRIES
              </Typography>
              <Typography
                component="a"
                href="mailto:hello@elevatr.in"
                sx={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: { md: "1.05rem", lg: "1.15rem" },
                  fontWeight: 600,
                  color: "#ffffff",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                  pb: 0.3,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#ffffff",
                    borderColor: "#ffffff",
                    transform: "translateX(4px)",
                  },
                }}
              >
                hello@elevatr.in
                <NorthEastIcon sx={{ fontSize: "0.95rem" }} />
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255, 255, 255, 0.45)",
                  mt: 0.6,
                }}
              >
                Bengaluru, India · Global Remote
              </Typography>
            </Box>

            {/* Social Links */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.4)",
                  mb: 1,
                }}
              >
                // ECOSYSTEM & SOCIALS
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
                {[
                  { name: "LinkedIn", href: "https://linkedin.com" },
                  { name: "Twitter / X", href: "https://twitter.com" },
                  { name: "Instagram", href: "https://instagram.com" },
                  { name: "GitHub", href: "https://github.com" },
                ].map((social) => (
                  <Box
                    key={social.name}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      px: 1.4,
                      py: 0.6,
                      borderRadius: "30px",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      color: "rgba(255, 255, 255, 0.75)",
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderColor: "rgba(255, 255, 255, 0.35)",
                        color: "#ffffff",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {social.name}
                    <NorthEastIcon sx={{ fontSize: "0.8rem", opacity: 0.7 }} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 3. MENU BOTTOM FOOTER BAR */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pt: { xs: 1.5, md: 2 },
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255, 255, 255, 0.45)",
              letterSpacing: "0.04em",
            }}
          >
            ELEVATR.IN © {currentYear} — ALL RIGHTS RESERVED
          </Typography>
        </Box>
      </Box>
    </>
  );
}
