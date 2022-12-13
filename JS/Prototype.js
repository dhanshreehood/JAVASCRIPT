function player(jno,pn,cn)
{
    this.jno=jno //error jno is not defined
    this.playerName=pn
    this.countryName=cn
}
player.prototype.show = function()
{
console.log(this.jno," ",this.playerName," ",this.countryName," ",this.coachName)
}
player.prototype.coachName="Dhanshree_Vijayalaxmi"
var fun = new player(18, "M.S. Dhoni", "India")
fun.show()