let count;
let space_count;
let str1;
function count_word() {
    let str = document.getElementById("input").value;
    str1 = str.split(" ").length;    
    document.getElementById("output").innerHTML = str1;
}

