var studentName = `Name` ; // "A variable named studentName and assign it a string value."
var studentAge = 10 ; // "A variable named studentAge and assign it a numeric value."
let isEnrolled = true ; // "A variable named isEnrolled and assign it a boolean value."

console.log(studentName) ; // "Log these variables to the console."
console.log(studentAge) ; // "Log these variables to the console."
console.log(isEnrolled) ; // "Log these variables to the console."

var isMessage = "Hello" ;
var isNumber = 100 ;
let isBoolean = false ;
let fruitTypes = [`apple`,`banana`,`cherry`] ;

let personName = {
    firstName: "First",
    lastName: "Last"
};

console.log(isMessage) ; // string message of "Hello"
console.log(isNumber) ; // number 100 from above
console.log(isBoolean) ; // returns false from Boolean
console.log(typeof isBoolean) ; // states that the false is a boolean type of data
console.log(fruitTypes) ; // pulled from Fruit list `apple`,`banana`,`cherry`
console.log(personName) ; // from the personName object above

console.log(10*10) ; // 10 times 10 equal 100

let x = 10 ;
let y = 7 ;

console.log(x-1) ; // 10-1=9
console.log(y+1) ; // 7+1=8

x++ ; // 10+1=11
y++ ; // 7+1=8

console.log(-x) ; // the 11 above flips to negative (-11)
console.log(-y) ; // the 8 flips to negative (-8)

console.log(x==y) ; // not equal (false)
console.log(x<y) ; // 7 is not larger than 10 false)
console.log(x>y) ; // 10 is larger than 7 (true)
console.log(x!==y) ; // not equal (true)

let xy = true ;
let yx = false ;

console.log(xy && yx) ; // false - only one is true
console.log(xy || yx) ; // true - one of the two are true
console.log(!xy) ; // it is true (flips to false)
console.log(!yx) ; // it is false (flips to true)