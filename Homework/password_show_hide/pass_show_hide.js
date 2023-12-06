function demo()
{
var x=document.querySelector("input")
var y=document.querySelector("img")
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