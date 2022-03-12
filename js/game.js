const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

const choiceBtns = document.querySelectorAll(".game__btn");
const game = document.querySelector(".game");
const results = document.querySelector(".results");
const userChoose = document.querySelector(".newChoose");
const houseChoose = document.querySelector(".pageChoose");
const scorePoints = document.querySelector(".score__points h2");
const playAgainCtn = document.querySelector(".again");
const playAgainRes = document.querySelector(".again h1");
const playBtn = document.getElementById("play");

let score = 0;

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //data-set
    const choiceName = btn.dataset.choice;

    //obtenemos el objeto correspondiente a CHOICENAME
    const choice = CHOICES.find((choice) => choice.name == choiceName);

    //Opcion random generada por el servidor
    let pageChoose = CHOICES[random()];

    //desplegamos los nombres de choice y pagechoice en un contenedor
    displayResults(choice, pageChoose);

    //almacenamos en una variable un array, que almacena el score y la respuesta final de tu juego
    let res = winOrLose(choice, pageChoose);

    //Mostramos todo
    setTimeout(() => {
      scorePoints.innerHTML = res[1];
    }, 1500);

    setTimeout(() => {
      playAgainCtn.classList.add("hidden");
      playAgainRes.innerHTML = `    
      ${res[0]}
    `;
    }, 1700);

    game.classList.add("hidden");
    results.classList.add("hidden");
  });
});

playBtn.addEventListener("click", () => {
  game.classList.remove("hidden");
  results.classList.remove("hidden");
  playAgainCtn.classList.remove("hidden");

  houseChoose.dataset.choice = "";
  houseChoose.innerHTML = "";
});

function winOrLose(obj1, obj2) {
  let content = [];
  let finalRes = "";

  if (obj1.name == obj2.name) {
    finalRes = "Tie";
  } else if (obj1.beats == obj2.name) {
    finalRes = "You win";
    score++;
  } else {
    finalRes = "You lose";
    if (score == 0) {
      score = 0;
    } else {
      score--;
    }
  }

  content[0] = finalRes;
  content[1] = score;

  return content;
}

function displayResults(obj1, obj2) {
  userChoose.dataset.choice = obj1.name;
  userChoose.innerHTML = `<div class="res" data-choice="${obj1.name}">
        <img src="images/icon-${obj1.name}.svg" alt="" />
      </div>`;

  setTimeout(() => {
    houseChoose.dataset.choice = obj2.name;
    houseChoose.innerHTML = `<div class="res" data-choice="${obj2.name}">
              <img src="images/icon-${obj2.name}.svg" alt="" />
            </div>`;
  }, 1100);
}
function random() {
  return Math.floor(Math.random() * CHOICES.length);
}
