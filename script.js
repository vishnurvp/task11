'use strict';

// THIS - line 5 to line 119
// FAT ARROW FUNCTIONS - line 126 to line 190 

// THIS

// a) this inside a global scope
// b) this inside an object of global scope
// c) this inside a different object
// d) this inside a method
// e) this inside a function
// f) this inside an inner function
// g) this inside a constructor function
// h) this inside a class (ES6)


//      a) this inside a global scope
this.table = 'window table';
console.log(window.table); // window table
console.log(this.table); // window table

//      b) this inside an object of global scope
this.garage = {
    table: 'garage table',
    cleanTable() {
        console.log(`cleaning ${this.table}`)
    }
}
console.log(this.garage.table); // garage table

//      c) this inside a different object
let johnsRoom = {
    table: 'johns table',
    cleanTable() {
        console.log(`cleaning ${this.table}`)
    }
}
console.log(johnsRoom.table); // johns table

//      d) this inside a method
johnsRoom.cleanTable() // cleaning johns table
this.garage.cleanTable() // cleaning garage table

//      e) this inside a function
const cleanTable = function(soap) {
    console.log(`cleaning ${this.table} using ${soap}`)
}
    // using call on different objects
    cleanTable.call(this, 'some soap'); // cleaning window table using some soap
    cleanTable.call(this.garage, 'some soap'); //cleaning garage table using some soap
    cleanTable.call(johnsRoom, 'some soap'); // cleaning johns table using some soap

//      f) this inside an inner function
const cleanTable1 = function(soap) {
    // let that = this;
    // const innerFunction = function(_soap){
    //     console.log(`cleaning ${that.table} using ${_soap}`)
    // }
    // const innerFunction = function(_soap){
    //     console.log(`cleaning ${this.table} using ${_soap}`)
    // }
    const innerFunction = (_soap) => {
        console.log(`cleaning ${this.table} using ${_soap}`)
    }
    // innerFunction(this, soap);
    // innerFunction.bind(this)(soap);
    innerFunction(soap);
}
    // using call on different objects
    cleanTable1.call(this, 'some soap'); // cleaning window table using some soap

//      g) this inside a constructor function
let createRoom = function(name){
    this.table = `${name}s room`
}
createRoom.prototype.cleanTable = function(soap) {
    console.log(`cleaning ${this.table} using ${soap}`)
}
const jillsRoom = new createRoom('jill');
jillsRoom.cleanTable('some soap'); // cleaning jills room using some soap

//       h) this inside a class (ES6)
class createRoom2 {
    constructor(name) {
        this.table = `${name}s room`
    }
    cleanTable(soap) {
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}
const juliaRoom = new createRoom2('julia');
juliaRoom.cleanTable('julias soap'); //cleaning julias room using julias soap
    


// Design a student class
class Student {
    static numberOfStudents = 0;
    static students = [];
    constructor(name='', age=0, phoneNumber=9999999999, boardMarks=0) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.boardMarks = boardMarks;
        Student.numberOfStudents++;
        this.studentNumber = Student.numberOfStudents;
        Student.students.push(this);
    }
    isEligible() {
        if (this.boardMarks>40) return 'elegible';
        return 'not elegible';
    }
}

let stud1 = new Student('kiran', 23, 9998887776, 50);
let stud2 = new Student('kumar', 22, 9498887776, 60);
let stud3 = new Student('praveen', 23, 9966887776, 90);
let stud4 = new Student('prakash', 22, 9933887776, 38);
let stud5 = new Student('suresh', 21, 9955887776, 37);

console.log(Student.numberOfStudents);





// FAT ARROW FUNCITONS

var getA = function(a) {
    return a;
}

let getA1 = a => a;
console.log(getA1(2)); // 2

let square = a => a*a;
console.log(square(3)); // 9

let square1 = (a) => {return a*a};
console.log(square1(4)); // 16

var b = 2;
console.log(square1(b)); // 4

let multiply = (a,b) => {return a*b};
console.log(multiply(2,3)); // 6


// var x = function() {
//     var that = this;
//     // this.val = 1;
//     setTimeout(function(){
//         // this.val++;
//         that.val++;
//         // console.log(this.val);
//         console.log(that.val)
//     }, 1);
// }

var x = function() {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1);
}

// var xx = new x(); // 2 // prints at very last of the program


var x1 = function() {
    console.log(arguments[0])
};
// var x1 = (...n) => {
//     console.log(arguments[0])
// };
x1(1,2,3); 



function ElegibleForPlacements(min_marks) {
    let func = (min_age) => {
        if (min_marks<=this.boardMarks && this.age>=min_age) return true;
        return false;
    }
    return func;
}

for (let student of Student.students) {
    if (ElegibleForPlacements.call(student, 40)(20)) console.log(student.name);
}

// kiran
// kumar
// praveen





