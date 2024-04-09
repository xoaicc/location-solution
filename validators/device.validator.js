class DeviceValidator {
    async validateGet(mac) {
        if (!mac) {
            throw new Error('Missing mac address!');
        }
    }

    async validatePost(deviceData) {
        if (!deviceData.name && !deviceData.mac) {
            throw new Error('Missing device name, mac address!');
        }
    }

    async validateDelete(device_id) {
        if (!device_id) {
            throw new Error('Missing device_id!');
        }
    }
}

module.exports = new DeviceValidator();