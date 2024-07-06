import connection from './db_connection.js';
import { } from '../models/model_config.js'; // senza questo import, la creazione fallisce

try {
    await connection.sync({ force: true });
    console.log('Tables created!')
} catch (error) {
    console.log(`Error: ${error}`);
}