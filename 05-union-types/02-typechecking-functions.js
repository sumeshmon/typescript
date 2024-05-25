function getDbId(id) {
    // console.log(`The DB id is ${id}`);
    // id.toLocaleUpperCase()// this will get error because the number type is used. Do a type check.
    if (typeof id === 'string') {
        id = id.toUpperCase();
        console.log("The DB id is ".concat(id));
    }
}
getDbId('sumesh');
