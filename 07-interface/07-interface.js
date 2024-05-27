var sumesh = {
    dbId: 1223,
    email: 'sumesh@ss.com',
    userId: 123456,
    startTrail: function () {
        return 'Hello';
    },
    getCoupenCode: function (name, val) {
        return 10;
    }
};
console.log(sumesh);
console.log(sumesh.getCoupenCode('SUMESH2023', 123));
console.log(sumesh.startTrail());
