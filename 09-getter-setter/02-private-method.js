var UserOne = /** @class */ (function () {
    function UserOne(name) {
        this.name = name;
    }
    UserOne.prototype.deleteTocken = function () {
        console.log('Tocken deleted');
    };
    UserOne.prototype.triggerDeleteTocken = function () {
        this.deleteTocken();
    };
    return UserOne;
}());
var user3 = new UserOne('Sumesh');
console.log(user3);
user3.triggerDeleteTocken();
