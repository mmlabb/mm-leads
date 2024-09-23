"use client";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import robot from "@/assets/lottie/robot.json";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  const theme = useTheme();

  return (
    <Grid container spacing={2} sx={"column"}>
      <Grid sx={{}}>
        <Grid
          xs={12}
          maxHeight={"100%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          size="grow"
          sx={{ px: 3, pt: 4, textAlign: "center" }}
        >
          <Typography variant="h4">
            Olá, é um prazer ter você por aqui!
          </Typography>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          alignItems="center"
          sx={{ justifyContent: "space-between" }}
        >
          <DotLottieReact
            data={robot}
            width={200}
            autoResizeCanvas={false}
            loop
            autoplay
            sx={{
              height: {
                xs: 200, // Mobile
                sm: 100, // Pequenas (até 768px)
                md: 100, // Médias (tablet e maiores)
              },
            }}
          />
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          size="grow"
          sx={{
            px: 3,
            pb: 3,
            fontWeight: "regular",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              width: "100%", // Garante que ocupa a largura do contêiner
              "@media (min-width: 768px)": {
                whiteSpace: "nowrap", // Impede quebra de linha
                maxWidth: "100%", // Garante que não ultrapasse 100%
               
              },
            }}
          >
            Agora vamos te conectar com o serviço de produção da Magmeta.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
