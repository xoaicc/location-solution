const bcrypt = require('bcrypt');
const password = "erios";

async function authenticate(req, res, next) {
    const hashPassword = await bcrypt.hash(password, 10);

    const match = await bcrypt.compare(req.params.key, hashPassword);

    if (match) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = authenticate;