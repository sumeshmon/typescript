type cardNumber = {
    cardnum : number
}

type cardDate = {
    carddate : Date
}

type cardDetails = cardNumber & cardDate & {
    cardCcv : number
}

let user1 : cardDetails = {
    cardnum : 123466789,
    carddate: new Date(),
    cardCcv : 777

}
console.log(user1);
// console.log(user1.cardnum);
