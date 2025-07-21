let studentScores = [];

for (let i = 0; i <= 10; i++) {
    studentScores.push(Math.floor(Math.random() * 100));
}

console.log(studentScores);

// let passScores = studentScores.filter((score) => {
//     return score >= 60;
// });

// 鏈式連結 => 先整理出不及格的分數，再全部加10分，回傳到新的陣列
// 新的陣列僅需宣告一次，不用重複宣告或宣告2個變數來抓
let passScores = studentScores
    .filter((score) => {
        return score < 60;
    })
    .map((score) => {
        return score + 10;
    });

console.log(passScores);
