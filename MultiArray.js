let ar = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(ar); // Outputs: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(ar[0]); // Outputs: [1, 2, 3]
console.log(ar[0][0]); // Outputs: 1
console.log(ar[0][1]); // Outputs: 2
console.log(ar[0][2]); // Outputs: 3
console.log(ar[1]); // Outputs: [4, 5, 6]
console.log(ar[1][0]); // Outputs: 4
console.log(ar[1][1]); // Outputs: 5
console.log(ar[2][2]); // Outputs: 9    

let i;
let j;
for (i = 0; i < ar.length; i++) {
    for (j = 0; j < ar[i].length; j++) {
        console.log(ar[i][j]); // Outputs: 1, 2, 3, 4, 5, 6, 7, 8, 9
    }
}