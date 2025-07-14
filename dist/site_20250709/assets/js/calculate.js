console.log("calculate.js");

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let operator = document.querySelector("#operator");
let calcBtn = document.querySelector("#calc-btn");
let resultWrap = document.querySelector("#result-wrap");
let resultNum = document.querySelector("#result-num");

resultNum.innerHTML = "";

const initResultWrap = () => {
    resultWrap.classList.add("hide");
};

const showResultWrap = () => {
    resultWrap.classList.remove("hide");
};

const calcRun = () => {
    initResultWrap();

    // 1. 取得使用者輸入的數字
    let value1 = +num1.value;
    let value2 = +num2.value;
    let op = operator.value;

    // if (!value1 || !value2 || !op) {
    //     alert("請輸入數字");
    // } else {
    //     // 開始計算
    // }

    let errorDom = "";
    let errorMsg = "";

    if (value1 == "") {
        errorDom = num1;
        errorMsg = "請輸入數字1";
    }

    if (!errorDom && value2 == "") {
        errorDom = num2;
        errorMsg = "請輸入數字2";
    }

    // 2. 判斷使用者是否輸入數字
    if (!value1 || !value2 || !op) {
        Swal.fire({
            title: "輸入錯誤",
            html: errorMsg,
            icon: "error",
        }).then(() => {
            setTimeout(() => {
                errorDom.focus();
            }, 500);
        });

        return;
    }

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

    // hashmap作法
    // 用物件來運行程式，最後抱進一個變數裡。
    // op要記得先做錯誤判斷，或用try...catch...，避免變數噴錯。
    // let ops = {
    //     "+"(a, b) {
    //         return a + b;
    //     },
    //     "-"(a, b) {
    //         return a - b;
    //     },
    //     "*"(a, b) {
    //         return a * b;
    //     },
    //     "/"(a, b) {
    //         return a / b;
    //     },
    // };
    // result = ops[op](value1, value2);

    // switch作法
    // switch (op) {
    //     case "-":
    //         result = value1 - value2;
    //         break;

    //     case "*":
    //         result = value1 * value2;
    //         break;

    //     case "/":
    //         result = value1 / value2;
    //         break;

    //     default:
    //         result = value1 + value2;
    // }

    // 4. 顯示結果到 UI 上
    console.log(result);
    resultNum.innerHTML = result;
    showResultWrap();
};
calcBtn.addEventListener("click", calcRun);
