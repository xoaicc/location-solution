const database = require("../configs/database");
const formatData = require("../utils/format_data");

class DeviceModel {
    async get(mac) {
        const query = `SELECT * FROM Device WHERE mac = '${mac}' LIMIT 1;`;
        const [result] = await database.execute(query);

        return result[0];
    }

    async insert(deviceData, dataNeeded) {
        const { queryDataKey, queryDataValue } = formatData(deviceData, dataNeeded);

        const query = `INSERT INTO Device (${queryDataKey}) VALUES (${queryDataValue});`;
        const [result] = await database.execute(query);

        return result.affectedRows > 0;
    }

    async delete(device_id) {
        const query = `DELETE FROM Device WHERE device_id = '${device_id}';`;
        const [result] = await database.execute(query);

        return result.affectedRows > 0;
    }
}

module.exports = new DeviceModel();