//set the style of para tag on click  
var count = 0;
function set_style(){
    if(count==0){
        var x = document.getElementById("para");
        x.style.color="red";
        count=1;
    }
    else{
        var x = document.getElementById("para");
        x.style.color="black";
        count=0;
    }
   
}

//set the style of the image tag on click
function set_image_style(){
    var x = document.getElementById("img1");
    x.style.height="400px";
    x.style.width="500px";
    if(count==0){
        x.style.border="10px solid green";
        x.borderRadius="30px";
        x.style.transform="rotate(90deg)";
        x.style.transition="all 2s";
        count=1;
    }
    else{
        x.style.border="none";
        x.borderRadius="none";
        x.style.transform="rotate(0deg)";
        x.style.transition="all 2s";
        count=0;
    }
}

//set the style on the heading after the button is clicked
function set_heading_style(){
    var x = document.getElementById("heading1");
    if(count == 0){
        x.style.color = "red";
        x.style.background = "green";
        x.style.padding="50px";
        x.style.textAlign ="center";
        x.style.textShadow="10px 10px 2px black";
        x.style.fontSize = "50px";
        x.style.transition="all 2s";
        count=1;
    }
    else{
        x.style.color = "black";
        x.style.background = "white";
        x.style.padding="50px";
        x.style.textAlign ="center";
        x.style.textShadow="none";
        x.style.fontSize = "10px";
        x.style.transition = "all 2s";
        count=0;
    }
}

//get the value inside the text box on button click
function get_value_text_box(){
    var x = document.getElementById("text1");
    var value_entered_in_text = x.value;
    alert("name is :"+value_entered_in_text);
    if(count==0){
        x.style.border="5px solid green";
        count=1;
    }
    else{
        x.style.border="none";
        count=0;
    }
}


//set value in the text box 
function set_value_text_box(){
    var x = document.getElementById("text2");
    var y = document.getElementById("text3");
    var got_value = x.value;
    y.value = got_value;
    if(count == 0){
        x.style.border="2px solid red";
        y.style.border="2px solid green";
        count = 1;
    }
    else{
        x.style.border="2px solid green";
        y.style.border="2px solid red";
        count = 0;
    }
}

//set the h1 tag using write function
function write_function(){
    document.write("<h1>Hello world</h1>")
}

//get the text from h1 tag and show it on alert box 
function get_text_h1(){
    var x = document.getElementById("heading2");
    var value_from_h1 = x.innerText;
    alert("getting value from h1 tag : "+value_from_h1);
}

//How to set the value in a html tag using inner text using write function
function get_set_value_inner(){
    var x = document.getElementById("heading3");
    var y = document.getElementById("msg");
    // y.innerText = "hello";
    // y.innerHTML = "<h1>hello</h1>";
}

//How to set html tag span value from entered values in the text box
function set_span_value(){
    var userId = document.getElementById("userId1");
    var pass = document.getElementById("pass1");
    var user_span = document.getElementById("msg_user");
    var pass_span = document.getElementById("msg_pass");

    var user_value = userId.value;
    var pass_value = pass.value;

    user_span.innerHTML = user_value;
    pass_span.innerHTML = pass_value;
}