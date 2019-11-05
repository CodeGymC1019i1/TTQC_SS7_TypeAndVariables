function kiemtra() {
let inputWidth;
let inputHeight;

inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");

let { width, height } = newFunction();

let area = width * height;
document.write("The area is: " + area);

function newFunction() {
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    return { width, height };
}
}
