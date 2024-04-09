const express = require('express');
const locationController = require("../controllers/location.controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get('/', (req, res) => {
    res.render('location');
});
router.get('/:key/ping/:device_id', authenticate, locationController.getLocationsByDevice);
router.post('/:key/ping', authenticate, locationController.postLocation);

module.exports = router;