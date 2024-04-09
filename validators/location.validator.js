class LocationValidator {
    async validatePost(locationData) {
        if (!locationData.device_id && !locationData.latitude && !locationData.longitude) {
            throw new Error('Missing device_id, latitude, longitude!');
        }
    }

    async validateDelete(device_id) {
        if (!device_id) {
            throw new Error('Missing device_id!');
        }
    }
}

module.exports = new LocationValidator();