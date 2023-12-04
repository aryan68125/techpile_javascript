function get_set_value(){
    //get values
    //student's name
    var name = document.getElementById("inlineFormInputGroup");
    var name_value = name.value;
    var name_messege = document.getElementById("name_messege");
    //contact 
    var mobile = document.getElementById("inlineFormInputGroup2");
    var mobile_value = mobile.value;
    var mobile_messege = document.getElementById("mobile_messege");
    //email 
    var email = document.getElementById("inlineFormInputGroup3");
    var email_value = email.value;
    var email_messege = document.getElementById("email_messege");
    //apply for
    var apply = document.getElementById("inlineFormInputGroup4");
    var apply_value = apply.value;
    var apply_messege = document.getElementById("apply_messege");
    //Training mode
    var training = document.getElementById("inlineFormInputGroup5");
    var training_value = training.value;
    var training_messege = document.getElementById("training_messege");
    //College mode
    var college = document.getElementById("inlineFormInputGroup6");
    var college_value = college.value;
    var college_messege = document.getElementById("college_messege");

    //setting the values
    //student's name
    name_messege.innerHTML = name_value;
    //contact
    mobile_messege.innerHTML = mobile_value;
    //email
    email_messege.innerHTML = email_value;
    //apply for
    apply_messege.innerHTML = apply_value;
    //training mode
    training_messege.innerHTML = training_value;
    //college mode
    college_messege.innerHTML = college_value;
}