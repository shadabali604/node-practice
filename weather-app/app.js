const request = require('request');
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
  //// })
  geocode('india', (error, data) => {
    console.log('Error', error)
    console.log('Data', data);

})
forecast(-75.7088, 44.1545, (error, data) =>{
  console.log('Error',error)
  console.log('Data', data)
})

