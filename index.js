window.addEventListener("load",startGame);

var levels = {
    Easy: 5,
    Medium: 3,
    Hard: 2,
    "Very Easy": 7
}
// var currentLevel = levels.Medium;
// var time = currentLevel;
// var score = 0;
// var isGamePlaying; 

var openBtnEl = document.querySelector("#open")
var closeBtnEl = document.querySelector("#close")
var menuConEl = document.querySelector("nav ul")
var levelsEl = document.querySelectorAll("nav ul li")
var input = document.querySelector(".main-input")
var currentWord = document.querySelector(".current-word")
var msgEl = document.querySelector(".msg")
var counterEl = document.querySelector(".counter")
var scoreEl = document.querySelector(".score")
var levelTimeEl = document.querySelector(".game-level-time")

openBtnEl.addEventListener("click",addOpenClass)
closeBtnEl.addEventListener("click",addCloseClass)

function addOpenClass(e){
    e.preventDefault();
    // if(menuConEl.classList === "show"){
    //     menuConEl.classList.remove("show")
    // }
    // else{
    menuConEl.classList.add("show")
    openBtnEl.style.display = "none";
    closeBtnEl.style.display = "block";
    // }
    
}
function addCloseClass(e){
    e.preventDefault();
    menuConEl.classList.remove("show")
    openBtnEl.style.display = "block";
    closeBtnEl.style.display = "none";
}
for(let eachLevel of levelsEl){
    console.log(eachLevel)
    eachLevel.addEventListener("click", getLevelTime)
    
}
var levelChosen = 5;
var currentLevel = levels.Easy;
var time = currentLevel;


// var time = currentLevel;
var score = 0;
var isGamePlaying; 

const words = [
    "share",
    "love",
    "ode",
    "hat",
    "river",
    "lucky",
    "status",
    "generate",
    "stubborn",
    "runaway",
    "joke",
    "shut",
    "hero",
    "developer",
    "develop",
    "javascript",
    "coding",
    "web",
    "dance",
    "shake",
    "input",
    "establishment",
    "cocktail",
    "nutrition",
    "food",
    "bread",
    "water",
    "mouse",
    "matter",
    "echo",
    "investigate",
    "coronavirus",
    "siblings",
    "revolver",
];
function getLevelTime(e){
    console.log(e.target.innerHTML)
    console.log(levels[e.target.innerHTML])
    
    menuConEl.classList.remove("show")
    openBtnEl.style.display = "block";
    closeBtnEl.style.display = "none";
    // e.target.style.background = "red";
    levelChosen = levels[e.target.innerHTML];
    console.log(levelChosen)
    levelTimeEl.innerHTML = levelChosen;
    currentLevel = levels[e.target.innerHTML];
    console.log(currentLevel)
    time = currentLevel;
    score = 0;
}

function startGame(){
    console.log("init")
    loadWord(words);
    input.addEventListener("input", checkWord)
    setInterval(countDown, 1000);
    setInterval(checkStatusGame, 50)
}
function checkWord(){
    if(matchWords()){
        isGamePlaying = "yes";
        time = currentLevel + 1;
        loadWord(words)
        input.value = "";
        score++;
    }
    if(score === -1){
        scoreEl.innerHTML = 0;
    }else{
        scoreEl.innerHTML = score;
    }
    
}
function matchWords(){
    if(input.value.trim().toLowerCase() === currentWord.innerHTML.toLowerCase()){
        msgEl.innerHTML = "correct";
        return true;
    }else{
    msgEl.innerHTML = "";
        return false
    }
}

function loadWord(words){
    var randomWord = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomWord]
}
function countDown(){
    if(time > 0){
        time--
    }else if(time === 0){
        isGamePlaying = "no";
    }
    counterEl.innerHTML = time;
}
function checkStatusGame(){
    if(isGamePlaying === "no" && time === 0){
       msgEl.innerHTML = `<p class= "msg over" >Game Over!!!</p>`;
       score = -1
    }
}
