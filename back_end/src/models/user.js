import { DataTypes } from "sequelize";
import connection from "../config/db_connection.js";

const User = connection.define(
    'user',
    {
        username: {
            type: DataTypes.TEXT,
            primaryKey: true,
            allowNull: false,
            validate: {
                // La stringa non può contenere spazi o caratteri speciali.
                // Può contenere il trattino basso _, ma non può terminare con un trattino basso.
                is: '^[a-zA-Z0-9_]+(?<!_)$'
            },
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
        freezeTableName: true, // disable the modification of tablenames
    }
);

export default User;