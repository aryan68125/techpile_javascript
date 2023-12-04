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
    //college mode
    college_messege.innerHTML = college_value;
}

//gets selected items from Apply for drop down menu and displays it in the p tag below Applyfor dropdown menu
function printSelectedValue_Apply_for(event) {
    dropdown_selecteditem = document.getElementById("apply_messege");
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the text content of the selected item
    var selectedValue = event.target.textContent;

    // Print the selected value to the console
    console.log(selectedValue);
    dropdown_selecteditem.innerHTML = selectedValue
  }

  // Get all the <a> elements inside the dropdown menu
  var dropdownItems = document.querySelectorAll('.Apply_for_items');

  // Add a click event listener to each <a> element
  dropdownItems.forEach(function(item) {
    item.addEventListener('click', printSelectedValue_Apply_for);
  });


//gets selected items from Training mode drop down menu and displays it in the p tag below TrainingMode dropdown menu
  function printSelectedValue_Training_mode(event) {
    dropdown_selecteditem = document.getElementById("training_messege");
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the text content of the selected item
    var selectedValue = event.target.textContent;

    // Print the selected value to the console
    console.log(selectedValue);
    dropdown_selecteditem.innerHTML = selectedValue
  }

  // Get all the <a> elements inside the dropdown menu
  var dropdownItems = document.querySelectorAll('.training_mode_items');

  // Add a click event listener to each <a> element
  dropdownItems.forEach(function(item) {
    item.addEventListener('click', printSelectedValue_Training_mode);
  });

  //gets selected items from Training session drop down menu and displays it in the p tag below TrainingSession dropdown menu
  function printSelectedValue_Training_session(event) {
    dropdown_selecteditem = document.getElementById("training_session_messege");
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the text content of the selected item
    var selectedValue = event.target.textContent;

    // Print the selected value to the console
    console.log(selectedValue);
    dropdown_selecteditem.innerHTML = selectedValue
  }

  // Get all the <a> elements inside the dropdown menu
  var dropdownItems = document.querySelectorAll('.training_session_items');

  // Add a click event listener to each <a> element
  dropdownItems.forEach(function(item) {
    item.addEventListener('click', printSelectedValue_Training_session);
  });

    //gets selected items from Select_Courses drop down menu and displays it in the p tag below Select_Courses dropdown menu
    function printSelectedValue_Select_Courses(event) {
        dropdown_selecteditem = document.getElementById("Select_Courses_messege");
        // Prevent the default behavior of the link
        event.preventDefault();
    
        // Get the text content of the selected item
        var selectedValue = event.target.textContent;
    
        // Print the selected value to the console
        console.log(selectedValue);
        dropdown_selecteditem.innerHTML = selectedValue
      }
    
      // Get all the <a> elements inside the dropdown menu
      var dropdownItems = document.querySelectorAll('.Select_Courses_items');
    
      // Add a click event listener to each <a> element
      dropdownItems.forEach(function(item) {
        item.addEventListener('click', printSelectedValue_Select_Courses);
      });