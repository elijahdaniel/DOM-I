const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelectorAll('nav a');
nav[0].text = siteContent["nav"]["nav-item-1"];
nav[1].text = siteContent["nav"]["nav-item-2"];
nav[2].text = siteContent["nav"]["nav-item-3"];
nav[3].text = siteContent["nav"]["nav-item-4"];
nav[4].text = siteContent["nav"]["nav-item-5"];
nav[5].text = siteContent["nav"]["nav-item-6"];

let h1 = document.querySelector(".cta h1");
h1.innerHTML = siteContent["cta"]["h1"];

let btn = document.querySelector(".cta button");
btn.innerHTML = siteContent["cta"]["button"];

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

let titles = document.querySelectorAll("h4");
titles[0].innerHTML = siteContent["main-content"]["features-h4"];
titles[1].innerHTML = siteContent["main-content"]["about-h4"];
titles[2].innerHTML = siteContent["main-content"]["services-h4"];
titles[3].innerHTML = siteContent["main-content"]["product-h4"];
titles[4].innerHTML = siteContent["main-content"]["vision-h4"];
titles[5].innerHTML = siteContent["contact"]["contact-h4"];

let para = document.querySelectorAll("p");
para[0].innerHTML = siteContent["main-content"]["features-content"];
para[1].innerHTML = siteContent["main-content"]["about-content"];
para[2].innerHTML = siteContent["main-content"]["services-content"];
para[3].innerHTML = siteContent["main-content"]["product-content"];
para[4].innerHTML = siteContent["main-content"]["vision-content"];
para[5].innerHTML = siteContent["contact"]["address"];
para[6].innerHTML = siteContent["contact"]["phone"];
para[7].innerHTML = siteContent["contact"]["email"];
para[8].innerHTML = siteContent["footer"]["copyright"];


let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
