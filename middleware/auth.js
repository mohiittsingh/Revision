import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Token missing"
            });
        }

        const token = authHeader.startsWith("Bearer ")
            ? authHeader.slice(7)
            : authHeader;

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_USER_SECRET);
        } catch (userErr) {
            decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
        }

        req.user = decoded;

        next();

    } catch (err) {

        return res.status(401).json({
            message: "Invalid Token"
        });

    }
};
