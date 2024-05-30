var User = /** @class */ (function () {
    function User(name, email) {
        this._courseCount = 1;
        this.city = 'Thrissur';
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "appleEmail", {
        get: function () {
            return "Apple email ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (val) {
            if (val <= 1) {
                throw new Error('The number must be greater than 1');
            }
            this._courseCount = val;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User('Sumesh', 'sumesh@domain.com');
// console.log(user1);
// console.log(`with apple email ${user1.appleEmail}`); // Accessing appleEmail using the getter
try {
    user1.courseCount = 5; // Valid value, will set _courseCount to 5
    console.log(user1.courseCount); // 5
    user1.courseCount = 1; // Invalid value, will throw an error
}
catch (error) {
    console.error(error.message); // "The number must be greater than 1"
}
