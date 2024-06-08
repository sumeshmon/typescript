var getProducts = function (products) {
    var myIndex = 9;
    return products[myIndex];
};
var productOne = getProducts([12]);
console.log("I am arrow function with T generic ".concat(productOne));
