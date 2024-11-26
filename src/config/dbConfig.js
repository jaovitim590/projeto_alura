import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(STRING_CONEXAO) {
  let mongoClient;

  try {
    console.log('Conectando ao cluster do banco de dados...');
    
    // Atualizado: Removendo opções descontinuadas
    mongoClient = new MongoClient(STRING_CONEXAO, {
      tls: true,  // Garantir uso de TLS
    });

    await mongoClient.connect();  // Conectar ao banco de dados

    console.log('Conectado ao MongoDB Atlas com sucesso!');
    return mongoClient;
  } catch (erro) {
    console.error('Falha na conexão com o banco!', erro);
    process.exit(1);  // Forçar a saída do processo em caso de erro
  }
}