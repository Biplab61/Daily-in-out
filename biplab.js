// Disable Right Click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
},false)

// Disable Shortcut Keys
document.addEventListener("keydown",function(e){
    if(e.ctrlKey || e.keycode==123){
        e.stopPropagation();
        e.preventDefault();
    }
});

// Login Details
function myPage() {
    var un = document.getElementById("Username").value;
    var pw = document.getElementById("Userpass").value;
    setTimeout(function () {
        if (un == "Biplab" && pw == "Biplab@12") {
            location.replace("biplab.html");
        }
        else {
            alert("Invalid UserName and Password........!   Please try Again........");
        }
    }, 1100);
}


// Money in Form
const scriptIn = 'https://script.google.com/macros/s/AKfycbwBulnbTiCj8Q1K4NJqKAlaViuZoz6GVsJ7IvoUkWgQAQcAYYa3-x09Ir8pjIDGvHXFKQ/exec'
const formIn = document.forms['in']

formIn.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptIn, { method: 'POST', body: new FormData(formIn) })
        .then(response => alert("Thank you Biplab..... Money In  our Data has Been Submitted Successfully in Our Database.....!"))
        .catch(error => console.error('Error!', error.message))
})


// Money Out Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxECQ1rggbdHGVUHf9atmZ27h83pDQHmjHj7DeWeLi8LJqSmNGbEkfABp75NOK2oHXb/exec'
const form = document.forms['out']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you Biplab..... Money Out  Your Data has Been Submitted Successfully in Our Database.....!"))
        .catch(error => console.error('Error!', error.message))
})


function view() {
    location.replace("view_details.html");
}

//  Disable Submit Button
function dis() {
    setTimeout(function () {
        document.getElementById("disable").disabled = true;
    }, 500);
    setTimeout(function () {
        document.getElementById("disable").disabled = false;
    }, 20000);
}


//   Date Checker and Picker Js

var date = new Date();
var tdate = date.getDate();
var mintDate = date.getDate() - 1;
var month = date.getMonth() + 1;
if (tdate < 10) {
    tdate = '0' + tdate;
}
if (mintDate < 10) {
    mintDate = '0' + mintDate;
}
if (month < 10) {
    month = '0' + month;
}
var year = date.getFullYear();

var minDate = year + '-' + month + '-' + tdate;
var lowDate = year + '-' + month + '-' + mintDate;
document.getElementById("Date-Checker-Picker").setAttribute('min', lowDate);
document.getElementById("Date-Checker-Picker").value = minDate;
document.getElementById("Date-Checker-Picker").setAttribute('max', minDate);
//    Money Out
document.getElementById("Date-Checker-Picker-out").setAttribute('min', lowDate);
document.getElementById("Date-Checker-Picker-out").value = minDate;
document.getElementById("Date-Checker-Picker-out").setAttribute('max', minDate);




let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});