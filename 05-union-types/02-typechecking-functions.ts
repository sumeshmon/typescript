function getDbId (id: string | number){
    // console.log(`The DB id is ${id}`);
    // id.toLocaleUpperCase()// this will get error because the number type is used. Do a type check.
    
    if (typeof id === 'string') {
        id = id.toUpperCase()
        console.log(`The DB id is ${id}`);
    }
    
}
getDbId('sumesh')