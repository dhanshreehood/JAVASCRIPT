function evenAndOddCheck() {
    console.log("In function");
    var n = document.getElementById("n1").value;
    console.log(n);
    if (n % 2 == 0) {
        document.write(n + " is a Even number!");
    }
    else {
        document.write(n + " is a Odd number!");
    }
}

function division(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var result = n1/n2;
    // console.log(result);
    // document.write("Division is: "+ result)
    document.getElementById("res").value=result;
    document.getElementById("Output").innerHTML="<h1>Division is:"+result.toFixed(2)+"</h1>";
}