import { log } from "console";

type User = {
    name : string;
    email : string;
    isActive : boolean
}

function createUser (user : User) : User{
    return {...user}
}
const user1 = createUser ({name: 'Sumesh', email: 'sumesh@sumesh.com', isActive: false})
// console.log(user1);

// mdn example
type Point = {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log(`The value of X is ${pt.x}`);
    console.log(`The value of Y is ${pt.y}`);
}

printCoord({x: 200, y: 300});

