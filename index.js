let display = document.getElementById("display");

document.getElementById("btn-1").addEventListener("click", () => {
    display.innerText += "1";
});

document.getElementById("btn-2").addEventListener("click", () => {
    display.innerText += "2";
});

document.getElementById("btn-3").addEventListener("click", () => {
    display.innerText += "3";
});

document.getElementById("btn-4").addEventListener("click", () => {
    display.innerText += "4";
});

document.getElementById("btn-5").addEventListener("click", () => {
    display.innerText += "5";
});

document.getElementById("btn-6").addEventListener("click", () => {
    display.innerText += "6";
});

document.getElementById("btn-7").addEventListener("click", () => {
    display.innerText += "7";
});

document.getElementById("btn-8").addEventListener("click", () => {
    display.innerText += "8";
});

document.getElementById("btn-9").addEventListener("click", () => {
    display.innerText += "9";
});

document.getElementById("btn-0").addEventListener("click", () => {
    display.innerText += "0";
});

document.getElementById("btn-equals").addEventListener("click", calculate);

document.getElementById("btn-plus").addEventListener("click", () => {
    display.innerText += "+";
});

document.getElementById("btn-minus").addEventListener("click", () => {
    display.innerText += "-";
});

document.getElementById("btn-mul").addEventListener("click", () => {
    display.innerText += "*";
});

document.getElementById("btn-div").addEventListener("click", () => {
    display.innerText += "/";
});

document.getElementById("btn-left-brac").addEventListener("click", () => {
    display.innerText += "(";
});

document.getElementById("btn-right-brac").addEventListener("click", () => {
    display.innerText += ")";
});

document.getElementById("btn-backspace").addEventListener("click", () => {
    display.innerText += ">";
});

document.getElementById("btn-clear").addEventListener("click", () => {
    display.innerText = "";
});



function calculate() {
    let expression = display.innerText;

    
};