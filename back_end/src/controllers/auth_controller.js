import jwt from 'jsonwebtoken'

export default class AuthController {

    /*
    app.post('/login', (req, res) => {
        const { username, password } = req.body;
    
        if (username === 'user' && password === 'password') {
            // Genera il token JWT
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Credenziali non valide' });
        }
    }); */

    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];

        if (token == null) return res.sendStatus(401); // Unauthorized

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) return res.sendStatus(403); // token forbidden
            req.user = user;
            next();
        });
    }
}