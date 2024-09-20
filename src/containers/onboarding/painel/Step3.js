"use client";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import robot from "@/assets/lottie/robot.json";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Grid container spacing={2} sx={"column"}>
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
          Crie novas <br/> demandas<br />
          <br />{" "}
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
        className="box-3"
        size="grow"
        sx={{
          px: 3,
          pb: 3,
          fontWeight: "regular",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" sx={{ mb: 1 }}>
          Comece solicitando o seu pedido e nós realizamos o serviço.
        </Typography>
      </Grid>
    </Grid>
  );
}
