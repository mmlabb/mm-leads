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
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PopupBlog from "./PopupBlog";
import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React, { useState, useEffect, useRef } from "react";

const images = [
  {
    label: "Criativo",
    imgPath: "/img/criativo-blog.png",
    url: "https://magmeta.com.br/blog/como-automatizar-seu-agendamento",
  },
  {
    label: "Carrousel",
    imgPath: "/img/criativo-blog-2.png",

    url: "https://magmeta.com.br/blog/como-aumentar-a-fidelizacao-de-clientes",
  },
];

export default function CarouselForwardOnly() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const maxSteps = images.length;

  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (isHovered) return; // pausa enquanto hover

    timeoutRef.current = setTimeout(() => {
      setAnimating(true);

      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % maxSteps);
        setAnimating(false);
      }, 500); // duração da animação
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeStep, isHovered, maxSteps]);

  return (
    <Grid
      size={4}
      container
      direction="column"
      sx={{
        width: "492px",
        height: "100%",
        maxHeight: "94vh",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        gap: "24px",

        mt: 3,
        mb: 3,
        color: "#000000",
        borderBottomLeftRadius: "18px",
        borderTopLeftRadius: "18px",
      }}
    >
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

      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowY: "auto", // Habilita scroll vertical
          padding: "24px",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(255, 255, 255, 0.1)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(98, 33, 162, 1)",
            borderRadius: "3px",
          },
        }}
      >
        <Grid
          className="carrousel"
          container
          direction="column"
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: 240,
              overflow: "hidden",
              borderRadius: 3,
              position: "relative",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Box
              sx={{
                display: "flex",
                width: `${maxSteps * 100}%`,
                transform: animating
                  ? `translateX(-${(activeStep + 1) * (100 / maxSteps)}%)`
                  : `translateX(-${activeStep * (100 / maxSteps)}%)`,
                transition: animating ? "transform 0.5s ease-in-out" : "none",
                cursor: dragging ? "grabbing" : "grab",
              }}
              onMouseDown={(e) => {
                setDragStartX(e.clientX);
                setDragging(true);
              }}
              onMouseMove={(e) => {
                if (!dragging) return;
                const diff = e.clientX - dragStartX;
                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
                  } else {
                    setActiveStep((prev) => (prev + 1) % maxSteps);
                  }
                  setDragging(false);
                }
              }}
              onMouseUp={() => {
                setDragging(false);
              }}
              onTouchStart={(e) => {
                setDragStartX(e.touches[0].clientX);
                setDragging(true);
              }}
              onTouchMove={(e) => {
                if (!dragging) return;
                const diff = e.touches[0].clientX - dragStartX;
                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
                  } else {
                    setActiveStep((prev) => (prev + 1) % maxSteps);
                  }
                  setDragging(false);
                }
              }}
              onTouchEnd={() => {
                setDragging(false);
              }}
            >
              {images.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: `${100 / maxSteps}%`,
                    height: "100%",
                    flexShrink: 0,
                  }}
                  onClick={(e) => {
                    if (dragging) {
                      e.preventDefault(); // cancela o clique se estiver arrastando
                    } else {
                      window.open(item.url, "_blank");
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={item.imgPath}
                    alt={item.label}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid
          container
          justifyContent="center"
          sx={{
            position: "relative",
            zIndex: 3,
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
                backgroundColor:
                  index === activeStep ? "#fff" : "rgba(93, 46, 154, 0.3)",
                transition: "background-color 0.3s",
                cursor: "pointer",
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
              <RocketLaunchIcon
                sx={{
                  margin: "auto",
                  fontSize: "1.5rem",
                  color: "#fff",
                }}
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
              p: "20px",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "18px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(147.9px)",
              boxShadow: "0px 19px 30px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Grid container sx={{ width: "100%", justifyContent: "center" }}>
              {[
                {
                  icon: <FacebookOutlinedIcon sx={{ fontSize: 42 }} />,
                  url: "https://www.facebook.com/profile.php?id=61560382723312",
                },
                {
                  icon: <LinkedInIcon sx={{ fontSize: 42 }} />,
                  url: "https://linkedin.com",
                },
                {
                  icon: <InstagramIcon sx={{ fontSize: 42 }} />,
                  url: "https://www.instagram.com/magmetasolucoes/",
                },
                {
                  icon: <WhatsAppIcon sx={{ fontSize: 42 }} />,
                  url: "https://api.whatsapp.com/send/?phone=5561981689203&text=Ol%C3%A1%2C%20equipe%20Magmeta%21%20%20Quero%20automatizar%20meu%20atendimento.",
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
                    sx={{ p: 1 }}
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
            width: "100%",
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
            Seu Chat 100% automatizado!
          </Typography>

          <Typography sx={{ maxWidth: "80%" }} variant="body1">
            Você gostaria de ter em sua empresa um chat como este? que
            automatiza seu atendimento e trás muito mais facilidade para o
            fechamento da sua venda?
          </Typography>

          <Button
            component="a"
            href="https://api.whatsapp.com/send/?phone=5561981689203&text=Ol%C3%A1%2C%20equipe%20Magmeta%21%20%20Quero%20automatizar%20meu%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, #db00ff, #6221a2) !important",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              mt: 2,
            }}
          >
            Agendar Reunião
          </Button>
        </Grid>
        <PopupBlog />
      </Box>
    </Grid>
  );
}
