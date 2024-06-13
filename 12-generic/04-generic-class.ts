function genericClass <T,U extends number> (valueOne: T, valueTwo:U): object{
    return {
        valueOne,
        valueTwo
    }
}
// genericClass(4,5) // works fine if T,U only
// genericClass(4,'5') // works fine if T,U only
genericClass(4,'5') // will get error, because U extends to number