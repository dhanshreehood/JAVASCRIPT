// console.log("Hello from JS");
var a=100;
let b=200;
let c= 500; //it's outside, will be printed.
{
    let c=10; //you can modify let
    var d= 20;
    const e = 50; 
    //e = 455; //you can't update let.
    var d = 657; //redeclaration of var
    //const e = 326; //you can't redeclare.
    //e = 265; //you can't update const.
    console.log(c);
    console.log(e);
}
console.log(a);
console.log(b);
console.log(c);
// console.log(c); //it is block scoped because of the 'let' ;for inside c = 10.
console.log(c); // for c= 500.
console.log(d);
// console.log(e);