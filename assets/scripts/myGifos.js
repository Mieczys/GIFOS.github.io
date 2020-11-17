/*Variables*/
const my_gifos_gifos = document.getElementById("my_gifos_gifos");
const my_gifos_icon = "./assets/images/icon-mis-gifos-sin-contenido.svg";
const trash_img = "./assets/images/icon-trash-hover.svg";
myGifosArray = [];
myGifosString = localStorage.getItem("myGifos");

/*Render de Gif*/
renderMyGifos();

function renderMyGifos() {
  my_gifos_gifos.innerHTML = "";

  if (myGifosString == null || myGifosString == "[]") {
    my_gifos_gifos.classList.remove("grid");
    noResults(
      my_gifos_icon,
      my_gifos_gifos,
      "¡Animate a crear tu primer GIFO!"
    );
  } else {
    myGifosArray = JSON.parse(myGifosString);
    let urlMyGifos = `https://api.giphy.com/v1/gifs?ids=${myGifosArray.toString()}&api_key=${api_key}`;
    getSectionsData(
      urlMyGifos,
      my_gifos_gifos,
      trash_img,
      erase_gifo,
      erase_gifo
    );
  }
}

function erase(gifo) {
  let Array;
}

/*Eliminar gif favorito*/
function erase(gifo) {
  let arrayAux = [];
  arrayAux = JSON.parse(myGifosString);
  let index = arrayAux.indexOf(gifo);
  arrayAux.splice(index, 1);

  let newMyGifosString = JSON.stringify(arrayAux);
  localStorage.setItem("myGifos", newMyGifosString);

  location.reload();
}
