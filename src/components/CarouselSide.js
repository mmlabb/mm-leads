"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";

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

export default function CarouselSideSwiper() {
  const swiper_ref = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      if (swiper_ref.current?.swiper) {
        const swiper = swiper_ref.current.swiper;
        if (swiper.touchEventsData?.isTouched) {
          swiper.touchEventsData.isTouched = false;
          swiper.slideToClosest();
        }
      }
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <Box
      sx={{
        width: "434px",
        borderRadius: 3,
        overflow: "visible", // necessário para mostrar as balls
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "240px",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Swiper
          ref={swiper_ref}
          modules={[Autoplay, Mousewheel, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          grabCursor={true}
          slidesPerView={1}
          speed={500}
          resistance={true}
          resistanceRatio={0}
          threshold={5}
          touchReleaseOnEdges={true}
          followFinger={true}
          allowTouchMove={true}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                onClick={() => window.open(item.url, "_blank")}
                sx={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  borderRadius: 3,
                }}
              >
                <Box
                  component="img"
                  src={item.imgPath}
                  alt={item.label}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 3,
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Bolinhas (pagination) fora do swiper */}
      <Box
        className="swiper-pagination"
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "center",
          gap: 1,
          ".swiper-pagination-bullet": {
            width: 10,
            height: 10,
            backgroundColor: "#fff",
            opacity: 0.6,
            borderRadius: "50%",
            transition: "all 0.3s",
          },
          ".swiper-pagination-bullet-active": {
            backgroundColor: "#000",
            opacity: 1,
          },
        }}
      />
    </Box>
  );
}
