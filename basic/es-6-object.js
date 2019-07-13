const name = 'shadab';
const userage = 18;

const user = {
    name,
    age: userage,
    location:'Ghaziabad'
}
console.log(user)

//object destructuring
const product = {
    label: 'Red notebook',
    price:3,
    stock:201,
    salePrice: undefined
}

//const label = product.label
const {label, stock} = product
console.log(label)
console.log(stock)

const transaction = (type, {}) => {
    const
}