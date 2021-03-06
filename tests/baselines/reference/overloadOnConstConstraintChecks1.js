//// [overloadOnConstConstraintChecks1.ts]
class Base { foo() { } }
class Derived1 extends Base { bar() { } }
class Derived2 extends Base { baz() { } }
class Derived3 extends Base { biz() { } }

interface MyDoc { // Document
    createElement(tagName: string): Base;
    createElement(tagName: 'canvas'): Derived1;
    createElement(tagName: 'div'): Derived2;
    createElement(tagName: 'span'): Derived3;
    // + 100 more
}

class D implements MyDoc {
    createElement(tagName:string): Base;
    createElement(tagName: 'canvas'): Derived1;
    createElement(tagName: 'div'): Derived2;
    createElement(tagName: 'span'): Derived3;
    createElement(tagName:any): Base {
        return null;
    }
}

//// [overloadOnConstConstraintChecks1.js]
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
var Base = (function () {
    function Base() {
    }
    Base.prototype.foo = function () { };
    return Base;
}());
var Derived1 = (function (_super) {
    __extends(Derived1, _super);
    function Derived1() {
        return _super.apply(this, arguments) || this;
    }
    Derived1.prototype.bar = function () { };
    return Derived1;
}(Base));
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        return _super.apply(this, arguments) || this;
    }
    Derived2.prototype.baz = function () { };
    return Derived2;
}(Base));
var Derived3 = (function (_super) {
    __extends(Derived3, _super);
    function Derived3() {
        return _super.apply(this, arguments) || this;
    }
    Derived3.prototype.biz = function () { };
    return Derived3;
}(Base));
var D = (function () {
    function D() {
    }
    D.prototype.createElement = function (tagName) {
        return null;
    };
    return D;
}());
