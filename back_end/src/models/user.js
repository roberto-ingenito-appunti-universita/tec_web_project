import { DataTypes } from "sequelize";
import connection from "../config/db_connection.js";
import bcrypt from "bcrypt"

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
        hooks: {
            async beforeCreate(user) { await hashUserPassword(user); },
            async beforeUpdate(user) { await hashUserPassword(user); },
            async beforeBulkCreate(users) { await Promise.all(users.map(async (user) => { await hashUserPassword(user); })) },
            async beforeBulkUpdate(users) { await Promise.all(users.map(async (user) => { await hashUserPassword(user); })) },
        }
    }
);

async function hashUserPassword(user) {
    if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
    }
}

export default User;