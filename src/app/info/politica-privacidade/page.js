import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" style={{}}>
      <Box style={{}}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: "#1976d2" }}
        >
          Política de Privacidade
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Introdução</strong>
          <br />A <strong>
            MagMeta Soluções
          </strong> {`("nosso" ou "nossa")`} se compromete a proteger sua
          privacidade. Esta Política de Privacidade explica como coletamos,
          usamos, compartilhamos e protegemos suas informações pessoais ao
          interagir com nosso chatbot no Instagram.
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Coleta de Dados
        </Typography>

        <ul>
          <li>
            <strong>Dados de perfil:</strong> nome, e-mail e foto de perfil (se
            fornecidos).
          </li>
          <li>
            <strong>Mensagens:</strong> conteúdo das mensagens enviadas ao
            chatbot.
          </li>
          <li>
            <strong>Dados de interação:</strong> data, hora e tipo de interação.
          </li>
          <li>
            <strong>Dados técnicos:</strong> endereço IP, tipo de dispositivo e
            navegador.
          </li>
        </ul>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Uso dos Dados
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>
              <strong>Atendimento ao cliente:</strong> responder às suas
              perguntas e solicitações.
            </li>
            <li>
              <strong>Melhoria do serviço:</strong> analisar interações para
              melhorar o chatbot.
            </li>
            <li>
              <strong>Comunicação:</strong> enviar informações relevantes sobre
              nossos produtos/serviços.
            </li>
          </ul>
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Compartilhamento de Dados
        </Typography>
        <Typography variant="body1" paragraph>
          Não compartilhamos seus dados com terceiros, exceto:
          <ul>
            <li>
              <strong>Serviços de análise:</strong> para melhorar o serviço.
            </li>
            <li>
              <strong>Fornecedores de serviços:</strong> para manter o
              funcionamento do chatbot.
            </li>
            <li>
              <strong>Autoridades:</strong> se exigido por lei.
            </li>
          </ul>
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Direitos do Usuário
        </Typography>
        <Typography variant="body1" paragraph>
          Você tem direito a:
          <ul>
            <li>Acessar seus dados.</li>
            <li>Corrigir dados inexatos.</li>
            <li>Excluir seus dados.</li>
            <li>Reclamar junto às autoridades competentes.</li>
          </ul>
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Segurança
        </Typography>
        <Typography variant="body1" paragraph>
          Adotamos medidas de segurança para proteger seus dados, incluindo:
          <ul>
            <li>Criptografia.</li>
            <li>Firewalls.</li>
            <li>Controles de acesso.</li>
          </ul>
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Alterações
        </Typography>
        <Typography variant="body1" paragraph>
          Reservamos o direito de alterar esta Política de Privacidade a
          qualquer momento.
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h5" gutterBottom style={{ color: "#1976d2" }}>
          Contato
        </Typography>
        <Typography variant="body1" paragraph>
          Para questões ou solicitações, entre em contato por mensagem direta no
          Instagram ou envie um e-mail para <strong>[seu e-mail]</strong>.
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="body2" align="center" style={{ color: "#555" }}>
          Data de atualização: <strong>[Data atual]</strong>
        </Typography>

        <Typography variant="body2" align="center" style={{ color: "#555" }}>
          Ao interagir com nosso chatbot, você concorda com esta Política de
          Privacidade.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
