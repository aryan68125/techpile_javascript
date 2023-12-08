// var arr = [100,100.56, true, "Techpile"]
// document.write(arr[0]+"<br/>"+arr[1])

//string interpolation 
// document.write(`
// <h1>item of first index : <h1/> ${arr[0]} <br/>
// <h1>item of first index : <h1/> ${arr[1]} <br/>
// <h1>item of first index : <h1/> ${arr[2]} <br/>
// <h1>item of first index : <h1/> ${arr[3]} <br/>
// `);

var studentInfo = ["Rollex", "Bullet", "Ballistic", "Leo"];
// for (let i = 0; i < studentInfo.length; i++) {
//     console.log(studentInfo[i]);
//     alert(studentInfo[i])
//   }

// for ..in studentInfo
// for(var x in studentInfo){
//     console.log(studentInfo[x]);
//     alert(studentInfo[x])
// }

// var x = "Techpile";
// for (var i of x){
//     alert(i);
// }

    
//example of for loop using document.write function
// var programming = ["HTML", "CSS", "JS", "Jquery", "Bootstrap"];
// var first_div = document.querySelector(".for_in");
// var for_in_messege = document.getElementById("array_output_for_in");
// var second_div = document.querySelector(".for_of");
// var for_of_messege = document.getElementById("array_output_for_of");
// for (var i in programming){
//     document.write(`${programming[i]} is in index ${i} <br/>`);
// }
// var count = 0
// for (var i of programming){
//     document.write(`${i} is in index ${count} <br/>`);
//     count++;
// }
// for (var i=0;i<programming.length;i++)
// {
//     document.write(`${programming[i]} is in index ${i} <br/>`);
// }

//to print the output of the array using innerhtml in paragraph tag
function loop(){
    var programming = ["HTML", "CSS", "JS", "Jquery", "Bootstrap"];
    var first_div = document.querySelector(".for_in");
    var for_in_messege = document.getElementById("array_output_for_in");
    var second_div = document.querySelector(".for_of");
    var for_of_messege = document.getElementById("array_output_for_of");
    var result_for_in = "";
    for (var i in programming){
        result_for_in+=`${programming[i]} is in index ${i} <br/>`;
        // for_in_messege.innerHTML = programming[i];
    }
    for_in_messege.innerHTML = result_for_in

    var result_for_of = "";
    var count = 0
    for (var i of programming){
        result_for_of+= `${i} is in index ${count} <br/>`
        count++;
    }
    for_of_messege.innerHTML = result_for_of;

}