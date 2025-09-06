const emojis = [
  "./src/assets/images/anna.jpg",
  "./src/assets/images/anna.jpg",
  "./src/assets/images/Ariel.jpg",
  "./src/assets/images/Ariel.jpg",
  "./src/assets/images/Aurora.jpg",
  "./src/assets/images/Aurora.jpg",
  "./src/assets/images/Belle.jpg",
  "./src/assets/images/Belle.jpg",
  "./src/assets/images/Cinderella.jpg",
  "./src/assets/images/Cinderella.jpg",
  "./src/assets/images/Elsa.jpg",
  "./src/assets/images/Elsa.jpg",
  "./src/assets/images/Jasmine.jpg",
  "./src/assets/images/Jasmine.jpg",
  "./src/assets/images/Merida.jpg",
  "./src/assets/images/Merida.jpg",
  "./src/assets/images/Moana.jpg",
  "./src/assets/images/Moana.jpg",
  "./src/assets/images/Mulan.jpg",
  "./src/assets/images/Mulan.jpg",
  "./src/assets/images/Pocahontas.jpg",
  "./src/assets/images/Pocahontas.jpg",
  "./src/assets/images/Rapunzel.jpg",
  "./src/assets/images/Rapunzel.jpg",
  "./src/assets/images/SnowWhite.jpg",
  "./src/assets/images/SnowWhite.jpg",
  "./src/assets/images/Tiana.jpg",
  "./src/assets/images/Tiana.jpg",
  "./src/assets/images/Alice.jpg",
  "./src/assets/images/Alice.jpg",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";

  // cria a imagem
  let img = document.createElement("img");
  img.src = shuffleEmojis[i];
  img.alt = "Carta do jogo da memória";
  img.width = "95";

  // insere a imagem dentro da div
  box.appendChild(img);

  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}


function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }

  console.log(openCards);
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu !");
  }
}
