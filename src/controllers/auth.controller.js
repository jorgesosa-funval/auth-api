import { getUserByUsername } from "../models/users.model.js";
import { SECRRET_KEY } from "../config/app.config.js";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await getUserByUsername(username);
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const payload = {
            id: user.id,
        };
        const token = jwt.sign(payload, SECRRET_KEY, {
            expiresIn: "24h",
        });

        return res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


















