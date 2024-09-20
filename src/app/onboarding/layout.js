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

export default function LayoutOnboarding({ children }) {
  return (
    <Container maxWidth="xs" sx={{ p: 0, height: "100vh" }}>
      {" "}
      {/* Define o tamanho máximo para um app web */}
      <Box sx={{ flexGrow: 1 }}>
        {/* AppBar */}
        <AppBar
          position="static"
          sx={{ backgroundColor: "#000000", color: "#ffffff" }}
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
              href="#basic-chip"
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
    </Container>
  );
}
