//////////////////////////////////////////////////////////////////////////////
// TypeScript Fundamentals
//////////////////////////////////////////////////////////////////////////////
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
var age = 2;
var names = "prayas";
var arr = ['jatin', 3, true];
var arrNames = ['dog', 'cat', 'shalini'];
var arrAge = [1, 23, 4];
var arr1 = ['andwemet', 55, false];
var sports;
(function (sports) {
    sports[sports["cricket"] = 0] = "cricket";
    sports[sports["basketball"] = 1] = "basketball";
    sports[sports["golf"] = 2] = "golf";
})(sports || (sports = {}));
;
function log(val) {
    console.log(val);
}
log(sports[0]);
log(sports.golf); // return index in enum = 2
function joke() {
    return 'shalini has a unicorn startup';
}
console.log(joke());
var unionType;
unionType = 1;
unionType = "string";
// console.log(1+'j'); is valid in js
// | operator
function addWithUnion(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
console.log(addWithUnion("shalini age is ", 56));
function addWithType(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
console.log(addWithUnion("shalini's father age is ", 80));
// null & undefined type
function testFunc(test) {
    console.log(test);
}
// testFunc(); is invalid
// testFunc(80);
testFunc(null);
// ? operator
function testFunc1(a, b, c) {
    if (b === void 0) { b = "Singh "; }
    console.log(a + b + c);
}
// testFunc1(); is invalid
testFunc1('Shalini ', 'Shawl ');
testFunc1('Shalini ');
// ... in fuction parameter
function testFunc2(a) {
    var remaing = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        remaing[_i - 1] = arguments[_i];
    }
    return a + remaing.join(" ");
}
var x = testFunc2('humpty', ' dumpty', 'sat', 'on', 'a wall');
console.log(x);
//////////////////////////////////////////////////////////////////////////////
// TypeScript GENERICS
//////////////////////////////////////////////////////////////////////////////
function identity(arg) {
    return arg;
}
var a = identity('anyString');
var b = identity(10);
console.log(a);
console.log(b);
// IMPORTANT: use readonly for properties and use const for variables.
var infosys = { id: 1, age: 8 };
console.log(infosys);
function printClass(a) {
    a.print();
}
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () { console.log('ClassA.print()'); };
    ClassA.prototype.printTwo = function () { console.log('ClassA.print()'); };
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () { console.log('ClassB.print()'); };
    return ClassB;
}());
var classA = new ClassA();
classA.print();
//////////////////////////////////////////////////////////////////////////////
// TypeScript Modules
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// TypeScript OOPS 
//////////////////////////////////////////////////////////////////////////////
var SimpleClass = /** @class */ (function () {
    // constructor
    function SimpleClass(_name, _id, _age) {
        this.id = _id;
        this.name = _name;
        this.age = _age;
    }
    SimpleClass.staticFunc = function () {
        console.log('static function called');
    };
    SimpleClass.prototype.print = function () {
        console.log("id:: ".concat(this.id));
    };
    SimpleClass.wife = true;
    return SimpleClass;
}());
var exClass = new SimpleClass('JaiHind', 222, 40);
// exClass.id = 1; is invalid
// exClass.age = 10; is invalid
exClass.name = 'Hi'; // is valid
console.log(exClass.name, exClass.age); // is valid
exClass.print();
SimpleClass.staticFunc();
console.log(SimpleClass.wife);
//////////////////////////////////////////////////////////////////////////////
// TypeScript Abstract Class 
//////////////////////////////////////////////////////////////////////////////
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.getData = function () {
        return ('muh meh lega? = ');
    };
    return NewClass;
}(AbstractClass));
var BabyClass = /** @class */ (function (_super) {
    __extends(BabyClass, _super);
    function BabyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BabyClass.prototype.getData = function () {
        return ("".concat(_super.prototype.getData.call(this), " nahi"));
    };
    return BabyClass;
}(NewClass));
var exObject = new NewClass();
console.log(exObject.getData());
var exObject1 = new BabyClass();
console.log(exObject1.getData());
