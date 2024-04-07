import QuestModel from "../model/question.js";

class QuestController {
  // Lista todas as Quests
  static async listarQuests (req, res) {
    try {
      const quests = await QuestModel.find();
      res.json(quests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };
  
  // Obtém uma Quest pelo ID
  static async obterQuestPorId (req, res)  {
    try {
      const quest = await QuestModel.findById(req.params.id);
      if (!quest) {
        return res.status(404).json({ message: 'Quest não encontrada' });
      }
      res.json(quest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };
  
  // Adiciona uma nova Quest
  static async adicionarQuest (req, res) {
    try {
      const { nivel, pergunta, opcoesResposta, respostaCorreta } = req.body;
      const imagem = req.file.buffer;

      const novaQuest = new QuestModel({
        nivel,
        imagem,
        pergunta,
        opcoesResposta,
        respostaCorreta,
      });

      await novaQuest.save();
      res.json(novaQuest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };
  
  // Atualiza uma Quest pelo ID
  static async atualizarQuest (req, res) {
    try {
      const { nivel, pergunta, opcoesResposta, respostaCorreta } = req.body;
      const imagem = req.file.buffer;

      const questAtualizada = {
        nivel,
        imagem,
        pergunta,
        opcoesResposta,
        respostaCorreta,
      };

      const quest = await QuestModel.findByIdAndUpdate(req.params.id, questAtualizada, { new: true });
      if (!quest) {
        return res.status(404).json({ message: 'Quest não encontrada' });
      }
      res.json(quest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };
  
  // Exclui uma Quest pelo ID
  static async excluirQuest (req, res) {
    try {
      const quest = await QuestModel.findByIdAndDelete(req.params.id);
      if (!quest) {
        return res.status(404).json({ message: 'Quest não encontrada' });
      }
      res.json({ message: 'Quest excluída com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };
  
};

export default QuestController;