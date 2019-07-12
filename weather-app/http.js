const request = require('request');
const url = "https://api.darksky.net/forecast/2d6d10942d735841437adde9f9df433c/37.8267,-122.4233";
const location = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hhZGFiMjYiLCJhIjoiY2p4encyMTVnMDZ4MzNocGt6aHA0cno4aSJ9.DwCYYdSS_1Mgk3ZuEEPrEg";

request({url: url, json: true}, (error, response) => {
   // const data = JSON.parse(response.body)
    const data = response.body.currently
    
    //console.log(response.body.currently);
    console.log("teampture is " + +data.temperature+" " +"there is only "+" " +data.precipProbability+ " Chance For Rain");
})
request({url: location, json: true},(error, response) => {
    const locationData = response.body.features[0];
     const lalitude = locationData.center[0];
    const longitude = response.body.features[0].center[1]
    console.log(lalitude);
    console.log(longitude);
})