"use client";
import React from "react";
import { Container, Typography, Box, Divider, Link } from "@mui/material";

export default function Page() {
  return (
    <Container maxWidth="md">
      <Box>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: "#1976d2" }}
        >
          Termos de Uso
        </Typography>

        <Typography variant="body1" paragraph>
          Estes Termos de Uso regem o uso do nosso chatbot no Instagram. Ao
          utilizar nosso chatbot, você concorda com estes termos.
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Uso do Chatbot
        </Typography>

        <Box component="ul" sx={{ pl: 2 }}>
          <li>O usuário deve utilizar o chatbot apenas para fins legais.</li>
          <li>O usuário não deve enviar mensagens ofensivas ou ilegais.</li>
        </Box>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Direitos Autorais
        </Typography>
        <Typography variant="body1" paragraph>
          Todos os direitos autorais do conteúdo do chatbot são reservados.
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Limitação de Responsabilidade
        </Typography>
        <Typography variant="body1" paragraph>
          Nós não somos responsáveis por danos causados pelo uso do chatbot.
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Alterações
        </Typography>
        <Typography variant="body1" paragraph>
          Reservamos o direito de alterar estes Termos de Uso a qualquer
          momento.
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Contato
        </Typography>
        <Typography variant="body1" paragraph>
          Para questões ou solicitações, entre em contato por mensagem direta no
          e-mail para{" "}
          <Link href="mailto:seuemail@example.com">contato@magmeta.br</Link>.
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="body2" align="center" style={{ color: "#555" }}>
          Data de atualização: <strong>[30/05/2025]</strong>
        </Typography>
      </Box>
    </Container>
  );
}
