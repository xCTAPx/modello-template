export function form() {
    const name = document.querySelector(".contacts__form__wrap__item[name='name']"),
    phone = document.querySelector(".contacts__form__wrap__item[name='phone']"),
    email = document.querySelector(".contacts__form__wrap__item[name='email']"),
    button = document.querySelector(".contacts__form__item__btn__button");

let phoneNumber;

button.addEventListener("click", formCheck);

function formCheck() {
    let regMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    if(!name.value) errorName(name);
    if(!phone.value) errorName(phone);
    if(email.value) {
        if(!regMail.test(email.value)) errorName(email);
    }
    if(!regPhone.test(phone.value)) {
        errorName(phone);
    } else {
        if(document.getElementById("warnPhone") == null) return;
        document.getElementById("warnPhone").remove();
    }

    let arr = phone.value.split(""),
        res = [];
    for(num of arr) {
        if(/[0-9]/.test(num)) {
            res.push(num);
        }
    }
    phoneNumber = res.join("");
}

function errorName(elem) {
    let warn = document.createElement("div");
    let positionTop = elem.offsetTop + elem.clientHeight + 5,
        positionLeft = elem.offsetLeft;
    
    warn.style.position = "absolute";
    warn.style.top = positionTop + "px";
    warn.style.left = positionLeft + "px";
    warn.style.color = "red";
    warn.style.fontSize = 12 + "px";
    warn.style.fontFamily = "Arial";
    if(elem.getAttribute("name") == "name") {
        if(document.getElementById("warnName")) return;
        warn.textContent = "Введите своё имя";
        warn.id = "warnName";
    } else if(elem.getAttribute("name") == "email") {
        if(document.getElementById("warnMail")) return;
        warn.textContent = "Введите корректный адрес";
        warn.id = "warnMail";
    } else {
        if(document.getElementById("warnPhone")) return;
        warn.textContent = "Введите корректный номер";
        warn.id = "warnPhone";
    }

    
    document.body.appendChild(warn);
}

name.oninput = () => {
    if(document.getElementById("warnName") == null) return;
    document.getElementById("warnName").remove();
}

email.oninput = () => {
    if(document.getElementById("warnMail") == null) return;
    document.getElementById("warnMail").remove();
}

phone.oninput = () => {
    let number = phone.value;
    
    

    if(document.getElementById("warnPhone") == null) return;
    document.getElementById("warnPhone").remove();
}
}