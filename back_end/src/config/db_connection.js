import { Sequelize } from "sequelize";

const connection = new Sequelize({
    database: "postgres",
    username: "postgres",
    password: "admin",
    host: "localhost",
    port: 5432,
    schema: "public",
    dialect: "postgres",
});

async function connect() {
    try {
        await connection.authenticate();
    } catch (error) {
        console.error(`error connecting to database: ${error}`);
    }
}
connect();



export default connection;