"use client";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Chip, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function LayoutOnboarding({ children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      {/* Define o tamanho máximo para um app web */}
      <Box
        className="box-pai"
        maxWidth="sm"
        sx={{
          flexGrow: 1,

          [theme.breakpoints.up("md")]: {
            // Aplica no desktop (md em diante)
            borderRadius: 4,
            bgcolor: "#000000", // Cor de fundo para desktop

            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", // Centraliza o texto
          },
        }}
      >
        {/* AppBar */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#0F0F19",
            color: "#ffffff",
            [theme.breakpoints.up("md")]: {
              backgroundColor: "#000000", // Cor específica para desktop
            },
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HelpIcon />
            </IconButton>

            <Chip
              label="Pular"
              component="a"
              href="/chat"
              clickable
              sx={{
                backgroundColor: "#201034",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#2B1646", // Cor de fundo ao passar o mouse
                },
              }}
            />
          </Toolbar>
        </AppBar>

        {children}
      </Box>
    </Box>
  );
}
