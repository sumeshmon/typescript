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
var Camera = /** @class */ (function () {
    function Camera(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return Camera;
}());
// if we didn't use abstract keyword for Camera class this will not throw error
// const userone = new Camera ('Normal', 'yes')
// console.log(userone);
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, reels) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.reels = reels;
        return _this;
    }
    return Instagram;
}(Camera));
var instaUserOne = new Instagram('Normal', 'yes', true);
console.log(instaUserOne);
