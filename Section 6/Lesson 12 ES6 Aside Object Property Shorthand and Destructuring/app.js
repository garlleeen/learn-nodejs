const name = 'Garl'
const userAge = 19

const user = {
    name: name,
    age: userAge,
    location: 'Indonesia'
}

console.log(user)

const { age, location:address } = user
console.log(age)
console.log(address)

const product = {
    label: 'Macbook M1 Pro 2021',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)