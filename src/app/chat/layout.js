"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Sidebar from "@/components/Sidebar"; // Importa o novo componente Sidebar

export default function LayoutChat({ children }) {
  const theme = useTheme();

  return (
    <Container maxWidth="xxl" sx={{ p: 0, m: 0 }}>
      <Grid
        container
        spacing={1}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        <Grid
          size={8}
          className="box-chat"
          sx={{
            flexGrow: 1,
            height: "100%",
            [theme.breakpoints.up("md")]: {
              margin: 0,
              borderRadius: 4,
              bgcolor: "#000000",
              mx: "auto",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
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
        <Sidebar />
      </Grid>
    </Container>
  );
}
