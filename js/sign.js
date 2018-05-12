function submit(){
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    localStorage.setItem("Name",name.value);
    // localStorage.setItem("number",number.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    
    // if(email.indexOf("") !== -1){
    //     alert('spaces are not allowed');
    // }
    // else{
    //     return false;}

    if (name.value === "" && email.value === "" && password.value === "") {
        alert("Please Fill The Form First");    }
        else{
            name.value = "";
            password.value = "";
            email.value = "";
            // number.value = "";
            window.location = "login.html"
        }    

}

function login(){
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var storageEmail = localStorage.getItem("email");
    var storagePassword = localStorage.getItem("password");
    if(userEmail.value === storageEmail && userPassword.value === storagePassword) {
        alert("Login Successful");
        window.location = "todo/todo.html";
    }
else ("login failed");
}
