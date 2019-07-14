console.log("shadb ali")
const url = 'http://puzzle.mead.io/puzzle';
const UserData = fetch(url).then((response) => {
    response.json().then((data) => {
        console.log(data);
    
    })
})
fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }
        console.log(data)
        console.log(data.address)
        console.log(data.forecast)
    })
})
