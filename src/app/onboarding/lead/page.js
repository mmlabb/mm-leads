"use client";
import { Button, Grid, LinearProgress } from "@mui/material";
import Step1 from "@/containers/onboarding/lead/Step1";
import Step2 from "@/containers/onboarding/lead/Step2";
import Step3 from "@/containers/onboarding/lead/Step3";
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
        sx={{
          width: "100%",
          mt: 2,
          "@media (min-width: 768px)": {
            backgroundColor: "#5D2E9A", // Fundo roxo em desktop
            pb: 5,
          },
        }}
        className="grid-btn"
      >
        {/* O botão Voltar só aparece se o passo for maior que 0 */}
        {step > 1 && (
          <Button
            variant="outlined"
            fullWidth
            size="small"
            sx={{ backgroundColor: "black", color: "white", mr: 1 }}
            className="btn-v"
            onClick={() => setStep(step - 1)}
          >
            Voltar
          </Button>
        )}

        {/* O botão Continuar sempre aparece, mas com comportamento ajustado */}
        <Button
          className="btn-c"
          fullWidth
          variant="contained"
          size="small"
          sx={{ backgroundColor: "white", color: "black", mr: 1 }}
          onClick={() => setStep(step + 1)}
          // If it's step 2, the button is disabled
          disabled={step === 3}
        >
          Continuar
        </Button>
      </Grid>
    </div>
  );
}

export default MyPage;
