import { Sequelize } from "sequelize";

const connection = new Sequelize({
    database: "postgres",
    username: "postgres.ijlttpzikglpuvnfqzcn",
    password: "NqcKX2K2OjDpNGtl",
    host: "aws-0-eu-central-1.pooler.supabase.com",
    port: 5432,
    schema: "public",
    dialect: "postgres",
});

try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error(`Error connecting to database: ${error}`);
}

export default connection;