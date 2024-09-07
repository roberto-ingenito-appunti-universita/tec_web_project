import { Sequelize } from "sequelize";

const connection = new Sequelize({
    database: "postgres",
    username: "postgres.lgeoycqqfxckhtprgsax",
    password: "Pos2O4NDdreAhRgz",
    host: "aws-0-eu-central-1.pooler.supabase.com",
    port: 6543,
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

// db password: Pos2O4NDdreAhRgz