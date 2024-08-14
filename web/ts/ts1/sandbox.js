//variables
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var temp = 'hey';
temp = 90;
var loc = 'TVC';
var empty;
empty = true;
//arrays
var fruits = ['apple', 'date', 'pineapple'];
var arr = [1, 'a', true];
arr.push(2, 'v', false);
var arr2 = ['a', 1, 2, 3, true, new Date(), function (a, b) { return a + b; }];
var numbers_extracted = arr2.filter(function (elt) { return typeof elt == 'number'; });
console.log(numbers_extracted);
console.log(arr2[6](2, 6));
var array;
array = ['a', 'b', 'c', 'd'];
var array2;
array2 = ['a', 'b', 1, 2];
//object
var obj1;
var pet = { type: "dog", name: "Bruno", breed: "German Shepard" };
pet = { age: 5, color: "black", weight: 25.6 };
var pet1 = new Object(__assign({}, pet));
pet1['age'] = 22;
console.log(pet);
console.log(pet1);
//eg:-
var fn;
var Student = /** @class */ (function () {
    function Student(id, name, age, courses) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.printRecord = function () {
        console.log(this.id, this.name, this.age, this.courses);
    };
    return Student;
}());
var s1 = new Student('s1', 'tom', 22, ['java']);
s1.printRecord();
var sum = function (a, b) { return a + b; };
var cb1;
cb1 = function (a, b) {
    return a + b;
};
cb1(2, '3');
function cb(param1, param2, param3) {
    console.log(param1);
}
function cb_wrap(cb, arg1) {
    return "";
}
var add = function (a, b, c) {
    if (b === void 0) { b = 10; }
    if (c != undefined)
        console.log(a + b + c);
    else
        console.log(a + b);
};
add(1, void 0, 3);
