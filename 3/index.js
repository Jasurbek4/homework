// for(let i = 0; i < 10; i++) {
//! 1
// let a = +prompt("a ni kiriting:"); // 10
// let b = +prompt("b ni kiriting:"); // 7
// for(i = a; i >= b; i--) {
// 	console.log(i);
// 	if(i === 5) break;
// }
// let i = b;
// while(i <= a) {
// 	console.log(i);
// 	i++;
// }

//! Continue
// for(let i = 0; i < 10; i++) {
// 	if(i === 5) continue;
//! 4
// let price = 10000;
// for(let k = 1; k <= 10; k++) {
// 	console.log(k * price);
// }

//! 9
// let a = 10;
// let b = 20;
// 11, 12, ..., 19
// 11*11, 12*12, ..., 19*19
// let sum = 0;
// for(let i = a + 1; i < b; i++) {
// 	console.log(i);
// }
// 	sum += i * i
// }
// console.log("Natija:", sum);

//! Tub son
// 2, 3, 5, 7, 11, 13, 17, 19, 23

//! n gacha bo'lgan tub son topish
// let n = 100;
// for(let i = 2; i <= n; i++) {
// 	let count = 0;
// 	for(let j = 1; j <= i; j++) {
// 		if(i % j === 0) count++;
// 	}
// 	if(count === 2) console.log(i);
// }

//! n gacha bo'lgan murakkab son topish
// let n = 100;
// for(let i = 2; i <= n; i++) {
// 	let count = 0;
// 	for(let j = 1; j <= i; j++) {
// 		if(i % j === 0) count++;
// 	}
// 	if(count > 2) console.log(i);
// }

//! 9, karra jadval
// for (let k = 1; k <= 9; k++) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${k} * ${i} = ${k * i}`);
//   }
// 	console.log("-------------------------");
// }

//! 16
// let n = 100;
// for(let i = 0; i <= n; i++) {
// 	if(i % 5 === 0) continue;
// 	console.log(i);
// }

// let n = 100;
// for(let i = 0; i <= n; i++) {
// 	if(i % 5 !== 0) console.log(i);
// }

//! 5
// a, b, c
// a > b && b > c

//! 6
// a = 8
// b = 15
// c = 10
// console.log(b < a && b > c || b > a && b < c);

//! 8
// a, b, c, d
// let a = 4, b = 3, c = 5, d = 1;
// console.log(a >= 0 && b >= 0 && c >= 0 && d >= 0);

//! 9
// a, b, c
// let a = 3,
//   b = 2,
//   c = 5;
// console.log(
//   (a >= 0 && b >= 0 && c <= 0) ||
//     (a <= 0 && b >= 0 && c >= 0) ||
//     (a >= 0 && b <= 0 && c >= 0)
// );

//! 14
// let a = +prompt("a");
// let b = +prompt("b");
// if (a > b) console.log("a katta");
// else if (b > a) console.log("b katta");
// else console.log("a va b teng");

//! 15
// let a = +prompt("a");
// let b = +prompt("b");
// let c = +prompt("c");

// if (a > b && a > c) console.log("a katta");
// else if (b > a && b > c) console.log("b katta");
// else if (c > a && c > b) console.log("c katta");
// else if (a === b && b === c) console.log("3 lasi teng");

//! 3 xonali son berilgan, raqamlari yigindisini topish
// 236 => 2 + 3 + 6
// 267 => 2 + 6 + 7

// let n = prompt("n");
// if (n >= 100 && n <= 999) {
//   let birlar = n % 10;
//   let onlar = ((n - (n % 10)) / 10) % 10;
//   let yuzlar = (n - onlar * 10 - birlar) / 100;
//   console.log(yuzlar + onlar + birlar);
// } else alert("3 xonali butun son kiriting!");