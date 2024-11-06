"use client";
import Box from "@mui/material/Box";
import { Chip, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { RocketLaunch } from "@mui/icons-material";

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
        spacing={1}
        sx={{ width: "100%", m: 0, p: 0, justifyContent: "center" }}
      >
        <Grid
          size={8}
          className="box-chat"
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
          size={4}
          container
          direction="column"
          sx={{
            width: "492px",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundImage: `url('/img/GradientBoot.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            gap: "24px",
            pt: 1,
            pb: 1,
            mt: 5,
            mb: 5,
            color: "#000000",
            borderBottomLeftRadius: "18px",
            borderTopLeftRadius: "18px",
          }}
        >
          <Grid
            sx={{
              display: { xs: "none", md: "flex" },
              width: "444px",
              p: "24px",
              mt: "24px",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#F7F0FF",
              borderRadius: "18px",
              color: "#5D2E9A",
              backdropFilter: "blur(147.9px)", // Aplica o blur
              boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)", // Sombra
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                display: "flex",

                alignItems: "center",
              }}
              variant="h4"
              component="h4"
            >
              Acelere suas vendas <img src="/img/icon-rocket.png" />
            </Typography>

            <Typography sx={{ maxWidth: "80%" }} variant="body1">
              Ganhe tempo com a tecnologia trabalhando a seu favor
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: { xs: "none", md: "flex" },
              width: "444px",
              p: "24px",

              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "18px",
              color: "#FFF",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(147.9px)", // Aplica o blur
              boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)", // Sombra
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                display: "flex",

                alignItems: "center",
              }}
              variant="h4"
              component="h4"
            >
              Acelere suas vendas <img src="/img/icon-rocket.png" />
            </Typography>

            <Typography sx={{ maxWidth: "80%" }} variant="body1">
              Ganhe tempo com a tecnologia trabalhando a seu favor
            </Typography>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              pl: "24px",
              pr: "24px",
              mb: "24px",
              gap: 3,
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                display: { xs: "none", md: "flex" },
                width: "210px",
                p: "24px",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "18px",
                color: "#5D2E9A",
                backgroundColor: "#F7F0FF",
                backdropFilter: "blur(147.9px)", // Aplica o blur
                boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)", // Sombra
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
                variant="h4"
              >
                Abc
                <Box
                  component="img"
                  src="/img/icon-rocket.png"
                  alt="Ícone de foguete"
                  sx={{ marginLeft: "auto" }} // Empurra a imagem para o final do flex
                />
              </Typography>
              <Typography>
                Ganhe tempo com a tecnologia trabalhando a seu favor
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: { xs: "none", md: "flex" },
                width: "210px",
                p: "24px",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "18px",
                color: "#5D2E9A",
                backgroundColor: "#F7F0FF",
                backdropFilter: "blur(147.9px)", // Aplica o blur
                boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)", // Sombra
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
                variant="h4"
              >
                Abc
                <Box
                  component="img"
                  src="/img/icon-rocket.png"
                  alt="Ícone de foguete"
                  sx={{ marginLeft: "auto" }} // Empurra a imagem para o final do flex
                />
              </Typography>
              <Typography>
                Ganhe tempo com a tecnologia trabalhando a seu favor
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
