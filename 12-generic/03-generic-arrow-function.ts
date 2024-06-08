const getProducts = <T> (products : T) : T => {
    const myIndex = 9
    return products[myIndex]
}
const productOne = getProducts([12])
console.log(`I am arrow function with T generic ${productOne}`);
