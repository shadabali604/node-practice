var WeatherForm = document.querySelector('form');
var search = document.querySelector('input');
var message = document.querySelector('.message-1');
var messageTwo = document.querySelector('.message-2');
WeatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
     const location = search.value
     fetch('/weather?address='+location+'').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }
        message.innerHTML = data.address;
        messageTwo.innerHTML = data.forecast;
        console.log(data)
        console.log(data.address)
        console.log(data.forecast)
    })
})
})
