import jwt from 'jsonwebtoken';
import { TOKEN_SECRET_KEY } from '../config.js';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return res.status(401).json({ message: 'No token, Unauthorized' })
    }
    jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token, Unauthorized' })
        }
        req.user = user
        next()
    })

}