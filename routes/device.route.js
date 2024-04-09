const express = require('express');
const deviceController = require("../controllers/device.controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get('/', (req, res) => {
    res.render('device');
});
router.get('/:key/ping/:mac', authenticate, deviceController.getDeviceByMac);
router.post('/:key/ping', authenticate, deviceController.postDevice);

module.exports = router;