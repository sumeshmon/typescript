"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var UserTwo = /** @class */ (function () {
    function UserTwo(courseCount) {
        if (courseCount === void 0) { courseCount = 1; }
        // Changed private to protected so it can be accessed by subclasses
        this._courseCount = 1;
        this._courseCount = courseCount;
    }
    return UserTwo;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser(courseCount, isFamily) {
        if (courseCount === void 0) { courseCount = 1; }
        if (isFamily === void 0) { isFamily = false; }
        var _this = _super.call(this, courseCount) || this;
        _this.isFamily = isFamily;
        return _this;
    }
    SubUser.prototype.getCourseCount = function () {
        return this._courseCount;
    };
    SubUser.prototype.setCourseCount = function (count) {
        this._courseCount = count;
    };
    return SubUser;
}(UserTwo));
// Create an instance of SubUser
var user1 = new SubUser(2, true);
console.log(user1.getCourseCount()); // This should print 2
user1.setCourseCount(6);
console.log(user1.getCourseCount()); // This should print 6
