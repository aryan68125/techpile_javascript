function set_Value(){
    //name text field
    var Name = document.getElementById("exampleFormControlInput1");
    var Name_value = Name.value;
    var para_name = document.getElementById("name_message");
    
    //contact text field
    var Contact = document.getElementById("exampleFormControlInput2");
    var Contact_value = Contact.value;
    var para_contact = document.getElementById("contact_message");

    //email text field
    var Email = document.getElementById("exampleFormControlInput3");
    var Email_value = Email.value;
    var para_email = document.getElementById("email_message");

    var Messege = document.getElementById("exampleFormControlTextarea1");
    var Messege_value = Messege.value;
    var par_messege = document.getElementById("messege_messege");

    //setting up the html value of para tag in html document
    //Name
    para_name.innerHTML = Name_value;

    //Contact
    para_contact.innerHTML = Contact_value;

    //Email
    para_email.innerHTML = Email_value;

    //messege
    par_messege.innerHTML = Messege_value;
}