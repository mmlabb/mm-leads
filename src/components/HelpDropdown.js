"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function HelpDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (path) => {
    handleClose();
    router.push(path);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="help"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <HelpIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: {
            backgroundColor: "#5E2CA5", // fundo roxo
            color: "#ffffff",
            borderRadius: 2,
            boxShadow: 3,
          },
        }}
      >
        <MenuItem
          onClick={() => handleRedirect("/info/termos-de-uso")}
          sx={{ "&:hover": { backgroundColor: "#4B1F8A" } }}
        >
          Termos de Uso
        </MenuItem>
        <MenuItem
          onClick={() => handleRedirect("/info/politica-privacidade")}
          sx={{ "&:hover": { backgroundColor: "#4B1F8A" } }}
        >
          Política de Privacidade
        </MenuItem>
      </Menu>
    </>
  );
}
