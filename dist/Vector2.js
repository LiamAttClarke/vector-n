"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    Vector2.fromArray = function (arr) {
        if (arr.length !== 2)
            throw new Error("arr.length must be 2.");
        return new Vector2(arr[0], arr[1]);
    };
    Vector2.dot = function (u, v) {
        return u.x * v.x + u.y * v.y;
    };
    Vector2.distance = function (v, u) {
        return u.subtract(v).length();
    };
    Vector2.distanceSq = function (v, u) {
        return u.subtract(v).lengthSq();
    };
    Vector2.angleBetweenRad = function (a, b) {
        var p = a.x * b.x + a.y * b.y;
        var n = Math.sqrt((Math.pow(a.x, 2) + Math.pow(a.y, 2)) * (Math.pow(b.x, 2) + Math.pow(b.y, 2)));
        var sign = a.x * b.y - a.y * b.x < 0 ? -1 : 1;
        var angle = Math.acos(p / n);
        return sign * angle;
    };
    Vector2.angleBetweenDeg = function (a, b) {
        return (0, utils_1.toDegrees)(Vector2.angleBetweenRad(a, b));
    };
    Vector2.prototype.toString = function () {
        return "(x: " + this.x + ", y: " + this.y + ")";
    };
    Vector2.prototype.toArray = function () {
        return [this.x, this.y];
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    };
    Vector2.prototype.subtract = function (v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    };
    Vector2.prototype.addScalar = function (n) {
        this.x += n;
        this.y += n;
        return this;
    };
    Vector2.prototype.subtractScalar = function (n) {
        this.x -= n;
        this.y -= n;
        return this;
    };
    Vector2.prototype.multiplyByScalar = function (n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    Vector2.prototype.negate = function () {
        this.x *= -1;
        this.y *= -1;
        return this;
    };
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2.prototype.lengthSq = function () {
        return this.x * this.x + this.y * this.y;
    };
    Vector2.prototype.magnitude = function () {
        return this.length();
    };
    Vector2.prototype.magnitudeSq = function () {
        return this.lengthSq();
    };
    Vector2.prototype.normalize = function () {
        var length = this.length();
        this.x /= length;
        this.y /= length;
        return this;
    };
    Vector2.prototype.perpendicular = function (clockwise) {
        if (clockwise === void 0) { clockwise = true; }
        var newX, newY;
        if (clockwise) {
            newX = this.y;
            newY = -this.x;
        }
        else {
            newX = -this.y;
            newY = this.x;
        }
        this.x = newX;
        this.y = newY;
        return this;
    };
    Vector2.prototype.rotateRad = function (rad) {
        this.x = (this.x * Math.cos(rad)) - (this.y * Math.sin(rad));
        this.y = (this.y * Math.sin(rad)) + (this.y * Math.cos(rad));
        return this;
    };
    Vector2.prototype.rotateDeg = function (deg) {
        this.rotateRad((0, utils_1.toRadians)(deg));
        return this;
    };
    return Vector2;
}());
exports.default = Vector2;
//# sourceMappingURL=Vector2.js.map