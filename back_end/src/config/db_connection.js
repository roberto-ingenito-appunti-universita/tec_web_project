import { Sequelize } from "sequelize";

const connection = new Sequelize({
    database: "postgres_mq4d",
    username: "postgres_mq4d_user",
    password: "Bz2QCoPBRMth6UPwZjFs2AbWXDpBNDny",
    host: "dpg-crdk1h08fa8c738d1n2g-a",
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