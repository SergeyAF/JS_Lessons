const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const score = document.querySelector(".score");
const resultScore = document.querySelector(".result_score");
const moleCounter = document.querySelector(".mole_counter");
const startBtn = document.querySelector(".btn_start");
const warning = document.querySelector(".name_warning");
const currentName = document.querySelector("#nameInput");

const resultWindow = document.querySelector("#result_window");
const closeResultBtn = document.querySelector(".btn_result-close");

const options = document.querySelectorAll(".options_wrapper");
const highScoreWindow = document.querySelector("#high_score");
const openHighScoreBtn = document.querySelector(".hScore_btn");
const closeHighScoreBtn = document.querySelector(".btn_hScore-close");

const diffLevelSelect = document.querySelector("#selDifficulty");

const HighScoreTable = document.querySelector(".hScore_content");

let isPlaying = false;
let countHitMoles = 0;
let countShowedMoles = 0;
let minTime = 1000;
let maxTime = 2000;

closeResultBtn.addEventListener("click", () => {
  resultWindow.classList.add("d-n");
});

openHighScoreBtn.addEventListener("click", () => {
  highScoreWindow.classList.remove("d-n");
});

closeHighScoreBtn.addEventListener("click", () => {
  highScoreWindow.classList.add("d-n");
});

diffLevelSelect.addEventListener("change", selectDifficult);

startBtn.addEventListener("click", startGame);

moles.forEach(mole => {
  mole.addEventListener("click", catchMole);
});

function selectDifficult() {
  if (diffLevelSelect.value === "Easy") {
    minTime = 1000;
    maxTime = 1500;
  }
  if (diffLevelSelect.value === "Normal") {
    minTime = 600;
    maxTime = 900;
  }
  if (diffLevelSelect.value === "Hard") {
    minTime = 400;
    maxTime = 700;
  }
}

function catchMole() {
  countHitMoles++;
  score.textContent = countHitMoles;
  resultScore.textContent = countHitMoles;
  this.parentElement.classList.remove("up");
}
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const id = Math.floor(Math.random() * holes.length);
  const hole = holes[id];
  return hole;
}

function showMole() {
  countShowedMoles++;
  moleCounter.textContent = countShowedMoles;
  const time = randomTime(minTime, maxTime);
  const hole = randomHole(holes);

  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (isPlaying) showMole();
    else setTimeout(finishGame, maxTime);
  }, time);
}

function startGame() {
  countHitMoles = 0;
  countShowedMoles = 0;
  score.textContent = "";
  resultScore.textContent = countHitMoles;
  if (currentName.value === "") {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
    options.forEach(node => (node.style.visibility = "hidden"));
    showMole();
    isPlaying = true;
    setTimeout(() => {
      isPlaying = false;
    }, 5000);
  }
}

function finishGame() {
  resultWindow.classList.remove("d-n");
  options.forEach(node => (node.style.visibility = "visible"));
  const list = JSON.parse(localStorage.getItem("highScore")) || [];
  list.push({
    name: currentName.value,
    count: countHitMoles,
    difficult: diffLevelSelect.value
  });
  if (list.length > 5) {
    list.shift();
  }
  localStorage.setItem("highScore", JSON.stringify(list));
  renderHighScore(list);
}

function renderHighScore(array) {
  HighScoreTable.innerHTML = "";
  const table = document.createElement("table");
  table.classList.add("usr_table");
  table.cellSpacing = 0;
  table.cellPadding = 0;
  HighScoreTable.prepend(table);
  const tbody = document.createElement("tbody");
  tbody.insertAdjacentHTML(
    "beforeend",
    `
        <tr>
            <td class="bold" witdh="20px" align="center">Level</td>
            <td class="bold">Name</td>
            <td class="bold">Score</td>
        </tr>
        `
  );
  array.forEach(user => {
    tbody.insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${user.difficult}</td>
            <td>${user.name}</td>
            <td>${user.count}</td>
        </tr>
        `
    );
  });
  table.append(tbody);
}

renderHighScore(JSON.parse(localStorage.getItem("hiScore")) || []);
