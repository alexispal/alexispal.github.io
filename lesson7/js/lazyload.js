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

//Images//
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold:0,
    rootMargin: "0px 0px 25px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
  };

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
}, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
      });
    }
    else { 
        imagesToLoad.forEach((img) => {
          loadImages(img);
        });
    }