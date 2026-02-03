const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    // read token from authorization header
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user info to req.user
        req.user = decoded;

        // continue to the next middleware/route
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" })
    }
}


module.exports = auth;




