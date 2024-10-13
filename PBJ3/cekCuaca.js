const request = require('postman-request')
const urlCuaca ='http://api.weatherstack.com/current?access_key=5be395384a24e966d37ca9694628a3f5&query=-0.8971201511098388,100.35073944382954'
request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location!');
    } else {
        const temperature = response.body.current.temperature;
        const precip = response.body.current.precip;
        const weatherDescription = response.body.current.weather_descriptions[0];  // Akses elemen pertama dari array
        console.log(`Saat ini suhu diluar mencapai ${temperature} derajat celcius. Kemungkinan terjadinya hujan adalah ${precip}%. Cuaca saat ini: ${weatherDescription}.`);
    }
});