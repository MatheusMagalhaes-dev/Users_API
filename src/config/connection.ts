//importar o mongoose para usarmos
import mongoose from 'mongoose';
//importar o environment pois aqui mostraremos os erros caso nao achado
import { environment } from './environment';
/*Aqui estamos falando para o sistema
se o banco de dados com a url q passamos nao for achado
diga: database nao encontrado.
mas se o mongoose conseguir achar o database, entao diga: Database
connected */
export const connect = async () => {
    try {
        if(!environment.DATABASE_URL) throw new Error('DATABASE_URL not found');
    
        await mongoose.connect(environment.DATABASE_URL);
        console.log('Database connected')
    } catch (error) {
        console.error(error);
        
    }
};