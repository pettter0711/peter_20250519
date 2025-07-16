let btn = document.querySelector("#run");
let ageDOM = document.querySelector("#age");
let resultDOM = document.querySelector("#result");
console.log(resultDOM);

const initResult = () => {
    resultDOM.classList.remove("show");
    resultDOM.classList.remove("success");
    resultDOM.innerHTML = "";
};

const judgeAge = () => {
    initResult();

    let age = +ageDOM.value;
    let ageRule = 18;
    let resultText = "";
    let showClass = ["show", "success"];

    if (!age) {
        resultText = `請輸入年齡`;
        resultDOM.classList.add("show");
        ageDOM.focus();
        resultDOM.innerHTML = resultText;
        return;
    }

    if (age >= ageRule) {
        resultText = `您已滿 ${ageRule} 歲，可以投票`;
        resultDOM.classList.add(...showClass);
        // resultDOM.classList.add("success");
    } else {
        resultText = `您未滿 ${ageRule} 歲，不能投票`;
        resultDOM.classList.add("show");
        ageDOM.focus();
    }

    resultDOM.innerHTML = resultText;
};

btn.addEventListener("click", (e) => {
    judgeAge();
});

// 在陣列前面用...，代表把陣列展開
let arr = ["a", "b", "c"];
console.log(...arr);
