//Vamos importar o dotenv
import dotenv from 'dotenv';

//vamos configurar o dotenv para nos passar os parametros
//do banco de dados
dotenv.config();
//passando os parametros para ser associado onde esportaremos
export const environment = {
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL,
};