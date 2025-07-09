console.log("calculate.js");

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let operator = document.querySelector("#operator");
let calcBtn = document.querySelector("#calc-btn");
let resultTitle = document.querySelector("#result-title");
let resultNum = document.querySelector("#result-num");

resultTitle.innerHTML = "不顯示";
resultNum.innerHTML = "";

const calcRun = () => {
    // 1. 取得使用者輸入的數字
    let value1 = +num1.value;
    let value2 = +num2.value;
    let op = operator.value;

    // if (!value1 || !value2 || !op) {
    //     alert("請輸入數字");
    // } else {
    //     // 開始計算
    // }

    // 2. 判斷使用者是否輸入數字
    if (value1 && value2 && op) {
        let result;
        // 3. 判斷 op
        if (op == "+") {
            result = value1 + value2;
        }

        if (op == "-") {
            result = value1 - value2;
        }

        if (op == "*") {
            result = value1 * value2;
        }

        if (op == "/") {
            result = value1 / value2;
        }

        // 4. 顯示結果到 UI 上
        console.log(result);
        resultTitle.innerHTML = "計算結果:";
        resultNum.innerHTML = result;
    } else {
        alert("請輸入數字");
    }
};
calcBtn.addEventListener("click", calcRun);
