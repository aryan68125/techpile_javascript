function confirm_box(){
    var x = window.confirm("Areyou sure you want to set style to this para tag")
    var paragraph = document.getElementById("paragraph")
    if(x == true){
        paragraph.style.color = "red"
        paragraph.style.background = "yellow"
        paragraph.style.border = "2px solid green"
        paragraph.style.borderRadius = "20px"
        paragraph.style.transition = "all 2s"
    }
    else{
        paragraph.style.color = "black"
        paragraph.style.background = "rgba(0,0,0,0)"
        paragraph.style.border = "none"
        paragraph.style.borderRadius = "none"
        paragraph.style.transition = "all 2s"
    }
}

//open the website using a confirm box 
function open_website_confirmbox(){
    var x = window.confirm("Are you sure you want to open stackoverflow website")
    if(x == true){
        location = "https://stackoverflow.com/questions/7882356/javascript-get-img-src-and-set-as-variable#:~:text=getElementById(%22foo%22).,getElementById(%22foo%22)."
    }
    else{
        location = "#"
    }
}