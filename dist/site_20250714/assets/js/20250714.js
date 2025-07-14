let x = 10;
let y = 6;
let n1 = x + y;
let n2 = x - y;
let n3 = x * y;
let n4 = x / y;
let n5 = x % y;

let fomula = `
${x} + ${y} = ${n1}
${x} - ${y} = ${n2}
${x} * ${y} = ${n3}
${x} / ${y} = ${n4}
${x} % ${y} = ${n5}
`;

console.log(fomula);

let s1 = 10;
let s2 = s1++;

console.log(`s2: ${s2}`);

let s3 = 10;
let s4 = ++s3 + s3++ + ++s3;
// s3 = 11 , 12 , 13
// s4 = 11 + 11 + 13
// console.log("s3:", s3);
// console.log("s4:", s4);

for (let i = s3; i <= 23; i++) {
    console.log(i);
}

/** 判斷式:
 * ) = 指定(賦值)
 * ) == 寬鬆等於 (只看內容)
 * ) != 寬鬆不等於 (只看內容)
 * ) === 嚴格等於 (看內容、型態)
 * ) !== 嚴格不等於 (看內容、型態)
 * ) > 大於
 * ) < 小於
 * ) <= 小於等於
 * ) >= 大於等於
 * ) ! 反閘
 * ) && and
 * ) || or
 */

let a = 1;
let b = "1";

if (a !== b) {
    console.log("aaa");
}

let c = 1;
let d = 2;
if (!(a > d)) {
    console.log("bbb");
}
