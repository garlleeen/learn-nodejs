const request = require('request')
const url =
'https://jsonplaceholder.typicode.com/posts/1'

request({
    url: url,
    json: true
}, (error, response) => {
    console.log('User ID : ' + response.body.userId + ' \n Post ID : ' +
    response.body.id + ' \n Post Title : ' +
    response.body.title)
})