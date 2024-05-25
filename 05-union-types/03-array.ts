let data1 : number[] = [1,2,3] // string type can't pass in this array
let data2 : string [] = ['1','2','3'] // number type can't add in this array

let data3 : string[] | number [] = [1,2,3] // either number or string.if add string will get error
let data4 : (string | number) [] = [1,2,3,'4']
console.log(data4);


