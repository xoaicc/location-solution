function formatData(data, dataNeeded) {
    let queryDataKey = '';
    let queryDataValue = '';

    const dataArray = Object.entries(data);
    const lastKey = dataNeeded[dataNeeded.length - 1];

    dataNeeded.forEach((keyNeeded) => {
        if (dataArray.find(([key]) => key == keyNeeded)) {
            queryDataKey += keyNeeded + (keyNeeded == lastKey ? '' : ', ');
            queryDataValue += `'${data[keyNeeded]}'` + (keyNeeded == lastKey ? '' : ', ');
        }
    });

    return { queryDataKey, queryDataValue };
}

module.exports = formatData;