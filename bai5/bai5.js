// let str = [['']];
// function input_str(){
//     str = document.getElementById("input").value;
//     document.getElementById("output").innerHTML += str;
//     document.getElementById("input").value = "";
//     document.write(typeOf(str));
// }

let arr = [["mot hai"], ["mot hai"]];
if(arr[0].length !== arr[1].length){
    alert("Khác nhau");
}
else {
    let flag = true;
    for (let i = 0; i < arr[1].length; i++){
        if (arr[0][i] !== arr[1][i])
            flag = false;
            break;
    }
    if(flag === true){
        alert("Giống nhau");
    }
    else {
        alert("Khác nhau");    
    }
}
        
