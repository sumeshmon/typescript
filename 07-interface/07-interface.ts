interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    startTrail(): string;
    getCoupenCode(coupenName: string, value: number): number;
}

let sumesh: User = {
    dbId: 1223,
    email: 'sumesh@ss.com',
    userId: 123456,
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

