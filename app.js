const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".buttons");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    screen.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.innerText));
});
