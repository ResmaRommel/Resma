function panctyon(){

    var num= parseInt(document.getElementById("int").value);
    var bin;
    var array = [];
 
    
    
    if (num > 0){
    temp = num;
    
    while (temp != 0){
        bin = temp % 2;
        array.push(bin);
        temp = Math.trunc(temp/2);
    }
    document.getElementById("demo").innerHTML = "Decimal Number =" + num + "<br><br> Binary Number =";
   while (array.length!=0){
     document.getElementById("demo").innerHTML += array.pop();
    
    }
    } else {
        document.getElementById("demo").innerHTML = "Invalid!! NEGATIVE Number";
    }
}
