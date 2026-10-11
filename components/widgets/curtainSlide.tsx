"use client";

import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { HomeSlideData } from "@/utils/type";

export interface CurtainSlideProps {
  slide: HomeSlideData;
  index: number;
  onScrollNext?: () => void;
}

const CurtainSlide = forwardRef<HTMLDivElement, CurtainSlideProps>(
  ({ slide, index, onScrollNext }, ref) => {
    // Slide 0 is the base slide (always full height at the background)
    if (index === 0) {
      return (
        <Box
          id={`slide-${index}`}
          component="section"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1,
            overflow: "hidden",
            bgcolor: "#000000",
          }}
        >
          {/* Background Image Layer */}
          <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
            <Image
              src={slide.image}
              alt={`Elevatr - ${slide.headline.join(" ")}`}
              fill
              priority
              quality={95}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.2) 100%)",
              }}
            />
          </Box>

          {/* Foreground Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              px: { xs: 3, sm: 5, md: 7, lg: 8 },
              pt: { xs: 12, sm: 14, md: 16 },
              pb: { xs: 4, sm: 5, md: 6 },
              boxSizing: "border-box",
              pointerEvents: "none",
            }}
          >
            <Box sx={{ flex: { xs: 0.8, md: 0.85 } }} />
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                userSelect: "none",
                transform: { xs: "translateY(-6px)", md: "translateY(-14px)" },
              }}
            >
              {slide.headline.map((line, lIdx) => (
                <Typography
                  key={lIdx}
                  component="h1"
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: {
                      xs: "2.4rem",
                      sm: "4.2rem",
                      md: "5.8rem",
                      lg: "7.2rem",
                      xl: "8.2rem",
                    },
                    fontWeight: 700,
                    letterSpacing: { xs: "-0.01em", md: "0em" },
                    lineHeight: { xs: 1.1, sm: 1.05, md: 1.02 },
                    textTransform: "uppercase",
                    color: "#ffffff",
                    textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  {line}
                </Typography>
              ))}
            </Box>
            <Box sx={{ flex: { xs: 1.1, md: 1.15 } }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "flex-end" },
                justifyContent: "space-between",
                gap: 3,
                width: "100%",
              }}
            >
              <Box sx={{ maxWidth: { xs: "100%", sm: "560px", md: "640px" } }}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: { xs: "0.95rem", sm: "1.08rem", md: "1.2rem" },
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    mb: 0.8,
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                  }}
                >
                  {slide.subheading}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.18rem" },
                    lineHeight: 1.45,
                    color: "#ffffff",
                    fontWeight: 400,
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                  }}
                >
                  {slide.description}
                </Typography>
              </Box>
              {slide.showScrollPrompt ? (
                <Box
                  onClick={onScrollNext}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    cursor: "pointer",
                    pointerEvents: "auto",
                    userSelect: "none",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                    "&:hover": { opacity: 0.8, transform: "translateY(2px)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 16,
                      height: 24,
                      border: "1.5px solid rgba(255, 255, 255, 0.7)",
                      borderRadius: "12px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      pt: "4px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={{
                        width: 3,
                        height: 4.5,
                        bgcolor: "#ffffff",
                        borderRadius: "2px",
                        animation: "mouseScroll 1.8s infinite ease-in-out",
                        "@keyframes mouseScroll": {
                          "0%": { transform: "translateY(0)", opacity: 1 },
                          "60%": { transform: "translateY(7px)", opacity: 0 },
                          "100%": { transform: "translateY(0)", opacity: 0 },
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 400,
                      color: "rgba(255, 255, 255, 0.75)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Scroll to explore
                  </Typography>
                </Box>
              ) : null}
            </Box>
          </Box>
        </Box>
      );
    }

    // Slides 1, 2, 3, 4: Outer curtain anchored at bottom: 0, expanding upwards
    return (
      <Box
        ref={ref}
        id={`slide-${index}`}
        component="section"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "0%", // dynamically controlled from bottom: 0
          display: "none",
          zIndex: index + 1,
          overflow: "hidden",
          bgcolor: "#000000",
          boxShadow: "none",
        }}
      >
        {/* Inner viewport container: anchored to bottom: 0 with exact 100vh height */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Background Image Layer */}
          <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
            <Image
              src={slide.image}
              alt={`Elevatr - ${slide.headline.join(" ")}`}
              fill
              quality={95}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.2) 100%)",
              }}
            />
          </Box>

          {/* Foreground Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              px: { xs: 3, sm: 5, md: 7, lg: 8 },
              pt: { xs: 12, sm: 14, md: 16 },
              pb: { xs: 4, sm: 5, md: 6 },
              boxSizing: "border-box",
              pointerEvents: "none",
            }}
          >
            <Box sx={{ flex: { xs: 0.8, md: 0.85 } }} />
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                userSelect: "none",
                transform: { xs: "translateY(-6px)", md: "translateY(-14px)" },
              }}
            >
              {slide.headline.map((line, lIdx) => (
                <Typography
                  key={lIdx}
                  component="h1"
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: {
                      xs: "2.4rem",
                      sm: "4.2rem",
                      md: "5.8rem",
                      lg: "7.2rem",
                      xl: "8.2rem",
                    },
                    fontWeight: 700,
                    letterSpacing: { xs: "-0.01em", md: "0em" },
                    lineHeight: { xs: 1.1, sm: 1.05, md: 1.02 },
                    textTransform: "uppercase",
                    color: "#ffffff",
                    textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  {line}
                </Typography>
              ))}
            </Box>
            <Box sx={{ flex: { xs: 1.1, md: 1.15 } }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "flex-end" },
                justifyContent: "space-between",
                gap: 3,
                width: "100%",
              }}
            >
              <Box sx={{ maxWidth: { xs: "100%", sm: "560px", md: "640px" } }}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: { xs: "0.95rem", sm: "1.08rem", md: "1.2rem" },
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    mb: 0.8,
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                  }}
                >
                  {slide.subheading}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.18rem" },
                    lineHeight: 1.45,
                    color: "#ffffff",
                    fontWeight: 400,
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                  }}
                >
                  {slide.description}
                </Typography>
              </Box>
              {slide.showScrollPrompt ? (
                <Box
                  onClick={onScrollNext}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    cursor: "pointer",
                    pointerEvents: "auto",
                    userSelect: "none",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                    "&:hover": { opacity: 0.8, transform: "translateY(2px)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 16,
                      height: 24,
                      border: "1.5px solid rgba(255, 255, 255, 0.7)",
                      borderRadius: "12px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      pt: "4px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={{
                        width: 3,
                        height: 4.5,
                        bgcolor: "#ffffff",
                        borderRadius: "2px",
                        animation: "mouseScroll 1.8s infinite ease-in-out",
                        "@keyframes mouseScroll": {
                          "0%": { transform: "translateY(0)", opacity: 1 },
                          "60%": { transform: "translateY(7px)", opacity: 0 },
                          "100%": { transform: "translateY(0)", opacity: 0 },
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 400,
                      color: "rgba(255, 255, 255, 0.75)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Scroll to explore
                  </Typography>
                </Box>
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);

CurtainSlide.displayName = "CurtainSlide";
export default CurtainSlide;
