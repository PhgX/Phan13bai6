let char = [ 'c', 's', 'c', '2', '6', '1' ];
let temp;
// for(let j = 0; j < char.length; j++){
//     for (let i = 0; i < char.length; i ++){
//         if (char[i] > char[i+1]){
//             temp = char[i];
//             char[i] = char[i+1];
//             char[i+1] = temp; 
//         }
//     }
// }

let char1 = [];
for (i = 0; i < char.length; i++){
    char1[i] = char[char.length - 1 - i];
}   
document.write(char1);

