function panctyon(){
    var lname= [], fname= [];
    var gender= [];
    var email= []; emailad= [];
    var origin= [];
    var destination= [];
    var depdate= []; retdate= [];
    
    
    
    lname = (document.getElementById("last").value);
    if (lname == ""){
        lname = "-NO LAST NAME FOUND-";
    }
    
    fname = (document.getElementById("first").value);
    if (fname == ""){
        fname = "-NO FIRST NAME FOUND-";
    }
    
    gender = (document.getElementById("gender").value);
    if (gender == 'Select Gender'){
        gender= "-PLEASE SELECT GENDER-"
    }
    
    email= (document.getElementById("email").value);
    if (email == ""){
        emailad = "-EMPTY! Input Email Address-"
    }
    else if (email.includes("@")){
        emailad= (document.getElementById("email").value);
    }
    else {
        alert("-Must contain @ variable-");
    }
    
    origin= (document.getElementById("origin").value);
    if (origin == ""){
        origin= "-EMPTY! Input Origin-"
    }
    
    destination= (document.getElementById("destination").value);
    if (destination == ""){
        destination = "-EMPTY! Input Destination-"
    }
    
    depdate= (document.getElementById("depdate").value);
    retdate= (document.getElementById("retdate").value);
    if (depdate =="" || retdate ==""){
        date= "-PLEASE SELECT DATES-";
    }
    else if (depdate>=retdate){
        date= "Departure Date must not be after Return Date";
    }
    else {
        date = depdate +"  ---  "+ retdate;
        
    }
    
    
    
    
    document.getElementById("demo1").innerHTML ="NAME :" +lname+ "   ,   " +fname;
    document.getElementById("demo2").innerHTML ="GENDER :" +gender;
    document.getElementById("demo3").innerHTML ="EMAIL ADDRESS :" +emailad;
    document.getElementById("demo4").innerHTML ="ORIGIN :" +origin;
    document.getElementById("demo5").innerHTML ="DESTINATION :" +destination;
    document.getElementById("demo6").innerHTML ="DATE :" +date;
}
