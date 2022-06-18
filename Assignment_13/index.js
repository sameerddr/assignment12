//   -------- Solution  1 -------

// a = parseInt(process.argv[2])
// for (var i = 1; i <= a; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// ------------solution 2 ----------

// x = parseInt(process.argv[2]);
// y = parseInt(process.argv[3]);
// for (i = x; i <= y; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// --------------solution 3 -----------

// let n = parseInt(process.argv[2]);
// let sum = 0;
// let firstdigit;
// let lastdigit;

// lastdigit = n % 10;

// while (n >= 10) {
//     n = Math.floor(n / 100);
// }
// firstdigit = n;
// console.log(firstdigit, lastdigit);


// ----------- solution 4 Armstrong Number -------------
// let number = parseInt(process.argv[2]);
// let sum = 0;
// let temp;
// let lastdigit;
// temp = number;

// while (temp != 0) {
//     lastdigit = temp % 10;
//     sum = sum + (lastdigit * lastdigit * lastdigit);
//     temp = parseInt(temp / 10);
// }
// if (sum == number) {
//     console.log(number, " is a Armstrong Number");
// } else {
//     console.log(number, " is not a Armstrong Number");
// }