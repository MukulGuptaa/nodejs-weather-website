const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0cd44b08b48125dbc3b1c97883d93a14&query=' + latitude + ','+ longitude + '&units=f'

    request({url, json: true} , (error, {body} ) => {
        if(error){
            callback('Unable to connect to weather service.', undefined)
        } else if(body.error){
            callback('Unable to find location, try again!!', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degress Fahrenheit out. It feels like '+body.current.feelslike+' degress out.')
        }
    })
}

module.exports = forecast