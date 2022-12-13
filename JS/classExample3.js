class Employee // parent class
{
    id
    Name
    Salary
    constructor(i, n)// constructor of parent and local - i, 
    {
        this.Name = n
        this.id = i
    }
    show() {
        console.log(this.id, " ", this.Name, " ")
    }
}
class partTimeEmployee extends Employee //inheritance-'extends' keyword; child class
{
    No_of_hrs
    hrs_salary
    constructor(nh, hs, i, n) {
        super(i, n)// calling parent constructor
        this.No_of_hrs = nh
        this.hrs_salary = hs
    }
    cal_sal() {
        this.Salary = this.No_of_hrs * this.hrs_salary;
        console.log(this.Salary);
    }

}
var obj = new partTimeEmployee(21, 1350, 2345, "Dhanshree");
obj.cal_sal()
obj.show()