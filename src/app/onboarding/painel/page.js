"use client";
import { Button, Grid, LinearProgress } from "@mui/material";
import Step1 from "@/containers/onboarding/painel/Step1";
import Step2 from "@/containers/onboarding/painel/Step2";
import Step3 from "@/containers/onboarding/painel/Step3";
import { useState } from "react";

function MyPage() {
  const [step, setStep] = useState(1);

  return (
    <div>
      {/* Barra de progresso */}
      <LinearProgress
        variant="determinate"
        value={(100 / 3) * step}
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
      {step === 3 && <Step3 />}

      <Grid
        item
        display="flex"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        sx={{ width: "100%", mt: 2 }}
        className="grid-btn"
        fullWidth
      >
        {/* Botão "Voltar" só aparece se o step for maior que 1*/}
        {step > 1 && (
          <Button
            variant="outlined"
            fullWidth
            size="small"
            sx={{ backgroundColor: "black", color: "white" }}
            className="btn-v"
            onClick={() => setStep(step - 1)}
          >
            Voltar
          </Button>
        )}

        {/* Botão "Continuar" aparece sempre, mas com comportamento ajustado */}
        <Button
          className="btn-c"
          fullWidth
          variant="contained"
          size="small"
          sx={{ backgroundColor: "white", color: "black" }}
          onClick={() => setStep(step + 1)}
          // Se for o step 2, o botão é desativado
          disabled={step === 3}
        >
          Continuar
        </Button>
      </Grid>
    </div>
  );
}
export default MyPage;
