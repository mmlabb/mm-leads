"use client";
import Box from "@mui/material/Box";
import { Chip, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function LayoutChat({ children }) {
  const theme = useTheme();

  return (
    <Container
      className="container-pai-chat"
      maxWidth="xxl"
      sx={{ p: 0, m: 0 }}
    >
      {/* Define o tamanho máximo para um app web */}
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", m: 0, p: 0, justifyContent: "center" }}
      >
        <Grid
          size={8}
          className="box-chat"
          maxWidth="xl"
          sx={{
            flexGrow: 1,
            height: "100%",
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
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {children}
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: { xs: "none", md: "flex", md: "none" },
            alignItems: "center",
            backgroundColor: "#ffff",
            pt: 1,
            pb: 1,
            color: "#000000",
            borderBottomLeftRadius: "12px",
            borderTopLeftRadius: "12px",
          }}
        >
          <Typography sx={{ p: 2 }} variant="h1" component="h3">
            Categoria
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
