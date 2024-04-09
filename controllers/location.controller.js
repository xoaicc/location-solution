const locationModel = require("../models/location.model");
const handleError = require("../utils/handle_error");
const { validatePost, validateDelete } = require("../validators/location.validator");

const dataNeeded = ["device_id", "ipv4", "latitude", "longitude"];

class LocationController {
    async getLocationsByDevice(req, res) {
        const device_id = req.params.device_id;

        handleError(async () => {
            const data = await locationModel.getMany(device_id);

            res.status(200).send(data);
        }, res);
    }

    async postLocation(req, res) {
        handleError(async () => {
            const locationData = req.body;

            // validate
            await validatePost(locationData);

            await locationModel.insert(locationData, dataNeeded);

            res.sendStatus(200);
        }, res);
    }

    async deleteLocationsByDevice(req, res) {
        handleError(async () => {
            const device_id = req.params.device_id;

            // validate
            await validateDelete(device_id);

            await locationModel.deleteMany(device_id);

            res.sendStatus(200);
        }, res);
    }
}

module.exports = new LocationController();