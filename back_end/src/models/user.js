import { DataTypes } from "sequelize";
import connection from "../config/db_connection.js";

const User = connection.define(
    'user',
    {
        username: {
            type: DataTypes.TEXT,
            primaryKey: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        timestamps: true, // generate createdAt
        updatedAt: false, // disable autogeneration of updatedAt
    }
);

export default User;