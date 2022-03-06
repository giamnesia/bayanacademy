const toggleBtn = document.querySelector("#toggle-btn");
const toggleMenu = document.querySelector(".toggle-menu");
const toggleInclude = document.querySelector(".toggle-include");
const card = document.querySelector(".card");
const images = document.querySelector(".images");
const nav = document.querySelector("nav");
const slide = document.querySelector(".slideshow-container");
const sample = document.querySelector(".all");
console.log(sample);
toggleBtn.addEventListener("click", () => {
  toggleMenu.classList.toggle("show");
  toggleInclude.classList.toggle("show");
});

const events = [
  {
    name: "GovTech: Co-Designing Solutions With The Government",
    time: "May 11, 2020 ▪ 02:00 PM - 03:30 PM",
    desc: "Zoom Webinar",
    img: "https://www.bayanacademy.org/panel/_files/calendar/bd029_govtech.png",
  },
  {
    name: "Introductory Meeting - Junior and Senior High School Teachers",
    time: "Oct 30, 2019 ▪ 01:00 PM - 05:00 PM",
    desc: "Ateneo Graduate School of Business",
    img: "https://www.bayanacademy.org/panel/_files/calendar/25b63_ateneo_logo_2.png",
  },
  {
    name: "Revalida 3 - RAMCAR Battery Group Cadet Engineering Program (Module 3: Leadership and Strategic Management Skills)",
    time: "Nov 29, 2019 ▪ 08:00 AM - 05:00 PM",
    desc: "RAMCAR Center, 80 Don A. Roces Ave, Diliman, Quezon City",
    img: "https://www.bayanacademy.org/panel/_files/calendar/8fbae_ramcar.jpg",
  },
  {
    name: "Basic Programming Using Python Part 2 (Batch 2)",
    time: "Jun 01, 2020 ▪ 09:00 AM - 01:00 PM",
    desc: "Online Training",
    img: "https://www.bayanacademy.org/panel/_files/calendar/4f2d4_programming.png",
  },
];
let listEvents = events
  .map((item) => {
    return ` <div class='cards flexRow'>
    <div class='cards-img'>
    <img src=${item.img} />
    </div>
    <div class='cards-text'>
    <h3>${item.name}</h3>
    <p>${item.time}</p>
    <p>${item.desc}</p>

    </div>
  </div>`;
  })
  .join("");
sample.innerHTML = listEvents;

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

const items = [
  {
    name: "BEST",
    desc: "Bayan Educational Systems and Technologies",
    btn: "Read More",
    img: "https://www.bayanacademy.org/panel/_files/modbuild/best1.png",
    color: "#90187E",
  },
  {
    name: "CREST",
    desc: "Consultancy and Research Technologies",
    btn: "Read More",
    img: "https://www.bayanacademy.org/panel/_files/modbuild/crest.png",
    color: "#184990",
  },
  {
    name: "TOP",
    desc: "Training of Professionals",
    btn: "Read More",
    img: "	https://www.bayanacademy.org/panel/_files/modbuild/top.png",
    color: "#CB2131",
  },
  {
    name: "GREAT",
    desc: "Grassroots Entrepreneurship and Technologies",
    btn: "Read More",
    img: "	https://www.bayanacademy.org/panel/_files/modbuild/great.png",
    color: "#1B9018",
  },
  {
    name: "AEW",
    desc: "Awards, Expositions and Webinars",
    btn: "Read More",
    img: "	https://www.bayanacademy.org/panel/_files/modbuild/apex_icon.png",
    color: "#184990",
  },
];

const logos = [
  "https://www.bayanacademy.org/panel/_files/modbuild/oxfam_logo_vertical_green_rgb.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/hla_logo.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/british_council.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/save_the_children.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/ilo.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/ateneo1.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/qca_logo.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/paref_logo.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/bayanedgelogo.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/final_kch_enhanced_logo.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/ffp.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/zuellig.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/coop-natcco-logo.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/norweigan_alliance.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/asa.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/search-logo-white-(for-web).jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/cct_logo.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/mcpi_logo.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/eclof_logo.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/aboitiz_foundation.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/02v.colored-with_subhead1.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/citifoundation.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/fwd.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/accenture.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/revised_phoenix_petroleum_logo_on_white_bkgd-05.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/copy_of_copy_of_alkfi_nov2016.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/rex.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/bpi-foundation-logo-1-line.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/jpm_logo.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/fges_logo.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/praxis.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/masbate.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/facebook-06-2015-blue-on-white.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/sky.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/fil.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/ramcar-logo.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/logo-11.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/download.png",
  "http://www.bayanacademy.org/panel/_files/modbuild/tesda1.gif",
  "http://www.bayanacademy.org/panel/_files/modbuild/deped-logo.jpg",
  "http://www.bayanacademy.org/panel/_files/modbuild/pcw.png",
];

let listItems = items
  .map((item) => {
    return `  <div>
    <h2>${item.name}</h2>
     <img src=${item.img} alt=""  style='background-color:${item.color}'>
    <p>${item.desc}</p>
    <button>${item.btn}</button>
  </div>`;
  })
  .join("");

for (let i = 0; i < logos.length; i++) {
  images.innerHTML += `<img src="${logos[i]}" alt="">`;
}
card.innerHTML = listItems;

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
};

const slideImg = [
  "https://www.bayanacademy.org/panel/_files/modbuild/hiring_1.jpg",
  "https://www.bayanacademy.org/panel/_files/modbuild/eam_poster-banner1.jpg",
  "https://www.bayanacademy.org/panel/_files/modbuild/donation_drive_slider_4.jpg",
  "https://www.bayanacademy.org/panel/_files/modbuild/homebannerv21424x693.jpg",
  "https://www.bayanacademy.org/panel/_files/modbuild/sulong_trabaho_slider.jpg",
  "https://www.bayanacademy.org/panel/_files/modbuild/eskwela_3.jpg",
  "https://www.bayanacademy.org/panel/_files/modbuild/f3.jpg",
];

//SLIDE

for (let i = 0; i < slideImg.length; i++) {
  slide.innerHTML += ` <div class="mySlides fade">
  <img
    src=${slideImg[i]}
  />
  </div>`;
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000);
}
