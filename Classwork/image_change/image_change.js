//changing the image src using anonymous
window.setInterval(function(){
    var img1 = document.getElementById("img1")
    var img2 = document.getElementById("img2")
    var img1_src = img1.src
    var img2_src = img2.src
    img1.src = img2_src
    img2.src = img1_src
}, 1000);

//changing text inside the input using anonymous function
setInterval(function(){
var text1 = document.getElementById("text1")
var text2 = document.getElementById("text2")
var temp = text1.value
text1.value = text2.value
text2.value = temp
},1000)