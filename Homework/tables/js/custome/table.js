
// var row_index = 1;
// function get_set_table(){
// var table_row_starts = "<tr>";
// var table_row_ends = "</tr>";

// //get the table body
// var table_body = document.getElementById("table_body");
// //call all the input boxes
// var student_name = document.getElementById("student_name");
// var student_email = document.getElementById("student_name");
// var student_phone = document.getElementById("student_phone");
// var student_father_name = document.getElementById("student_father_name");
// var student_father_contact = document.getElementById("student_father_contact");
// var student_address = document.getElementById("student_address");
// //set the values inside these input boxes to the table data tag
// var table_data_items_holder = table_row_starts;
// table_data_items_holder += `<th scope="row">${row_index}</th>`;
// table_data_items_holder +=`<td> ${student_name.value} </td>`;
// table_data_items_holder +=`<td> ${student_email.value} </td>`;
// table_data_items_holder +=`<td> ${student_phone.value} </td>`;
// table_data_items_holder +=`<td> ${student_father_name.value} </td>`;
// table_data_items_holder +=`<td> ${student_father_contact.value} </td>`;
// table_data_items_holder +=`<td> ${student_address.value} </td>`;
// table_data_items_holder += table_row_ends;
// //save table_data_items_holder in an array
// var items_holder = [];
// items_holder[items_holder.length]
// // items_holder.push( table_data_items_holder );
// for (i of items_holder){
//     table_body.innerHTML = items_holder;
// }
// row_index++;
// }

function get_set_table(){
//call all the input boxes
var student_name = document.getElementById("student_name");
var student_email = document.getElementById("student_name");
var student_phone = document.getElementById("student_phone");
var student_father_name = document.getElementById("student_father_name");
var student_father_contact = document.getElementById("student_father_contact");
var student_address = document.getElementById("student_address");
//get the values inside the input boxes
var name = student_name.value;
var email = student_email.value;
var phone = student_phone.value;
var Father_name = student_father_name.value;
var Father_phone = student_father_contact.value;
var address = student_address.value;
//get the table body
var table_body = document.getElementById("table_body");
var newRow = table_body.insertRow(table_body.rows.length);
//insert cells in the table body
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);
var cell6 = newRow.insertCell(5);
//insert data on a newly created cell
cell1.innerHTML = name;
cell2.innerHTML = email;
cell3.innerHTML = phone;
cell4.innerHTML = Father_name;
cell5.innerHTML = Father_phone;
cell6.innerHTML = address;
//set the input fields to null
student_name.value = "";
student_email.value = "";
student_phone.value = "";
student_father_name.value = "";
student_father_contact.value = "";
student_address.value = "";
}