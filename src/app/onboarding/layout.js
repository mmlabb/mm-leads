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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";

export default function LayoutOnboarding({ children }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (path) => {
    handleClose();
    router.push(path);
  };

  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        [theme.breakpoints.up("md")]: {
          justifyContent: "center",
          alignItems: "center",
        },
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
              aria-label="help"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <HelpIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "#5E2CA5", 
                  color: "#ffffff", 
                  mt: 1, 
                  borderRadius: 2, 
                  boxShadow: 3, 
                },
              }}
            >
              <MenuItem onClick={() => handleRedirect("/info/termos-de-uso/")}>
                Termos de Uso
              </MenuItem>
              <MenuItem onClick={() => handleRedirect("/info/politica-pivacidade")}>
                Política de Privacidade
              </MenuItem>
            </Menu>

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
