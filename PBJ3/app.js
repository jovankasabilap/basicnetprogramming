const request = require('postman-request')
const url ='http://api.weatherstack.com/current?access_key=5be395384a24e966d37ca9694628a3f5&query=-0.8971201511098388,100.35073944382954'
request({ url: url }, (error, response) => {
// console.log(response)
// const data = JSON.parse(response.body)
// console.log(data)
// console.log(data.current)
console.log(data.current.temperature)
})
