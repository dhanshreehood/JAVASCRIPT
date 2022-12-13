function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, 20));

//Annonymus function
let display = function () {
    console.log("Annonymus function!");
}
display();

//Arrow function
let display1 = () => { console.log("Arrow function!"); } // we r using fat arrow operator here!; if ur function implementation contains only a single statement u can skip paranthesis too!
display1();

//by using return
let f3 = (a) => { return a * a; }
console.log(f1(34));//without value: NaN.

// for 1 single line statement
let f4 = a => a * a;

// multiple line arrow
let f2 = (a) => {
    a * a;
    c = a + a;
    return c;
}
console.log(f1(34));

// declaraing default value in function
function add(n1, n2 = 50) {
    return n1 + n2;
}