//// [classImplementsClass5.ts]
class A {
    private x = 1;
    foo(): number { return 1; }
}
class C implements A {
    private x = 1;
    foo() {
        return 1;
    }
}

class C2 extends A {}

var c: C;
var c2: C2;
c = c2;
c2 = c;

//// [classImplementsClass5.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = (function () {
    function A() {
        this.x = 1;
    }
    A.prototype.foo = function () { return 1; };
    return A;
}());
var C = (function () {
    function C() {
        this.x = 1;
    }
    C.prototype.foo = function () {
        return 1;
    };
    return C;
}());
var C2 = (function (_super) {
    __extends(C2, _super);
    function C2() {
        return _super.apply(this, arguments) || this;
    }
    return C2;
}(A));
var c;
var c2;
c = c2;
c2 = c;
