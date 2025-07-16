let dom = {
    maxi: document.querySelector("#max-i"),
    maxj: document.querySelector("#max-j"),
    run: document.querySelector("#run"),
    result: document.querySelector("#result"),
    xtable: document.querySelector("#x-table"),
};

console.log(dom);

const initResult = () => {
    dom.result.classList.remove("show");
};

const x = (maxi, maxj) => {
    let html = "";

    html += `<thead><tr><th>i/j</th>`;
    for (let i = 1; i <= maxi; i++) {
        html += `<th>${i}</th>`;
    }
    html += `</tr></thead>`;

    html += `<tbody>`;
    for (let j = 1; j <= maxj; j++) {
        html += `<tr><td>${j}</td>`;
        for (let i = 1; i <= maxi; i++) {
            html += `<td>${j * i}</td>`;
        }
        html += `</tr>`;
    }
    html += `</tbody>`;

    dom.xtable.innerHTML = html;
};

dom.run.addEventListener("click", (e) => {
    console.log("run");

    initResult();
    let maxi = +dom.maxi.value;
    let maxj = +dom.maxj.value;
    console.log(maxi, maxj);

    if (maxi <= 0 || maxj <= 0) {
        alert("請輸入數值，並須大於0");
        return;
    }

    x(maxi, maxj);
    dom.result.classList.add("show");
});
