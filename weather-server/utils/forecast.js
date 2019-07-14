const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2d6d10942d735841437adde9f9df433c/' + latitude + ',' + longitude

    request({
        url,
        json: true
}, (error, {body}) => {
        if (error) {
            callback('unable to connect to location', undefined)
        } else if (body.error) {
            callback('unable to find location, try anther search', undefined)
        } else {
            const data = body.currently
            callback(undefined, body.daily.data[0].summary + "teampture is " + +data.temperature + " " + " there is only " + " " + data.precipProbability + " Chance For Rain")
        }
    })
}


module.exports = forecast;