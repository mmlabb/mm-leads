"use client";
import { Grid, Typography, Box } from "@mui/material";

export default function Sidebar() {
  return (
    <Grid
      className="side-bar"
      container
      direction="column"
      sx={{
        display: { xs: "none", md: "flex" },
        maxWidth: "492px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
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
      {/* Card principal */}
      <Grid
        sx={{
          maxWidth: "444px",
          width: "100%",
          p: "24px",
          mt: "24px",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#F7F0FF",
          borderRadius: "18px",
          color: "#5D2E9A",
          backdropFilter: "blur(147.9px)",
          boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)",
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
          Acelere suas vendas <img src="/img/icon-rocket.png" />
        </Typography>

        <Typography sx={{ maxWidth: "80%" }}>
          Ganhe tempo com a tecnologia trabalhando a seu favor
        </Typography>
      </Grid>

      <Grid
        sx={{
          maxWidth: "444px",
          width: "100%",
          p: "24px",
          mt: "24px",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#F7F0FF",
          borderRadius: "18px",
          color: "#5D2E9A",
          backdropFilter: "blur(147.9px)",
          boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)",
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
          Acelere suas vendas <img src="/img/icon-rocket.png" />
        </Typography>

        <Typography sx={{ maxWidth: "80%" }}>
          Ganhe tempo com a tecnologia trabalhando a seu favor
        </Typography>
      </Grid>

      {/* Cards menores */}
      <Grid
        sx={{
          display: "flex",
          gap: "24px",
          maxWidth: "444px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {["Abc", "ERP"].map((title) => (
          <Grid
            key={title}
            sx={{
              maxWidth: "210px",
              width: "48%",
              p: "24px",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "18px",
              color: "#5D2E9A",
              backgroundColor: "#F7F0FF",
              backdropFilter: "blur(147.9px)",
              boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)",
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
              {title}
              <Box
                component="img"
                src="/img/icon-rocket.png"
                alt="Ícone de foguete"
                sx={{ marginLeft: "auto" }}
              />
            </Typography>
            <Typography>
              Ganhe tempo com a tecnologia trabalhando a seu favor
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
