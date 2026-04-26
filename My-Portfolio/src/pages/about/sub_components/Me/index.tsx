import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Me() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "background.default",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card
          sx={{
            maxWidth: 600,
            width: "100%",
            textAlign: "center",
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <CardContent sx={{ padding: 4 }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                margin: "0 auto 24px",
                backgroundColor: "primary.main",
                fontSize: "3rem",
              }}
            >
              A
            </Avatar>

            <Typography variant="h3" gutterBottom fontWeight="bold">
              Assan Mbete
            </Typography>

            <Typography variant="h6" color="text.secondary" gutterBottom>
              Développeur Full Stack
            </Typography>

            <Typography
              variant="body1"
              sx={{ marginBottom: 3, lineHeight: 1.6 }}
            >
              Passionné par le développement web moderne, je crée des
              applications performantes avec React, TypeScript et Node.js. Mon
              objectif est de construire des solutions qui font la différence.
            </Typography>

            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
            >
              <Button
                variant="contained"
                onClick={() => handleNavigate("/")}
                sx={{ minWidth: 140 }}
              >
                🏠 Accueil
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleNavigate("/about")}
                sx={{ minWidth: 140 }}
              >
                📖 À propos
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleNavigate("/projects")}
                sx={{ minWidth: 140 }}
              >
                💼 Projets
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleNavigate("/contact")}
                sx={{ minWidth: 140 }}
              >
                📧 Contact
              </Button>
            </Stack>

          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
