function handlesubmit(){
        

 
// VALIDATION FOR FIRSTNAME
var firstName = document.getElementById("inputfirstname").value;
var nameREGX = /^[A-Za-z]{2,}$/;

if (firstName == null || firstName == undefined  ||firstName == ""){
    document.getElementById("firstnameerr").innerText="required firstname";
    document.getElementById("firstnameerr").style.color ="red";
}
else if(nameREGX.test(firstName)){
    document.getElementById("firstnameerr").innerHTML =" ";
  
}
else{
    document.getElementById("firstnameerr").innerHTML ="please enter valid firstname";
    document.getElementById("firstnameerr").style.color = "red";
    return false;
}

// VALIDATION FOR LASTNAME
var lastName = document.getElementById("inputlastname").value;
var nameREGX = /^[A-Za-z]{2,}$/;

if(lastName == null ||  lastName == undefined || lastName == ""){
    document.getElementById("lastnameerr").innerText="required lastname";
    document.getElementById("lastnameerr").style.color ="red";
}

else if(nameREGX.test(lastName)){
    document.getElementById("lastnameerr").innerText = " ";
}
else{
    document.getElementById("lastnameerr").innerHTML ="please enter valid lastname";
    document.getElementById("lastnameerr").style.color = "red";
    return false;
} 

// VALIDATION FOR EMAIL
var email = document.getElementById("inputemail").value;
var emailREGX = /^[A-Za-z0-9+_.-]+@[A-Za-z]+\.[a-zA-Z]{2,4}$/

if(email == null ||  email == undefined || email == ""){
    document.getElementById("emailerr").innerText="required email";
    document.getElementById("emailerr").style.color ="red";
}

else if(emailREGX.test(email)){
    document.getElementById("emailerr").innerText = " ";
}
else{
    document.getElementById("emailerr").innerHTML ="please enter valid email";
    document.getElementById("emailerr").style.color = "red";
    return false;
} 

// VALIDATION FOR PASSWORD
var password = document.getElementById("inputpassword").value;
var passwordREGX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


if(password == null ||  password == undefined || password == ""){
    document.getElementById("passworderr").innerText="required password";
    document.getElementById("passworderr").style.color ="red";
}

else if(passwordREGX.test(password)){
    document.getElementById("passworderr").innerText = " ";
}
else{
    document.getElementById("passworderr").innerHTML ="please enter valid password";
    document.getElementById("passworderr").style.color = "red";
    return false;
}

// VALIDATION FOR CONFIRM-PASSWORD
var confirmpassword = document.getElementById("inputconfirmpassword").value;
var passwordREGX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


if(confirmpassword == null ||  confirmpassword == undefined || confirmpassword == ""){
    document.getElementById("confirmpassworderr").innerText="required confirm-password";
    document.getElementById("confirmpassworderr").style.color ="red";
}

else if(passwordREGX.test(password) && password == confirmpassword){
    document.getElementById("confirmpassworderr").innerText = " ";
}
else{
    document.getElementById("confirmpassworderr").innerHTML ="password & confirm-password not match";
    document.getElementById("confirmpassworderr").style.color = "red";
    return false;
}

// VALIDATION FOR PHONE-NUMBER
var phonenumber = document.getElementById("inputphonenumber").value;
var phonenumberREGX = /^[7/8/9]+[0-9]{09}$/


if(phonenumber == null ||  phonenumber == undefined || phonenumber == ""){
    document.getElementById("phonenumbererr").innerText="required phone-number";
    document.getElementById("phonenumbererr").style.color ="red";
}

else if(phonenumberREGX.test(phonenumber)){
    document.getElementById("phonenumbererr").innerText = " ";
}
else{
    document.getElementById("phonenumbererr").innerHTML ="please enter phonenumber";
    document.getElementById("phonenumbererr").style.color = "red";
    return false;
}

// VALIDATION FOR GENDER
var male = document.getElementById("inputgendermale").checked;
var female = document.getElementById("inputgenderfemale").checked;

if((male)){
    document.getElementById("gendererr").innerText=" ";
}
else if((female)){
    document.getElementById("gendererr").innerText = " ";
}
else{
    document.getElementById("gendererr").innerHTML ="please select any one";

    document.getElementById("gendererr").style.color = "red";
    return false;
}






}




