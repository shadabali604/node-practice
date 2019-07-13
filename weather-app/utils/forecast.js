const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2d6d10942d735841437adde9f9df433c/' + latitude + ',' + longitude

    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('unable to connect to location', undefined)
        } else if (response.body.error) {
            callback('unable to find location, try anther search', undefined)
        } else {
            const data = response.body.currently
            callback(undefined, response.body.daily.data[0].summary + "teampture is " + +data.temperature + " " + " there is only " + " " + data.precipProbability + " Chance For Rain")
        }
    })
}


module.exports = forecast;