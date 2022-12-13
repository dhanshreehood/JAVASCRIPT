//function expression:-
const f = (function () {
    //constructor function
    function book() {
        this.bookName = "Sooraj ka aathva ghoda"
        this.authorName = "Dhanshree_Vijayalaxmi"
    }

    let obj
    function createBookInstance() {
        obj = new book()
        return obj
    }

    return {
        getForInstance: () => {
            if (!obj)
                obj = createBookInstance()
            return obj
        }
    }
})()

const b1 = f.getForInstance() //here for the first time if condition will make a object 
const b2 = f.getForInstance() // then when b2 goes to the function the if conditiopn will get false and already created object will be created.
console.log(b1 == b2)