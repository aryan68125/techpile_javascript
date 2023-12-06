function demo()
{
var x=document.querySelector("input")
var y=document.querySelector("img")
var message = document.querySelector(".messege")
if(x.value != ""){
    //TODO --> handle message 
    if(x.type=="password")
    {
    x.type="text"
    y.src="images/pass_show.png"
    }
    else
    {
    x.type="password"
    y.src="images/pass_hide.png"
    }
}
else{
    //TODO --> handle message 
    alert("Please enter password and then continue")
}
}