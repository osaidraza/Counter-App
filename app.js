let countForm = document.querySelectorAll(".count-input");
let msgEl = document.querySelectorAll(".count-msg");
let errorEl = document.querySelectorAll(".count-error");


function addNumber() {
    let formVal = countForm[0].value;
    displayMsg(formVal, "+");
}



function minusNumber() {
    let formVal = countForm[0].value;
    displayMsg(formVal, "-");
}



function displayMsg(formValue, operater) {
    if (isNaN(formValue)) {
        errorEl[0].innerHTML = "You must enter a number";
        errorEl[0].style.borderWidth = "1px";
    }
    else if (operater === "-") {
        msgEl[0].innerHTML = Number(msgEl[0].innerHTML) - Number(formValue);
        removeErr();
    }
    else if (operater === "+") {
        msgEl[0].innerHTML = Number(msgEl[0].innerHTML) + Number(formValue);
        removeErr();
    }

}



function removeErr() {
    errorEl[0].innerHTML = "";
    errorEl[0].style.borderWidth = "0px";
}













