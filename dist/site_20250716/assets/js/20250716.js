let day = "星期四";
console.log("day :", day);

// switch
switch (day) {
    case "星期一":
        console.log("switch :", "開始新的一週！");
        break;
    // break 是必要的，否則會繼續執行下一個 case
    case "星期五":
    case "星期四":
        console.log("switch :", "週末快到了！");
        break;

    default: // 如果沒有匹配的 case，則執行 default
        console.log("switch :", "平常的一天。");
}

// if
if (day === "星期一") {
    console.log("if :", "開始新的一週！");
} else if (day === "星期五" || day === "星期四") {
    console.log("if :", "週末快到了！");
} else {
    console.log("if :", "平常的一天。");
}

let score = 82;
let level = "";

score = Math.floor(score / 10);

switch (score) {
    case "9":
        level = "假";
}
