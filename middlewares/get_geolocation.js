// const { Client } = require("@googlemaps/google-maps-services-js");
// require('dotenv').config();

// function getGeolocation(req, res, next) {
//     const { latitude, longitude } = req.body;
//     const apiKey = process.env.GG_MAPS;
//     const client = new Client({});

//     client.reverseGeocode({
//         params: {
//             latlng: `${latitude},${longitude}`,
//             key: apiKey,
//             language: 'vi',
//             result_type: 'street_address',
//             location_type: 'ROOFTOP'
//         },
//         timeout: 1000
//     }).then(result => {
//         if (result.data.status === 'OK') {
//             req.body.address = result.data.results[0].formatted_address;
//             console.log(req.body.address);
//             // next();
//         } else {
//             console.log(result.data.status);
//         }
//     }).catch(error => {
//         console.log(error);
//     });
// }

// module.exports = getGeolocation;