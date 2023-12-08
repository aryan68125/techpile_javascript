function dropdown_items(){
    var dropdown = document.querySelector(".output_dropdown")
    var arr = ["HTML", "CSS", "JS", "Jquery", "REACT JS", "Vue JS"];
    var result = "<select>";
    for(var i of arr){
        result+=`<option> ${i} </option>`
    }
    dropdown.innerHTML = `${result} </select>`;
}

function ul_items(){
    var ul_items_output = document.querySelector(".ul_items_output");
    var ul_items = ["Summer Training" , "Winter training" , "Industrial training" , "IT training"];
    var ul_items_holder = "<ul>";
    for (var i in ul_items){
        ul_items_holder+= `<li> ${ul_items[i]} </li>`;
    }
    ul_items_holder = `${ul_items_holder} </ul>`;
    ul_items_output.innerHTML = ul_items_holder;
}