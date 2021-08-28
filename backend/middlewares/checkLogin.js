const jwt = require('jsonwebtoken');

exports.checkLogin = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        // console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const { firstName, userId } = decoded;
        req.firstName = firstName;
        req.userId = userId;
        next();
    } catch {
        next('authentication error');
    }
};

