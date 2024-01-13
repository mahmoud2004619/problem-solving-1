// 1 - Create a function to calculate Average to a group of numbers(at least 10 numbers)


// 2- Write a function that takes the base and height of a triangle and return its area
// Area of triangle = (base x height) ÷ 2
function calc(x , y) {
    return (x * y)/2;
}
console.log(calc(20 , 10));

// 3- Create a function that takes the age in years and returns the age in days and print it on console
function calc(age){
    return age * 365;
}
console.log(calc(20));

// 4 - Create a function takes two numbers and return thier sum Create a function takes two numbers and return thier sum
function calc(x , y) {
    return (x + y);
}
console.log(calc(20,10));

// 5- Create a function that takes an array containing only numbers and return the first element
var Name = ["mahmoud", "mohamed", "ali", "ayman", "sara", "alaa", "ashraf", "fares", "mariam", "loay"]
document.getElementById("name1").innerHTML = Name[0];

// 6- Create a function show your name in HTML document
var MyName = "mahmoud ashraf ahmed helmy";
document.getElementById("myname").innerHTML = MyName;

// 7- Write a function that takes an integer hours and converts it to second
function calc(time) {
    return time *5;
}
console.log(calc(60));

// 8 - Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.
function calc(nun1, nun2, nun3, nun4) {
    if (nun1 + nun2 + nun3 + nun4 > 350) {
        return true;
    } else {
        return false;
    }
}
console.log(calc(100, 100, 100, 100));

// 9 - Create a function that takes a number that, if it is equal to zero, returns true, otherwise it returns false
function calc(x) {
    if (x == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(calc(1));

// 10- Do a function that takes two numbers and answers the remainder of their division, not the (different) division.
function calc(x, y) {
    return x % y;
}
console.log(calc(2, 10));

// 11- Find the largest of two number Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.


// 12- Check if input variable is a number or not
function calc(x){
    if(x==2){
        return true;
    } else {
        return false;
    }
}
console.log(calc(1));

// 13- Write a JavaScript function to get the current date
const date = new Date();
document.getElementById("history").innerHTML = date;