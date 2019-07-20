setTimeout(() => {
    console.log("Two Second are up")
}, 2000);
const names = ['shadab','jen, jees']
const shortNames = names.filter((name) => {
    return name.length <= 4;
});

const geocode = (address, calback) => {
    setTimeout(() => {
        const data = {
            latititude:0,
            longitude:0
        }
        
    },2000)

 }
 const data = geocode('ghaziabad')
console.log(data);
 const sum = (a, b, callback) => {
setTimeout(() => {
        callback(a + b)

}, 2000)
 }
 sum(5,4, (add) => {
     console.log(add);
 });

 
 
 
 
 const doWrokCallback = () => {

 }
 doWrokCallback((error, result)  => {
      c
 })