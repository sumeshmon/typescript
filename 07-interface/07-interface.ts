// consider this is from pluggin or somebody's code. 
interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    startTrail(): string;
    getCoupenCode(coupenName: string, value: number): number;
}

// inerface reopening
interface User {
    isLogged : boolean
}

// extends
interface Admin extends User {
    isAdmin : boolean
}
// using extends
let sali : Admin = {
    isAdmin : false,
    dbId: 999,
    email: 'sali@ss.com',
    userId: 777,
    isLogged : false, // this is added additional interface.
    startTrail: function() {
        return 'Hello Sali';
    },
    getCoupenCode: function(name: string, val: number) {
        return 100;
    }
}

console.log(sali);




// assigning using variable
let sumesh: User = {
    dbId: 1223,
    email: 'sumesh@ss.com',
    userId: 123456,
    isLogged : false, // this is added additional interface.
    startTrail: function() {
        return 'Hello';
    },
    getCoupenCode: function(name: string, val: number) {
        return 10;
    }
}
console.log(sumesh);

console.log(sumesh.getCoupenCode('SUMESH2023', 123));
console.log(sumesh.startTrail());

export{}