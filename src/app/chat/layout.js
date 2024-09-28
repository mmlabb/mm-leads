"use client";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import { Chip, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function LayoutChat({ children }) {
  const theme = useTheme();

  return (
    <Container sx={{ p: 0,  width: "100%" }}>
      {/* Define o tamanho máximo para um app web */}
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        <Grid
          size={8}
          className="box-chat"
          maxWidth="sm"
          sx={{
            flexGrow: 1,

            [theme.breakpoints.up("md")]: {
              // Aplica no desktop (md em diante)
              margin: 0,
              borderRadius: 4,
              bgcolor: "#000000", // Cor de fundo para desktop
              mx: "auto", // Centraliza horizontalmente
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

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {children}
          </Box>
        </Grid>
        <Grid
          size={4}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffff",
            borderRadius: "12px",
            pt: 1,
            pb: 1,
            color: "#000000",
            borderBottomLeftRadius: "12px",
            
          }}
        >
          <Typography variant="h1" component="h2">
            Categoria
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
