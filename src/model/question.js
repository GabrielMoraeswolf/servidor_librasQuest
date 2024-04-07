import mongoose from "mongoose";

const questSchema = new mongoose.Schema({
  nivel: {
    type: Number,
    required: true,
  },
  imagem: {
    type: Buffer, 
    //required: true,
  },
  pergunta: {
    type: String,
    required: true,
  },
  opcoesResposta: {
    type: [String], // Array de opções de resposta
    required: true,
  },
  respostaCorreta: {
    type: String,
    required: true,
  },
});

const Quest = mongoose.model('Quest', questSchema);

export default Quest;