// when you learn if-else statements come and customize the timer to display 0 before the ninutes and seconds if less than 10 and make show who is winning at a time

const home = document.getElementById("home-score")
const guest = document.getElementById("guest-score")
const newGame = document.getElementById("new-game")
const displayTime = document.getElementById("display")
// let homeText =document.getElementById("home")
// let guestText =document.getElementById("guest")
// let homeMsg = homeText.innerHTML
// let guestMsg = guestText.innerHTML

let homeScore = 0
let guestScore = 0

let seconds = 0
let minutes = 0

let displaySeconds = 0
let displayMinutes = 0

let timer = null
let startTime = 0
let elapsedTime = 0
let isRunning = false


function addOneToHome(){
    homeScore += 1
    home.textContent = homeScore
}
function addTwoToHome(){
    homeScore += 2
    home.textContent = homeScore
}
function addThreeToHome(){
    homeScore += 3
    home.textContent = homeScore
}
function addOneToGuest(){
    guestScore += 1
    guest.textContent = guestScore
}
function addTwoToGuest(){
    guestScore += 2
    guest.textContent = guestScore
}
function addThreeToGuest(){
    guestScore += 3
    guest.textContent = guestScore
}
function newGamePlay(){
    reset() 
    homeScore = 0
    guestScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore    
    seconds = 0
    minutes = 0
    startTime = Date.now() - elapsedTime
    timer = setInterval(updateTime, 1000)
    isRunning = true
}

function updateTime(){
//    const currentTime = Date.now()
//    elapsedTime = currentTime - startTime
   
   //et hours = Math.floor(elapsedTime)
//    minutes = Math.floor(elapsedTime/60)
//    seconds = Math.floor(elapsedTime%60)
   
   seconds++
   if (seconds/60 === 1) {
    seconds = 0
    minutes++
   }
   
   if (seconds < 10) {
    displaySeconds = `0${seconds}`
   }
   else {
    displaySeconds = seconds
   }
   if (minutes < 10) {
    displayMinutes = `0${minutes}`
   }
   else {
    displayMinutes = minutes
   }
   
   if (displayMinutes === 24) {
    pause()
   }
   else if (displayMinutes === 48) {
     endGame()
     // displayTime.textContent += "Time Out"
   }
   displayTime.textContent =`${displayMinutes}:${displaySeconds}`
}

function pause() {
    if (isRunning) {
        clearInterval(timer)
        elapsedTime = Date.now() - startTime
        isRunning = false
    }
}
function continueGame() {
    if (!isRunning) {
     timer = setInterval(updateTime, 1000)
     isRunning = true
     }
}
function reset() {
        homeScore = 0
        guestScore = 0
        home.textContent = homeScore
        guest.textContent = guestScore 
        clearInterval(timer)
        startTime = 0
        elapsedTime = 0
        
        displayTime.textContent = `00:00`
        }

function endGame() { 
        clearInterval(timer)
        elapsedTime = Date.now() - startTime
        isRunning = false
        timer = null
        }
// newGame.addEventListener('click', () => {
//      startWatch()
//      timerInterval = setInterval(startWatch, 1000)
// })
// newGame.addEventListener ('click', startWatch() {
    
// })
// window.addEventListener('load', () => {
//     startCountdown()
//     timerInterval = setInterval(startCountdown, 1000)
// })


// window.addEventListener('load', () => {
//    if (homeScore > guestScore) {
//     homeMsg += "⭐"
//     }
//     else if (homeScore < guestScore) {
//         guestMsg += "⭐"
//     }
// })