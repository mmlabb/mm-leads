"use client";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import robot from "@/assets/lottie/robot.json";
import { useState } from "react";
import Button from "@mui/material/Button";
import ReactDOM from "react-dom";

export default function Home() {
  return (
    <Grid container spacing={2} sx={"column"}>
      <Grid
        xs={12}
        maxHeight={"100%"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        size="grow"
        sx={{ px: 3, pt: 4, textAlign: "center" }}
      >
        <Typography variant="h4">Bem-vindo a Área de projetos
          <br/>
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
          autoResizeCanvas
          loop
          autoplay
        />
      </Grid>
      <Grid
        xs={12}
        display="flex"
        justifyContent="space-between"
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
        <Typography variant="body1">
          Aqui você acompanha o andamento das<br/>suas demandas com clareza enquanto<br/>
          nosso time faz tudo acontecer.
        </Typography>

        {/* <Button
          className="btn-g"
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#FFFFFF", color: "#000000" }}
        >
          Proximo passo
        </Button> */}
      </Grid>
    </Grid>
  );
}
