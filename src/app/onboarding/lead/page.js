"use client";
import { Button, Grid, LinearProgress } from "@mui/material";
import Step1 from "@/containers/onboarding/lead/Step1";
import Step2 from "@/containers/onboarding/lead/Step2";
import { useState } from "react";
import Link from "next/link"; // Importa o componente Link

function MyPage() {
  const [step, setStep] = useState(1);

  return (
    <div>
      {/* Barra de progresso */}
      <LinearProgress
        variant="determinate"
        value={(100 / 2) * step}
        sx={{
          height: 8, // Ajusta a altura da barra
          backgroundColor: "#D3D3D3", // Cor de fundo da barra
          borderRadius: 10,
          position: "fixed", // Faz a barra de progresso ficar fixa no topo
          zIndex: 1101, // Coloca a barra de progresso acima do AppBar
          top: 0,
          left: 0,
          width: "100%",
        }}
      />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <Grid
        item
        display="flex"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        className="grid-btn"
        sx={{
          width: "100%",
          mt: 2,
          "@media (min-width: 768px)": {
            backgroundColor: "#5D2E9A", // Fundo roxo em desktop
            pb: 4,
          },
        }}
      >
        {/* O botão Voltar só aparece se o passo for maior que 1 */}
        {step > 1 && (
          <Button
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              backgroundColor: "black",
              color: "white",
              mr: 1,
              ["@media (min-width: 768px)"]: {
                backgroundColor: "#5D2E9A", // Muda a cor no desktop
                "&:hover": {
                  backgroundColor: "#483D8B", // Cor ao passar o mouse no desktop
                },
              },
            }}
            className="btn-v"
            onClick={() => setStep(step - 1)}
          >
            Voltar
          </Button>
        )}

        {/* Um único botão Continuar com comportamento condicional */}
        {step < 2 ? (
          <Button
            className="btn-c"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "white",
              color: "black",
              ["@media (min-width: 768px)"]: {
                backgroundColor: "#5D2E9A", // Muda a cor no desktop
                "&:hover": {
                  backgroundColor: "#483D8B", // Cor ao passar o mouse no desktop
                },
              },
            }}
            onClick={() => setStep(step + 1)}
          >
            Continuar
          </Button>
        ) : (
          <Link href="/chat" passHref>
            <Button
              className="btn-c btn-ct"
              fullWidth
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                ["@media (min-width: 768px)"]: {
                  backgroundColor: "#5D2E9A", // Muda a cor no desktop
                  "&:hover": {
                    backgroundColor: "#483D8B", // Cor ao passar o mouse no desktop
                  },
                },
              }}
            >
              Continuar
            </Button>
          </Link>
        )}
      </Grid>
    </div>
  );
}

export default MyPage;
