const todo = require('./todo')

todo(1, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})