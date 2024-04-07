import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Conexao com o banco feita com sucesso");
    return mongoose.connection;
} catch (error) {
    console.error("Erro de conexão", error);
    throw error;
}
}

export default conectaNaDatabase;