let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
let monthnames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = monthnames[d.getMonth()];
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById("currentdate").innerHTML = fulldate;


// try {
//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric"
//     };
//     document.getElementById(
//         "currentdate"
//     ).textContent = newDate().lastModified("en-US", options);
// }