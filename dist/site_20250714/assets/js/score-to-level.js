let scoreDOM = document.querySelector("#score");
let resultWrapDOM = document.querySelector("#result-wrap");
let resultScoreDOM = resultWrapDOM.querySelector("#result-score");
let resultLevelDOM = resultWrapDOM.querySelector("#result-level");
let calcBtn = document.querySelector("#score-btn");

console.log(scoreDOM, resultWrapDOM, resultScoreDOM, resultLevelDOM, calcBtn);

const initScreen = () => {
    resultWrapDOM.classList.add("hide");
    resultScoreDOM.innerHTML = "";
    resultLevelDOM.innerHTML = "";
};

const toLevel = (score) => {
    if (score >= 90) {
        return "甲";
    }

    if (score >= 80) {
        return "乙";
    }

    if (score >= 70) {
        return "丙";
    }

    if (score >= 60) {
        return "丁";
    }

    return "不及格";
};

const showResult = async () => {
    let score = +scoreDOM.value;
    let errorMsg = "";

    if ((!score && score != 0) || score > 100 || score < 0) {
        if (!score && score != 0) {
            errorMsg = "請輸入分數";
        }

        if (score > 100 || score < 0) {
            errorMsg = "分數請介於0~100";
        }

        await Swal.fire({
            title: "錯誤",
            html: errorMsg,
            icon: "error",
        });

        setTimeout(() => {
            scoreDOM.value = "";
            scoreDOM.focus();
        }, 500);

        return;
    }

    let level = toLevel(score);

    resultScoreDOM.innerHTML = score;
    resultLevelDOM.innerHTML = level;
    resultWrapDOM.classList.remove("hide");
};

calcBtn.addEventListener("click", () => {
    initScreen();
    showResult();
});
