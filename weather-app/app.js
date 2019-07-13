
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

////


////request({url: location, json: true},(error, response) => {
//// if (error){
//// console.log("not able to connect weather service")
//// }
//// else if(response.body.error){
//// console.log("unable to find location")
//// }
// else{
////  const locationData = response.body.features[0];
//// const lalitude = locationData.center[0];
////const longitude = response.body.features[0].center[1]
////console.log(lalitude);
////console.log(longitude);
//// }

//})
////request({url: url, json: true}, (error, response) => {

//if(error){
//  console.log("not able to connect weather service")
//}
//else if(response.body.error){
// console.log("unable to Find Location")
//}
// else{`
// const data = JSON.parse(response.body)
//const data = response.body.currently
//console.log(response.body.currently);
//console.log("teampture is " + +data.temperature+" " +"there is only "+" " +data.precipProbability+ " Chance For Rain");
//}
const address = process.argv[2];
console.log(process.argv);
if(!address){
  console.log("plz Enter a address");
}
else{
  geocode(address, (error, data) => {
    if(error){
      return console.log(error)
    }
      forecast(data.latitude, data.longitude, (error,forecastData) => {
        if(error){
          return console.log(error)
        }
     console.log(data.location);
     console.log(forecastData);
      })
    })

}
//// })



