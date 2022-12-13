var lang = ['HTML', 'CSS', 'JS', 'JQuery', 'python', 'Bootstrap', 'SCSS']
//while loop
//Initilization
//while(condition)
//{
//statments
//increament ir decreament3
//}
// var i = 0;
// while (i < lang.length) {
//     document.getElementById("order_list_lang").innerHTML += "<li>" + lang[i] + "</li>"
//     i++
// }

var j = 0;
while (j <= 5)
{
    if(j==2)// no req for paranthesis if 'if' block holds one statement.
        // break
        continue// it will skip current iteration and will start next condition.

    console.log(j);
    j++;
}
console.log("Value of J afterwhile loop:",j);
console.log("For Example:")
var z=0
for(;z<=5;z++)
{
        if(j==2)
        // break
        continue
    console.log(j);
}


// //Example:--for in
// var i="";
// for (var x in lang){
//     // document.getElementById("order_list_lang").innerHTML+="<li>"+x+":-"+lang[x]+"</li>"
// document.getElementById("order_list_lang").innerHTML+="<li>"+x+"</li>"
// }

//Normal for lopp
//for(initialization; condition; increament or decreament){-------}
// for(var i=0;i<lang.length;i++)
// {
//     // document.getElementById("for_output").innerHTML=lang[i]+"<br>"
//     document.getElementById("for_output").innerHTML+=lang[i]+"<br>"
// }


// // order_list_lang
// for(var i=0; i<lang.length; i++){
//     document.getElementById("order_list_lang").innerHTML+="<li>"+lang[i]+"</li>"
// }