// // // const dshkgf = document.querySelector('#btn1');

// // // // console.log(button);

// // // dshkgf.addEventListener('click', () => {
// // //     console.log('Button Clicked');
// // //     dshkgf.innerText = 'Button Clicked! Thanks'
// // // })

// // // var, let, const

// // const ab = 1;

// // let abc = 2;
// // abc = 5;

// // if (ab > abc) {
// //     console.log(abc) // 
// // } else {
// //     abc = 1
// //     console.log(abc); // 10
// //     let abc = 10;
// // }
// // console.log(abc); // 1
// // // 

// const usersList = [
//     {
//         name: 'Mahesh', id: 10,
//     },
//     {
//         name: 'Mahesh1', id: 12,
//     },
//     {
//         name: 'Mahesh2', id: 16,
//     },
//     {
//         name: 'Mahes3h', id: 19,
//     },
//     {
//         name: 'Mahesh4', id: 21,
//     },
//     {
//         name: 'Mahesh5', id: 1045,
//     },
//     {
//         name: 'Mahesh6', id: 105333,
//     },
// ];

// // Loops
// // for
// for (let i = 0; i <= usersList.length - 1; i++) {
//     console.log(usersList[i]);
// }
// usersList.map((xyz, index) => {
//     console.log(xyz, index);
// })

// usersList.forEach(xyz => {
//     console.log(xyz);
// });

// function xyasss() {
//     console.log('xyasss');

// }
// const myFun = () => {
//     console.log('My FUn');

// }

// // xyasss();
// myFun();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter passcode: ', (passcode) => {
    console.log('You entered:', passcode);
    readline.close();
});
