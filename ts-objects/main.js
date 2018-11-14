var Point1 = /** @class */ (function () {
    function Point1() {
    }
    Point1.prototype.draw = function (x, y) {
        console.log(this.x + this.y);
    };
    return Point1;
}());
var pointObject;
pointObject.x = 1;
pointObject.y = 2;
// pointObject.draw(1,2);
