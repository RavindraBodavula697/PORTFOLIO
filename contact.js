function name_fun(){
    const name = document.getElementById("name").value;
    const name_reg=/^[a-zA-Z\s]*$/;
    if(!name_reg.test(name)){
        document.getElementById("Name_msg").innerHTML="Invalid name";
    }else{
        document.getElementById("Name_msg").innerHTML="";
    }
}
function email_fun(){
    const email = document.getElementById("email").value;
    const email_reg=/^[a-zA-Z_][a-zA-Z0-9.+%-]+@[A-Za-z0-9_.+-]+\.[a-z]{2,}$/
    if(!email_reg.test(email)){
        document.getElementById("email_msg").innerHTML="Invalid email";
    }else{
        document.getElementById("email_msg").innerHTML="";
    }
}
function pass_fun(){
    const pass = document.getElementById("password").value;
    if(pass.length<6){
        document.getElementById("password_msg").innerHTML="Password should contain at least 6 characters";
    }else{
        document.getElementById("password_msg").innerHTML="";
    }
    // const pass_reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // if(!pass_reg.test(pass)){
        
    // }else{
    //     document.getElementById("password_msg").innerHTML="";
    // }
}
function phone_fun(){
    const phone = document.getElementById("phone").value;
    const phone_reg = /^[6-9][0-9]{9}$/;
    if(!phone_reg.test(phone)){
        document.getElementById("phone_msg").innerHTML="Invalid phone number";
    }else{
        document.getElementById("phone_msg").innerHTML="";
    }
}
function add_fun(){
    const add = document.getElementById("add").value;
    const add_reg=/^[a-zA-Z\s]*$/;
    if(!add_reg.test(add)){
        document.getElementById("address_msg").innerHTML="Invalid address";
    }else{
        document.getElementById("address_msg").innerHTML="";
    }
}
