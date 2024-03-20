let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let string = "";
buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        let val = e.target.innerText;
        if (val == "=") {
            string = eval(string);
            display.value = string;
        } else if (val == "AC") {
            string = "";
            display.value = string;
        } else if (val == "DEL") {
            string = string.slice(0, -1);
            display.value = string;
        } else {
            string += val;
            display.value = string;
        }
    })

});
