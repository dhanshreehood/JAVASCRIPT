class book{
    constructor(){
        this.bookName = ""
        this.AuthorName = ""
    }
    createBookInstance(){
        this.obj = new book()
    }

    getInstance(){
        if(!obj)
            this.createBookInstance()
        return this.obj
    }
}
var b1 = getInstance()// error; bcoz it needs to  object, but in singleton we can create only one...; that's why use SingletonDesignPattern.js approach!!!