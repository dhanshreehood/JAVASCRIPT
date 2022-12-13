class Student
{
    // Class Level(Instance variables)
    id = 0
    name = "Dhanhsree_Vijayalaxmi Hood_yelchelwar"
    per = 88


    constructor(i,n,p)//local variable
    {
        console.log(this.id,"  "+this.name,"  "+this.per)
        this.id=i
        this.name=n
        this.per=p
    }

    show()
    {
        console.log(this.id,"  "+this.name,"  "+this.per,"  "+ this.date)
    }
}
var obj= new Student(1,"Amit",97, "Cybage")
obj.date="8/30/2022"
obj.show()
