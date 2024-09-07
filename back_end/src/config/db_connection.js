import { Sequelize } from "sequelize";

let databaseCredential;

if (process.argv[2] === "debug") {
    databaseCredential = {
        database: "postgres",
        username: "postgres",
        password: "admin",
        host: "localhost",
        port: 5432,
        schema: "public",
        dialect: "postgres",
    };
}
else {
    databaseCredential = {
        database: "postgres",
        username: "postgres.lgeoycqqfxckhtprgsax",
        password: "Pos2O4NDdreAhRgz",
        host: "aws-0-eu-central-1.pooler.supabase.com",
        port: 6543,
        schema: "public",
        dialect: "postgres",
    };
}

const connection = new Sequelize(databaseCredential);

try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error(`Error connecting to database: ${error}`);
}

export default connection;

// db password: Pos2O4NDdreAhRgz