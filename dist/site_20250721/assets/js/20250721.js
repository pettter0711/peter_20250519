function showG1() {
    g1 = 10;
    console.log(g1);
}

showG1();
console.log(g1);

function showGG() {
    g1 = 100;
    console.log(g1);
}

showGG();

// IIFE 立即調用
(() => {
    g1 = 20;
    console.log(g1);
})();
