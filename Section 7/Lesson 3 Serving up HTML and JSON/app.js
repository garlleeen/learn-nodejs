const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})