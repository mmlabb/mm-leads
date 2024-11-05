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
          direction="column"
          spacing={2}
          sx={{
            display: { xs: "none", md: "flex" },
            width: "492px",
            alignItems: "center",
            backgroundImage: `url('/img/GradientBoot.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            pt: 1,
            pb: 1,
            color: "#000000",
            borderBottomLeftRadius: "12px",
            borderTopLeftRadius: "12px",
          }}
        >
          <Grid
            sx={{
              display: { xs: "none", md: "flex" },
              width: "444px",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#F7F0FF",
              borderRadius: "18px",
              pt: 1,
              pb: 1,
              color: "#5D2E9A",
              backdropFilter: "blur(147.9px)", // Aplica o blur
              boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)", // Sombra
            }}
          >
            <Typography
              sx={{ pe: 1, fontFamily: "Inter, sans-serif", fontWeight: "bold" }}
              variant="h4"
              component="h4"
            >
              Acelere suas vendas
            </Typography>

            <Typography
              sx={{ pe:2 ,maxWidth: "80%" }}
              variant="body1"
            >
              Ganhe tempo com a tecnologia trabalhando a seu favor
            </Typography>
          </Grid>
          <Grid>
            <Typography sx={{ p: 2 }} variant="h3" component="h3">
              Categoria
            </Typography>
          </Grid>
          <Grid>
            <Typography sx={{ p: 2 }} variant="h3" component="h3">
              Categoria
            </Typography>
          </Grid>
          <Grid>
            <Typography sx={{ p: 2 }} variant="h3" component="h3">
              Categoria
            </Typography>
          </Grid>

          <Grid container item spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">Subtítulo 5</Typography>
              <Typography>Este é o texto do bloco 5.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Subtítulo 6</Typography>
              <Typography>Este é o texto do bloco 6.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
