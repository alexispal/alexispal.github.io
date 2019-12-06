//Current Date//
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

//Images Lazy Loading
const loadImages = document.querySelectorAll("[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

function firstLoadImg(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.onload = () => {
        img.removeAttribute("data-src");
    }
};

const imgObserve = new IntersectionObserver((entries, imgObserve) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            firstLoadImg(entry.target);
            imgObserve.unobserve(entry.target);
        }
    })
}, imgOptions);

loadImages.forEach(image => {
    imgObserve.observe(image);
});