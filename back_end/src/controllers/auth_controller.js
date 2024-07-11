import jwt from 'jsonwebtoken'
import { User } from '../models/model_config.js'
import bcrypt from 'bcrypt'

export default class AuthController {

    async signup({ username, password, firstName, lastName }) {
        return await User.create({
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        });
    }

    async signin({ username, password }) {
        const user = await User.findByPk(username);

        if (!user) return null;

        // match password inserita, con la password criptata sul database  
        const passwordMatch = await bcrypt.compare(password, user.password)
        return passwordMatch ? user : null;
    }

    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];

        if (token == null) return res.sendStatus(401); // Unauthorized

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) return res.status(403).json({ message: "TokenExpired" }); // token forbidden
            next();
        });
    }
}