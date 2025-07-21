let dom = {
    addScoreBtn: document.querySelector("#add-score-btn"),
    scoreTable: document.querySelector("#score-table"),
};

console.log(dom);

dom.addScoreBtn.addEventListener("click", (e) => {
    let tbodyTrs = dom.scoreTable.querySelectorAll("tbody tr");
    tbodyTrs.forEach((tr) => {
        tr.classList.remove("updated-score");
    });

    Swal.fire({
        title: "確定要加分嗎?",
        text: "加分完後無法復原!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確定",
        cancelButtonText: "取消",
    }).then((result) => {
        let scores = dom.scoreTable.querySelectorAll(
            "tbody tr td:nth-child(3)"
        );
        console.log(scores);

        scores.forEach((score) => {
            if (result.isConfirmed) {
                let value = score.textContent;
                let newValue = +value + 10;
                if (newValue > 100) {
                    newValue = 100;
                }

                console.log(newValue);
                score.textContent = newValue;
            }
        });

        tbodyTrs.forEach((tr) => {
            tr.classList.add("updated-score");
        });
    });
});
