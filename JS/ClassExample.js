class book{
    // constructor()// empty constructor is a 'default contructor'.
    // {
    //     console.log("Default Constructor");
    // }

    // u can use';' or completely skip it - ur choice!

    constructor(bn, an, p){ //error:A class may only have one constructor
        console.log("Paramaterized constructor");
        this.bookName= bn; //'this.' makes variable accessible throughout the class.
        this.authorName = an;
        this.price = p;
    }

    show()
    {
        // console.log("class method");
        // console.log(bn," ", an," ", p);//error: bn is not defined
        console.log(this.bookName," ", this.authorName," ", this.price);
    }
}
var obj1= new book("C Programming", "Ajay Mittal", 700);
obj1.show()// explicit method call
