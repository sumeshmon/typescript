function getId(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value + 5;
}
var reslultOne = getId('Sumehs');
// console.log(reslultOne);
// checking string and null
function getIdOne(value) {
    if (typeof value === 'string') {
        if (value === "") {
            return "EMPTY";
        }
        return value.toUpperCase();
    }
    return "NULL";
}
var resultOne = getIdOne('  ');
console.log(resultOne); // Output: EMPTY
