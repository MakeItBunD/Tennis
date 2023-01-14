const container = document.createElement('div')
const infoWindow = document.createElement('div')
const title = document.createElement('h1')
const subtitle = document.createElement('p')
const submit = document.createElement('button')
const start = document.createElement('button')
const soundOn = document.createElement('div')
const soundOff = document.createElement('div')
const score = document.createElement('div')
const table = document.createElement('div')
const grid = document.createElement('div')
const ball = document.createElement('div')
const rocket1 = document.createElement('div')
const rocket2 = document.createElement('div')

let dieraction, heightOfBall, speedOfRocket, 
keyOfRocket1, keyOfRocket2, timerOfRocket1, timerOfRocket2,
stepOfMove, side, isPlaying, playTimer

const tableWidth = 600 
const tableHeight = 334

let leftOfBall = 500
let topOfBall = 400

const leftOfRocket1 = 180
let topOfRocket1 = 400

const leftOfRocket2 = 820
let topOfRocket2 = 400

let scoreOfPlayer1 = 0
let scoreOfPlayer2 = 0

document.body.style.cssText = `
    background-color: #9b59b6;
    margin: 0;
`

infoWindow.style.cssText = `
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 400px;
    border: 2px solid #333;
    border-radius: 30px;
    background-color: gray;
    text-align: center;
`

title.style.cssText = `
    color: white;
    font-size: 40px;
    margin: 10px 0 10px 0;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
title.innerHTML = 'Приветствую вас!'

subtitle.style.cssText = `
    color: #ddd;
    font-size: 28px;
    margin: 10px 0 15px 0;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
subtitle.innerHTML = 'Правила простые, есть 2 ракетки:<br> 1-я ракетка(Вверх-Shift, Вниз-Ctrl)<br> 2-я ракетка(На стрелочках).<br> Задача: отбивать мяч!<br> Победитель определяется по 5 голам.<br> Если мешает звук справа сверху есть кнопка его выключения. Удачи!'

submit.style.cssText = `
    width: 200px;
    height: 50px;
    border-radius: 5px;
    background-color: #da5;
    font-size: 30px;
    color: #333;
    cursor: pointer;
`
submit.innerHTML = 'Понятно!'

container.style.cssText = `
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 800px;
    border: 2px solid #333;
    background-color: gray;
    display: none;
`

table.style.cssText = `
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(10, 31, 109);
    width: ${tableWidth}px;
    height: ${tableHeight}px;
    border: 3px solid white;
    box-sizing: border-box;
`

grid.style.cssText = `
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 2px;
    height: ${tableHeight}px;
`

start.style.cssText = `
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 50px;
    border-radius: 5px;
    background-color: #da5;
    font-size: 30px;
    color: #333;
    cursor: pointer;
`
start.innerHTML = 'СТАРТ!'

soundOn.style.cssText = `
    position: absolute;
    top: 5%;
    left: 95%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-size: 50px 50px;
    background-image: url("images/sound-on.png");
    cursor: pointer;
    border-radius: 50%;
`

soundOff.style.cssText = `
    position: absolute;
    top: 5%;
    left: 95%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-size: 50px 50px;
    background-image: url("images/sound-off.png");
    cursor: pointer;
    border-radius: 50%;
    display: none
`


score.style.cssText = `
    position: absolute;
    top: 19%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: default;
`
score.innerHTML = `${scoreOfPlayer1}:${scoreOfPlayer2}`

ball.style.cssText = `
    position: absolute;
    top: ${topOfBall}px;
    left: ${leftOfBall}px;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
`

rocket1.style.cssText = `
    position: absolute;
    top: ${topOfRocket1}px;
    left: ${leftOfRocket1}px;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 40px;
    background-color: #ac1100;
`

rocket2.style.cssText = `
    position: absolute;
    top: ${topOfRocket2}px;
    left: ${leftOfRocket2}px;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 40px;
    background-color: #ac1100;
`

container.append(start, score, soundOn, soundOff, table, grid, ball, rocket1, rocket2)
infoWindow.append(title, subtitle, submit)
document.body.prepend(container, infoWindow)


const repulse = new Audio()
repulse.preload = 'auto'
repulse.src = './sounds/repulse.mp3'

const goll = new Audio()
goll.preload = 'auto'
goll.src = './sounds/goll.mp3'

const win = new Audio()
win.preload = 'auto'
win.src = './sounds/victory.mp3'