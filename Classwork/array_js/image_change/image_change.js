var i=0;
function image_array(){
    var image_array = [
        "1.png",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg"
    ];
  
    var path = "images/";
    var img1 = document.querySelector("#img1");
    img1.src = path+image_array[i];
    i++;
    if (i==image_array.length-1){
        i=0;
    }
}
// window.setInterval(image_array(),3000);