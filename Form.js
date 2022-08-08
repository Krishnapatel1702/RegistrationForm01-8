let person = {};
console.log(person);
// onchange function:

// onchange for firstname
let firstName, lastName, email,password,confirmpassword, phonenumber, gender

function myfirstname() {

    let firstName = document.getElementById("inputfirstname").value;


    let nameREGX = /^[A-Za-z]{2,}$/;

    if (firstName == null || firstName == undefined || firstName == "") {
        document.getElementById("firstnameerr").innerText = "required firstname";
        document.getElementById("inputfirstname").style.border = "red solid 1px";
        document.getElementById("firstnameerr").style.Color = " red ";
    }
    else if (nameREGX.test(firstName)) {
        document.getElementById("firstnameerr").innerHTML = " ";
        document.getElementById("inputfirstname").style.borderColor = "lightgrey";
       
    }
    else {
        document.getElementById("firstnameerr").innerHTML = "please enter valid firstname";
        document.getElementById("inputfirstname").style.border = "red solid 1px";
        document.getElementById("firstnameerr").style.Color = " red ";
        // return false;

    }
}

// for lastname

function mylastname() {

    let lastName = document.getElementById("inputlastname").value.trim();
    let nameREGX = /^[A-Za-z]{2,}$/;


    if (lastName == null || lastName == undefined || lastName == " ") {
        document.getElementById("lastnameerr").innerText = "required lastname";
        document.getElementById("inputlastname").style.borderColor = " ";
        document.getElementById("lastnameerr").style.Color = " red ";
    }
    else if (nameREGX.test(lastName)) {
        document.getElementById("lastnameerr").innerHTML = " ";
        document.getElementById("inputlastname").style.borderColor = "lightgrey";
    }
    else {
        document.getElementById("lastnameerr").innerHTML = "please enter valid lastname";
        document.getElementById("inputlastname").style.border = "red solid 1px";
        document.getElementById("lastnameerr").style.Color = " red ";
        return false;

    }
}


// onchange for email
function myemail() {


    let email = document.getElementById("inputemail").value.trim();
    let emailREGX = /^[A-Za-z0-9+_.-]+@[A-Za-z]+\.[a-zA-Z]{2,4}$/;

    if (email == null || email == undefined || email == "") {
        document.getElementById("emailerr").innerHTML = "required email";
        // document.getElementById("inputemail").style.borderColor ="";
        document.getElementById("inputemail").style.borderColor = " red ";
    }

    else if (emailREGX.test(email)) {
        person.logemail=email;
        document.getElementById("emailerr").innerHTML = " ";
        document.getElementById("inputemail").style.borderColor = "lightgrey";

    }
    else {
        document.getElementById("emailerr").innerHTML = "please enter valid email";
        document.getElementById("inputemail").style.border = "red solid 1px";
        document.getElementById("emailerr").style.Color = " red ";
        return false;
    }


}


// onchange for password
function mypasssword() {
    let password = document.getElementById("inputpassword").value.trim();


    let passwordREGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passspecialcharREGX = /[@$!%*?&]{1,}/;
    let passNumREGX = /[0-9]{1,}/;
    let passCharREGX = /[a-zA-Z]{0,}/;


    if(password == null ||  password == undefined || password == ""){
        document.getElementById("passworderr").innerHTML="<li>required min 8 character</li> <li>atleast one upprcase letter</li> <li>atleast one lowercase letter</li> <li>atleast one number</li> </li> <li>atleast one special character(@$!%*?&)</li>";
        document.getElementById("inputpassword").style.border = "red solid 1px";
        
    }
    else{
        let err ="";
    
    
    if(!passCharREGX.test(password))
        err += "<li>atleast one lowercase & uppercase letter</li>";
        document.getElementById("inputpassword").style.border = "red solid 1px";

    
     if(!passNumREGX.test(password))
        err += "<li>atleast one number</li>";
        document.getElementById("inputpassword").style.border = "red solid 1px";

    
    
     if(!passspecialcharREGX.test(password))
        err += " <li>atleast one special character(@$!%*?&)</li> ";
        document.getElementById("inputpassword").style.border = "red solid 1px";

    
     if(!passwordREGX.test(password))
        err += "<li>min 8 char</li> "
        document.getElementById("passworderr").innerHTML= err;
        document.getElementById("inputpassword").style.border = "red solid 1px";

        if(passspecialcharREGX.test(password))
        person.logpassword = password;
        document.getElementById("inputpassword").style.borderColor = "lightgrey";

       
    }




    
}
// onchange for CONFIRM-PASSWORD
function myconfirmpasssword() {
    let password = document.getElementById("inputpassword").value.trim();

    let confirmpasssword = document.getElementById("inputconfirmpassword").value.trim();


    let passwordREGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if (confirmpasssword == null || confirmpasssword == undefined || confirmpasssword == "") {
        document.getElementById("confirmpassworderr").innerHTML = "required confirm-password";
        document.getElementById("inputconfirmpassword").style.border = "red solid 1px";

    }

    else if (passwordREGX.test(confirmpasssword) && password == confirmpasssword) {
        document.getElementById("confirmpassworderr").innerHTML = " ";
        document.getElementById("inputconfirmpassword").style.borderColor = "lightgrey";

    }

    else {
        document.getElementById("confirmpassworderr").innerHTML = "password & confirm-password not match";
        document.getElementById("inputconfirmpassword").style.border = "red solid 1px";

        console.log(confirmpasssword);


    }
}

// onchange for phone-number

function myphonenumber(){

    let phonenumber = document.getElementById("inputphonenumber").value.trim();
    let phonenumberREGX = /[0-9]{10}$/;


if(phonenumber == null ||  phonenumber == undefined || phonenumber == " "){
    document.getElementById("phonenumbererr").innerText="required phone-number";
    document.getElementById("inputphonenumber").style.border = "red solid 1px";

}

else if(phonenumberREGX.test(phonenumber)){
    document.getElementById("phonenumbererr").innerText = " ";
}
else{
    document.getElementById("phonenumbererr").innerHTML ="please enter min 10 digits phonenumber";
    document.getElementById("inputphonenumber").style.border = "red solid 1px";

    return false;
}

}

// onchange for Gender
 function mygender() {
    let male = document.getElementById("inputgendermale").checked;
    let female = document.getElementById("inputgenderfemale").checked

    if((male)){
        document.getElementById("gendererr").innerText=" ";
    }
    else if((female)){
        document.getElementById("gendererr").innerText = " ";
    }
    else{
        document.getElementById("gendererr").innerHTML ="please select any one";
    
        return false;
    }
 }


 
 function handlesubmit(){
    
    myfirstname();
    mylastname();
    myemail();
    mypasssword();
    myconfirmpasssword();
    myphonenumber();
    mygender();


   localStorage.setItem("personDetails",JSON.stringify(person));
   window.location.href = ("./login.html");

}
   