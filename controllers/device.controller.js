const deviceModel = require("../models/device.model");
const handleError = require("../utils/handle_error");
const { validatePost, validateDelete, validateGet } = require("../validators/device.validator");

const dataNeeded = ["name", "type", "mac"];

class DeviceController {
    async getDeviceByMac(req, res) {
        handleError(async () => {
            const mac = req.params.mac;

            // validate
            await validateGet(mac);

            const data = await deviceModel.get(mac);

            res.status(200).send(data);
        }, res);
    }

    async postDevice(req, res) {
        handleError(async () => {
            const deviceData = req.body;

            // validate
            await validatePost(deviceData);

            await deviceModel.insert(deviceData, dataNeeded);

            res.sendStatus(200);
        }, res);
    }

    async deleteDevice(req, res) {
        handleError(async () => {
            // validate
            await validateDelete(req.params.device_id);

            await deviceModel.delete(req.body);

            res.sendStatus(200);
        }, res);
    }
}

module.exports = new DeviceController();