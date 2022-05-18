let arr = [['']];
let i;
let j;
let count = 0;
function input(){
   let input = document.getElementById("input").value;
   for (i = 0; i < arr.length; i++){
       for (j = 0; j < arr[i].length; j++){
            arr[i][j] = input;
            count++;
       }
   } document.getElementById("input").value = "";
}
let arr1;
function output(){
    arr1 = arr.join();
    document.getElementById("output").innerHTML += arr1; 
    document.getElementById("output2").innerHTML = "So phan tu trong mang la " + count;
}



// let arr = [[12,3,4],[3,3,3]];
//    for (i = 0; i < arr.length; i++){
//        for (j = 0; j < arr[i].length; j++){
//               document.write(arr[i][j] + "<br>");
//        }
//    }   

