/*Constantes*/
const theme_btn = document.getElementById("theme_btn");
const body = document.getElementById("body");
const logo = document.getElementById("logo");
const camera = document.getElementById("camera");
const film_reel = document.getElementById("film_reel");
const theme_link = document.getElementById("theme_link");

/*Íconos*/
const face = document.getElementById("face");
const twit = document.getElementById("twit");
const insta = document.getElementById("insta");

theme_btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (body.classList == "") {
    body.classList.add("dark");
    create_img.src = "./assets/images/CTA-crear-gifo-modo-noc.svg";
    logo.src = "./assets/images/Logo-modo-noc.svg";
    camera.src = "./assets/images/camara-modo-noc.svg";
    film_reel.src = "./assets/images/pelicula-modo-noc.svg";
    face.src= "./assets/images/icon_facebook_noc.svg"
    twit.src= "./assets/images/icon_twitter_noc.svg"
    insta.src= "./assets/images/icon_instagram_noc.svg"
    theme_link.textContent = "Modo diurno";

  } else {
    body.classList.remove("dark");
    create_img.src = "./assets/images/button-crear-gifo.svg";
    logo.src = "./assets/images/logo-mobile.svg";
    camera.src = "./assets/images/camara.svg";
    film_reel.src = "./assets/images/pelicula.svg";
    face.src= "./assets/images/icon_facebook.svg"
    twit.src= "./assets/images/icon-twitter.svg"
    insta.src= "./assets/images/icon_instagram.svg"
    theme_link.textContent = "Modo nocturno";

  }
});
