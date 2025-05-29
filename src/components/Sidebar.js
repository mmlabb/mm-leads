"use client";
import {
  Grid,
  Typography,
  Box,
  MobileStepper,
  useTheme,
  IconButton,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PopupBlog from "./PopupBlog";
import { Button } from "@mui/material";

const images = [
  {
    label: "Criativo",
    imgPath: "/img/criativo-blog.png",
  },
  {
    label: "Carrousel",
    imgPath: "/img/criativo-blog-2.png",
  },
];

export default function Sidebar() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxSteps]);

  return (
    <Grid
      size={4}
      container
      direction="column"
      sx={{
        width: "492px",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
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
      {/* Overlay de fundo com opacidade */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/img/GradientBoot2(1).png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.24,
          zIndex: 0,
        }}
      />

      <Grid
        container
        direction="column"
        sx={{
          p: "24px",
          position: "relative",
          zIndex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[activeStep].imgPath}
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "18px",
            }}
          />
        </AnimatePresence>
      </Grid>

      {/* Bolinhas clicáveis */}
      <Grid
        container
        justifyContent="center"
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveStep(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              mx: 0.5,
              cursor: "pointer",
              backgroundColor:
                index === activeStep ? "#fff" : "rgba(93, 46, 154, 0.3)",
              transition: "background-color 0.3s",
            }}
          />
        ))}
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
          xs={7}
          sx={{
            display: { xs: "none", md: "flex" },
            width: "210px",
            p: "24px",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "18px",
            color: "#fff",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
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
            variant="h5"
          >
            Soluções
            <Box
              component="img"
              src="/img/icon-rocket.png"
              alt="Ícone de foguete"
              sx={{ marginLeft: "auto" }}
            />
          </Typography>
          <Typography>
            Quer uma solução pronta para implementar na sua Empresa? Ela está
            aqui!
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: { xs: "none", md: "flex" },

            p: "24px",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "18px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(147.9px)",
            boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{ width: "100%", justifyContent: "center" }}
          >
            {[
              {
                icon: <FacebookOutlinedIcon sx={{ fontSize: 42 }} />,
                url: "https://facebook.com",
              },
              {
                icon: <LinkedInIcon sx={{ fontSize: 42 }} />,
                url: "https://linkedin.com",
              },
              {
                icon: <InstagramIcon sx={{ fontSize: 42 }} />,
                url: "https://instagram.com",
              },
              {
                icon: <WhatsAppIcon sx={{ fontSize: 42 }} />,
                url: "https://wa.me/",
              },
            ].map((item, idx) => (
              <Grid
                key={idx}
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <IconButton
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ p: 0 }}
                >
                  {item.icon}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
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
          variant="h5"
          component="h5"
        >
          Seu 100% Chat automatizado!
        </Typography>

        <Typography sx={{ maxWidth: "80%" }} variant="body1">
          Você gostaria de ter em sua empresa um chat como este? que automatiza
          seu atendimento e trás muito mais facilidade para o fechamento da sua
          venda?
        </Typography>

        <Button
          fullWidth
          sx={{
            borderRadius: "24px",
            background: "linear-gradient(135deg, #db00ff, #6221a2) !important",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            mt: 2,
          }}
        >
          Criar meu Chat
        </Button>
      </Grid>
      <PopupBlog />
    </Grid>
  );
}
