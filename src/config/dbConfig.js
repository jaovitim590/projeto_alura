import { MongoClient } from 'mongodb';

export default async function conectarAoBanco() {
  let mongoClient;

  try {
    console.log('Conectando ao cluster do banco de dados...');

    const STRING_CONEXAO = process.env.STRING_CONEXAO; // pega a variável do Railway

    mongoClient = new MongoClient(STRING_CONEXAO, {
      tls: true,
    });

    await mongoClient.connect();

    console.log('Conectado ao MongoDB Atlas com sucesso!');
    return mongoClient;
  } catch (erro) {
    console.error('Falha na conexão com o banco!', erro);
    process.exit(1);
  }
}
