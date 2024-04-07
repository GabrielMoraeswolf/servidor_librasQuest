import express from "express";
import QuestController from "../controllers/questController.js";
import multer from "multer";
const routes = express.Router();
const upload = multer();
// Rota para listar todas as Quests
routes.get("/Quests", QuestController.listarQuests);

// Rota para obter uma Quest pelo ID
routes.get("/Quest/:id", QuestController.obterQuestPorId);

// Rota para adicionar uma nova Quest
routes.post("/Quest", upload.single('imagem'),QuestController.adicionarQuest);

// Rota para atualizar uma Quest pelo ID
routes.put("/Quest/:id", QuestController.atualizarQuest);

// Rota para excluir uma Quest pelo ID
routes.delete("/Quest/:id", QuestController.excluirQuest);

export default routes;