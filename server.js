import express from "express";
import cors from "cors";            // importa o CORS
import routes from "./src/routes/postsRoutes.js";

const app = express();

// habilita CORS globalmente
app.use(cors({
  origin: ["http://localhost:3000", "https://SEU-USUARIO.github.io"], // adicione seu GitHub Pages
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type"]
}));

// para servir arquivos estáticos (ex.: imagens salvas em uploads)
app.use(express.static("uploads"));

// registra as rotas
routes(app);

// porta dinâmica (para Render) ou 3000 local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}...`);
});
