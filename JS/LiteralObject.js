let book = {
    //this curly paranthesis is representing ur creating a object.
    bookName: "C Programming",
    authorName: "Ajay Mittal",
    price: 500,
    show: function()
    {
        console.log(this.bookName+"     "+this.authorName);
    }
};
book.show()// by using '.' operator we r calling function.
// console.log(book.price);
console.log(book['price']);