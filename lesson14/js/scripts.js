//Hamburger Menu//
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// //TEMPLE INFO//
// const requestURL = 'https://www.churchofjesuschrist.org/temples/list?lang=eng';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//     const towns = jsonObject['temples'];

//     for (let i = 0; i < temples.length; i++ ) {
//       if (temples[i].name == "Houston Texas Temple" ||
//           temples[i].name == "Mexico City Mexico Temple" ||
//           temples[i].name == "Idaho Falls Idaho Temple" ||
//           temples[i].name == "Monterrey Mexico Temple")
//       {     
//         let card = document.createElement('section'); 
//         let allClosures = document.createElement('div');
//         let helpfulInformation = document.createElement('div');
//         let pageTitle = document.createElement('h3');
//         let location = document.createElement('p');
//         let telephone = document.createElement('p');
//         let hasEmail = document.createElement('p');
//         let history = document.createElement('p');
//         let image = document.createElement('img');

//         templeInfo.className = "temple-info";
//         image.className = "temple-image";
//         name.textContent = temples[i].pageTitle;
//         motto.textContent = temples[i].location;
//         motto.className = "location";
//         location.textContent = 'Address: ' + temples[i].location;
//         telephone.textContent = 'Telephone: ' + temples[i].telephone;
//         hasEmail.textContent = 'E-mail: ' + temples[i].hasEmail;
//         photo.setAttribute('src', "images/" + temples[i].image);
//         photo.setAttribute('alt', 'picture of ' + temples[i].name + ', Idaho');

//         townInfo.appendChild();
//         townInfo.appendChild(pageTitle);
//         townInfo.appendChild(location);
//         townInfo.appendChild(telephone);
//         townInfo.appendChild(hasEmail);
//         townImage.appendChild();
//         card.appendChild(templeInfo);
//         card.appendChild(image);

//         document.querySelector('div.temple-data').appendChild(card);
//       }
//     }
//   });

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