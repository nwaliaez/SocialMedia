import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const auth = (req, res, next) => {
    try {
        const { ezToken } = req.cookies;
        if (!ezToken?.token) {
            res.status(401).json({ error: 'User not authorised' });
            return;
        }
        const userData = jwt.verify(ezToken.token, process.env.JWT_SECRET);
        req.user = userData;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'User not authorised' });
    }
};
