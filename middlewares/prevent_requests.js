const { rateLimit } = require('express-rate-limit');

function preventRequests(req, res, next) {
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        limit: 2, // Limit each IP to 2 requests per `window` (here, per 15 minutes).
        standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
        // store: ... , // Redis, Memcached, etc. See below.
    });

    limiter(req, res, next);
}


module.exports = preventRequests;