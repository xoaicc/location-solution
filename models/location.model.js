const database = require("../configs/database");
const formatData = require("../utils/format_data");

class LocationModel {
    async getMany(device_id) {
        const query = `SELECT * FROM Location WHERE device_id = '${device_id}' LIMIT 10;`;
        const [result] = await database.execute(query);

        return result;
    }

    async insert(locationData, dataNeeded) {
        const { queryDataKey, queryDataValue } = formatData(locationData, dataNeeded);

        const query = `INSERT INTO Location (${queryDataKey}) VALUES (${queryDataValue});`;
        const [result] = await database.execute(query);

        return result.affectedRows > 0;
    }

    async deleteMany(device_id) {
        const query = `DELETE FROM Location WHERE device_id = '${device_id}';`;
        const [result] = await database.execute(query);

        return result.affectedRows > 0;
    }
}

module.exports = new LocationModel();