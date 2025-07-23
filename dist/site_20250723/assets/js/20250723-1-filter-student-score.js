// Promise 與 非同步
const some = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("some");
        }, 5000);
    });
};

some().then(function (data) {
    console.log(data);
});

console.log("1234");

/**
 * 利用fetch抓取students.json
 * 此處使用非同步
 */
let students = [];
const getStudents = () => {
    // 先用Promise，將這串函數包裝成非同步
    return new Promise((resolve, reject) => {
        // fetch接收資料
        fetch("assets/database/students.json")
            .then((res) => {
                // then: 前面處理完後，接著處理then裡的東西
                return res.json(); // 回傳res.json()給getStudents();
            })
            .then((data) => {
                resolve(data); // 處理掉data後，再回傳給getStudents();
            })
            .catch((error) => {
                reject(error);
            });
    });
};

/**
 * 將前面回傳的data，丟進此處的then處理
 * 所有與非同步處理的相關資料都用跟著用非同步
 */
getStudents().then((data) => {
    students = data;
    console.log(data);
});

/**
 * 非同步處理可以用 Promise + then，也可已用async + await
 * 但是async + await需要再 js module才能使用
 * 一般js需要用Promise處理
 */

let dom = {
    allTable: document.querySelector("#all-table"),
    passTable: document.querySelector("#pass-table"),
    failTable: document.querySelector("#fail-table"),
    fn: document.querySelector("#fn"),
    fnBtns: document.querySelectorAll("#fn .btn"),
    allTableWrap: document.querySelector("#all-table-wrap"),
};

console.log(students);
console.log(dom);

// 監聽 body 的 click 事件，確定事件冒泡有執行
document.body.addEventListener("click", (e) => {
    console.log("body click event");
    console.log(e.target);
});

dom.fn.addEventListener("click", (e) => {
    e.stopPropagation(); // 阻止事件冒泡 (body的事件監聽)

    let target = e.target;
    if (target.classList.contains("btn")) {
        dom.allTableWrap.classList.remove("is-both");

        // 移除所有按鈕的 active 類別
        dom.fnBtns.forEach((btn) => {
            btn.classList.remove("active");
        });

        if (target.classList.contains("all")) {
            console.log("all btn");
            target.classList.add("active");
            renderAllTable();
        }
        if (target.classList.contains("pass")) {
            console.log("pass btn");
            target.classList.add("active");
            renderPassTable();
        }
        if (target.classList.contains("fail")) {
            console.log("fail btn");
            target.classList.add("active");
            renderFailTable();
        }
        if (target.classList.contains("both")) {
            console.log("both btn");
            target.classList.add("active");
            dom.allTableWrap.classList.add("is-both");
            renderPassTable("pass");
            renderFailTable("fail");
        }
    }
});

/**
 * 渲染學生資料
 * @param {Array} students 學生資料
 * @param {string} targetTable 目標表格
 * @returns {void}
 */
const renderTable = (students, targetTable) => {
    let tbody = "";
    students.forEach((student) => {
        tbody += `<tr>
    <td>${student.name}</td>
        <td>${student.score}</td>
        </tr>`;
    });

    let table = dom.allTable;

    if (targetTable === "pass") {
        table = dom.passTable;
    }

    if (targetTable === "fail") {
        table = dom.failTable;
    }

    table.querySelector("tbody").innerHTML = tbody;
};

/**
 * 渲染所有學生資料
 * @returns {void}
 */
const renderAllTable = () => {
    renderTable(students);
};

/**
 * 渲染及格學生資料
 * @returns {void}
 */
const renderPassTable = (targetTable) => {
    let fails = filterStudent(true);
    renderTable(fails, targetTable);
};

/**
 * 渲染不及格學生資料
 * @returns {void}
 */
const renderFailTable = (targetTable) => {
    let fails = filterStudent(false);
    renderTable(fails, targetTable);
};

/**
 * 篩選學生成績
 * @param {boolean} isPass 是否及格
 * @returns {Array} 篩選後的學生資料
 */
const filterStudent = (isPass) => {
    let filterStudents = [];

    if (isPass) {
        filterStudents = students.filter((student) => student.score >= 60);
    } else {
        filterStudents = students.filter((student) => student.score < 60);
    }

    return filterStudents;
};

let fails = filterStudent();
let passes = filterStudent(true);

// renderAllTable();
// renderPassTable();
// renderFailTable();
