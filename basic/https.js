const https = require('https')
const url = 'https://api.darksky.net/forecast/2d6d10942d735841437adde9f9df433c/40,-75'
 const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk.toString()
     console.log(chunk);
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })
})
request.on('error', (error) => {
    console.log('An error', error)
})
request.end()