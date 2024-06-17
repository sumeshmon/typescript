function getId (value : string | null){
    if( typeof value === 'string'){
        return value.toUpperCase()
    }
    return value + 5
}
const reslultOne = getId('Sumehs')
// console.log(reslultOne);

// checking string and null

function getIdOne(value: string | null) {
    if (typeof value === 'string') {
        if (value === "") {
            return "EMPTY";
        }
        return value.toUpperCase();
    }
    return "NULL";
}

const resultOne = getIdOne('');
console.log(resultOne); // Output: EMPTY
