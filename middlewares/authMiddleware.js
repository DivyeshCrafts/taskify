const jwt = require('jsonwebtoken')
const secratekey = "divyesh007"

const authenticate = (req, res, next) => {

    try {
        const token = req.headers.authorization; 

        if (!token) {
            return res.send({ status: false, message: "token not found"});
        }

        const secretKey = process.env.JWT_SECRET || "your_secret_key"; // Use environment variable or fallback
        const decoded = jwt.verify(token, secratekey);

        req.user = decoded;

        next();

    } catch (error) {
        console.log("error", error)
        return res.send({ status: false, message: "Invalid token."});
    }
};

module.exports = { authenticate };
