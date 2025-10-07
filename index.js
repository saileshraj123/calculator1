let display = document.querySelector(".display");
let one = document.querySelector(".btn.one");
let two = document.querySelector(".btn.two");
let three = document.querySelector(".btn.three");
let four = document.querySelector(".btn.four");
let five = document.querySelector(".btn.five");
let six = document.querySelector(".btn.six");
let seven = document.querySelector(".btn.seven");
let eight = document.querySelector(".btn.eight");
let nine = document.querySelector(".btn.nine");
let zero = document.querySelector(".btn.zero");
let dot = document.querySelector(".btn.dot");
let add = document.querySelector(".btn.add");
let minus = document.querySelector(".btn.minus");
let divide = document.querySelector(".btn.divide");
let multiply = document.querySelector(".btn.multiply");
let equal = document.querySelector(".btn.equal");
let del = document.querySelector(".btn.delete");
let ac = document.querySelector(".btn.ac");
let percent = document.querySelector(".btn.percent");
let back = document.querySelector(".btn.back");

ac.addEventListener("click", function () {
    display.innerText = "START";
    display.style.backgroundColor = "aliceblue";
})

del.addEventListener("click", function () {
    if (display.innerText != "START" && display.innerText != "ALERT") {
        display.innerText = display.innerText.slice(0, -1);
    }
})

back.addEventListener("click", function () {
    display.innerText = "ALERT";
    display.style.backgroundColor = "red";
})




one.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "1";
});
two.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "2";
});
three.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "3";
});
four.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "4";
});
five.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "5";
});
six.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "6";
});
seven.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "7";
});

eight.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "8";
});
nine.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "9";
});
zero.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "0";
});

add.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "+";
});
minus.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "-";
});
multiply.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "*";
});
divide.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "/";
});
dot.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += ".";
});
percent.addEventListener("click", function () {
    if (display.innerText == "START") {
        display.innerText = "";
    }
    display.innerText += "%";
});






function sum(a, b) {
    return Number(a) + Number(b);
}
function min(a, b) {
    return Number(a) - Number(b);
}
function mul(a, b) {
    return Number(a) * Number(b);
}
function div(a, b) {
    return Number(a) / Number(b);
}




equal.addEventListener("click", function () {
    let str = display.innerText;
    if (str.includes("+")) {
        let leftPart = str.split("+")[0];
        let rightPart = str.split("+")[1];
        let result = sum(leftPart, rightPart);
        display.innerText = result;
    }
    if (str.includes("-")) {
        let leftPart = str.split("-")[0];
        let rightPart = str.split("-")[1];
        let result = min(leftPart, rightPart);
        display.innerText = result;
    }
    if (str.includes("*")) {
        let leftPart = str.split("*")[0];
        let rightPart = str.split("*")[1];
        let result = mul(leftPart, rightPart);
        display.innerText = result;
    }
    if (str.includes("/")) {
        let leftPart = str.split("/")[0];
        let rightPart = str.split("/")[1];
        let result = div(leftPart, rightPart);
        display.innerText = result;
    }
    if (str.includes("%")) {
        let leftPart = str.split("%")[0];
        let rightPart = str.split("%")[1];
        let result = Number(leftPart) * 0.01;
        display.innerText = result;
    }
})


















