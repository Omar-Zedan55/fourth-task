var loginemail = document.querySelector("#loginemail");
var loginepass = document.querySelector("#loginepass");
var signupname = document.querySelector("#signupname");
var signupemail = document.querySelector("#signupemail");
var signuppass = document.querySelector("#signuppass");
var redalert = document.querySelector(".redalert");
var redalert2 = document.querySelector(".redalert2");
var redalert4 = document.querySelector(".redalert4");
var success = document.querySelector(".success");
var signbtn = document.querySelector(".signbtn");
var signinptnn = document.querySelector("#signinptnn");
var welcomstatement = document.querySelector("#welcomebox")

var signoutbtn = document.querySelector(".signoutbtn")
var accounts;
signoutbtn?.addEventListener("click", signoutbtnclicked)
function signoutbtnclicked() {
    open("./index.html", "_self");
}
if (localStorage.getItem("accounts") != null) {
    accounts = JSON.parse(localStorage.getItem("accounts"))
} else {
    accounts = [];
}

function signin() {
    var hh = false;
    var name;
    for (var i = 0; i < accounts.length; i++) {
        if (loginemail.value === accounts[i].email) {
            if (loginepass.value === accounts[i].password) {
                hh = true;
                name = accounts[i].name

            }
        }
    }
    if (hh) {
        open("./welcome.html", "_self");

        welcomstatement.innerHTML = `<h1 id="welcomebox">Welcome${name} </h1>`  //مش شغاله مش عارف ليه

    } else {
        redalert4.classList.remove("d-none")
    }

}

// welcomstatement.innerHTML = `<h1 id="welcomebox">Welcome${" omar "} </h1>` 
// هذا السطر يعمل خارج الاسكوب فقط ، لا ادري اشمعنا

function signup() {
    var h = false;
    for (var i = 0; i < accounts.length; i++) {
        if (signupemail.value == accounts[i].email) {
            var h = true;
            break;
        }
    }
    if (h) {
        redalert2.classList.remove("d-none")
        redalert.classList.add("d-none")
        success.classList.add("d-none")
    } else {
        if (nameregex(signupname.value, signupemail.value, signuppass.value)) {
            var user = {
                name: signupname.value,
                email: signupemail.value,
                password: signuppass.value
            }
            accounts.push(user);
            localStorage.setItem("accounts", JSON.stringify(accounts));
            success.classList.remove("d-none")
            redalert.classList.add("d-none")
            redalert2.classList.add("d-none")
            removedata()
        } else {
            redalert.classList.remove("d-none")
            success.classList.add("d-none")
            redalert2.classList.add("d-none")
        }
    }
}
function nameregex(i, j, k) {
    var regex = /^[a-zA-Z]{3,}/;
    var regex2 = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{1,}.[a-zA-Z]{1,}/gm
    var regex3 = /^[a-zA-Z]{1,}/gm
    return (regex.test(i) && regex2.test(j) && regex3.test(k));
}
function removedata() {
    signupname.value = ""; signupemail.value = ""; signuppass.value = "";
}
signinptnn?.addEventListener("click", signin)
// signbtn.addEventListener("click", signup)