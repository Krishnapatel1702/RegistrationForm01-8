function handlesubmit(){

    let firstName = document.getElementById("inputfirstname").value.trim(); 
    let lastName = document.getElementById("inputlastname").value.trim();
    let email = document.getElementById("inputemail").value.trim();
    let password = document.getElementById("inputpassword").value.trim();
    let confirmpassword = document.getElementById("inputconfirmpassword").value.trim();
    let phonenumber = document.getElementById("inputphonenumber").value.trim();
    let male = document.getElementById("inputgendermale").checked;
    let female = document.getElementById("inputgenderfemale").checked;

// REGULAR EXPRESSION
    
    let nameREGX = /^[A-Za-z]{2,}$/;
    let emailREGX = /^[A-Za-z0-9+_.-]+@[A-Za-z]+\.[a-zA-Z]{2,4}$/
    let passwordREGX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let phonenumberREGX = /^[7/8/9]+[0-9]{09}$/

// VALIDATION FOR FIRSTNAME


if (firstName == null || firstName == undefined  ||firstName == ""){
    document.getElementById("firstnameerr").innerText="required firstname";
}
else if(nameREGX.test(firstName)){
    document.getElementById("firstnameerr").innerHTML =" ";
  
}
else{
    document.getElementById("firstnameerr").innerHTML ="please enter valid firstname";
    return false;
}

// VALIDATION FOR LASTNAME

if(lastName == null ||  lastName == undefined || lastName == ""){
    document.getElementById("lastnameerr").innerText="required lastname";
}

else if(nameREGX.test(lastName)){
    document.getElementById("lastnameerr").innerText = " ";
}
else{
    document.getElementById("lastnameerr").innerHTML ="please enter valid lastname";
    return false;
} 

// VALIDATION FOR EMAIL

if(email == null ||  email == undefined || email == ""){
    document.getElementById("emailerr").innerHTML="required email";
}

else if(emailREGX.test(email)){
    document.getElementById("emailerr").innerHTML = " ";
}
else{
    document.getElementById("emailerr").innerHTML ="please enter valid email";
    return false;
} 

// VALIDATION FOR PASSWORD

let passspecialcharREGX = /[@$!%*?&]{1,}/ ;
let passNumREGX = /[0-9]{1,}/
let passCharREGX = /[a-zA-Z]{0,}/

if(password == null ||  password == undefined || password == ""){
    document.getElementById("passworderr").innerHTML="<li>required min 8 character</li> <li>atleast one upprcase & lowercase</li> <li>atleast one number</li> </li> <li>atleast one special character(@$!%*?&)</li>";

}
else{
    let err = "";
 
if(!passCharREGX.test(password))
    err += "<li>atleast one upprcase & lowercase</li>"

 if(!passNumREGX.test(password))
    err += "<li>atleast one number</li>"


 if(!passspecialcharREGX.test(password))
    err += " <li>atleast one special character(@$!%*?&)</li>"

 if(!passwordREGX.test(password))
    err += "<li>min 8 character</li>"
    document.getElementById("passworderr").innerHTML= err;
   
}

// VALIDATION FOR CONFIRM-PASSWORD


if(confirmpassword == null ||  confirmpassword == undefined || confirmpassword == ""){
    document.getElementById("confirmpassworderr").innerHTML = "required confirm-password";
}

else if(passwordREGX.test(confirmpassword) && password == confirmpassword){
    document.getElementById("confirmpassworderr").innerHTML = "";
}

else{
   document.getElementById("confirmpassworderr").innerHTML ="password & confirm-password not match";
    console.log(confirmpassword);

    return false;
}

// VALIDATION FOR PHONE-NUMBER


if(phonenumber == null ||  phonenumber == undefined || phonenumber == ""){
    document.getElementById("phonenumbererr").innerText="required phone-number";
}

else if(phonenumberREGX.test(phonenumber)){
    document.getElementById("phonenumbererr").innerText = " ";
}
else{
    document.getElementById("phonenumbererr").innerHTML ="please enter min 10 digits phonenumber";
    return false;
}

// VALIDATION FOR GENDER


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




