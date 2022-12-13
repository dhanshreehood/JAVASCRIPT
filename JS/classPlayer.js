class Player {
    // Class Level(Instance variables)
    jersey_no = 007
    playerName = "Dhanhsree_Vijayalaxmi Hood_yelchelwar"
    countryName = "India"

    constructor(j, pn, cn)//local variable
    {
        console.log(this.jersey_no, "  " + this.playerName, "  " + this.countryName);
        this.jersey_no = j
        this.playerName = pn
        this.countryName = cn
    }

    show() {
        console.log(this.jersey_no, "  " + this.playerName, "  " + this.countryName);
    }
}
var obj = new Player(8, "laila Panduranga", "Saudi Arabia")
obj.show()