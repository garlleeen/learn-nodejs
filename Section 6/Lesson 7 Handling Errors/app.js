const request = require('request')
var proc = process.argv[2]

proc = parseInt(proc)

const url = 'https://jsonplaceholder.typicode.com/todos/' + proc
request({
    url: url,
    json: true
}, (error, response) => {
    if(error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.title === undefined) {
        console.log('ERROR: Todos not found..!!!')
    } else {
        console.log(
            'My Task \n', 
            'User ID : ' + response.body.userId + '\n',
            'ID : ' + response.body.id + '\n',
            'Todos : ' + response.body.title + '\n',
            'Completed : ' + response.body.completed
            )
    }
})