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