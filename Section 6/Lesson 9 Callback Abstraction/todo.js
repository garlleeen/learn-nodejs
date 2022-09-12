const request = require('request')

const todo = (id, callback) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id

    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.title === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                user_id : response.body.userId,
                id : response.body.id,
                title : response.body.title,
                completed : response.body.completed
            })
        }
    })
}

module.exports = todo