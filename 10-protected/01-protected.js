var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserTwo = /** @class */ (function () {
    function UserTwo() {
        // private _getCourseCount : number = 1
        this._getCourseCount = 1;
    }
    return UserTwo;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subUser.prototype.getCourseCount = function () {
        this._getCourseCount = 6;
    };
    return subUser;
}(UserTwo));
var user1 = new UserTwo, _a = void 0,  = _a._getCourseCount,  = _a[6];
console.log(user1);
