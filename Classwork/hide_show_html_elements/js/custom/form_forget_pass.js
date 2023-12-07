function on_page_load(){
    var register_form = document.getElementById("registration_form");
    var login_form = document.getElementById("login_form");
    var forget_pass = document.getElementById("forgot_password_form");
    register_form.style.display = "block";
    login_form.style.display = "none";
    forget_pass.style.display = "none";
}
function display_login(){
    var register_form = document.getElementById("registration_form");
    var login_form = document.getElementById("login_form");
    var forget_pass = document.getElementById("forgot_password_form");
    register_form.style.display = "none";
    login_form.style.display = "block";
    forget_pass.style.display = "none";
}
function display_forgot_password(){
    var register_form = document.getElementById("registration_form");
    var login_form = document.getElementById("login_form");
    var forget_pass = document.getElementById("forgot_password_form");
    register_form.style.display = "none";
    login_form.style.display = "none";
    forget_pass.style.display = "block";
}