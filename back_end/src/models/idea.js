import { DataTypes } from "sequelize";
import connection from "../config/db_connection.js";

const Idea = connection.define(
    'idea',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [0, 50],
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        timestamps: true, // generate createdAt
        updatedAt: false, // disable autogeneration of updatedAt
        freezeTableName: true, // disable the modification of tablenames
    }
);

export default Idea;