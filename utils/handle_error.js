async function handleError(func, res) {
    try {
        await func();
    } catch (err) {
        res.status(500).send(err.message ? err.message : err);
    }
}

module.exports = handleError;