export function rocketMove(rocket, coof) {
    switch(true) {
        case rocket == rocket1 && topOfRocket1 < 252 && coof == -1 || rocket == rocket1 && topOfRocket1 > 547 && coof == +1:
            clearInterval(timerOfRocket1)
            break

        case rocket == rocket2 && topOfRocket2 < 252 && coof == -1 || rocket == rocket2 && topOfRocket2 > 547 && coof == +1:
            clearInterval(timerOfRocket2)
            break
        
        case rocket == rocket1: 
            topOfRocket1 += speedOfRocket * coof
            rocket1.style.top = `${topOfRocket1}px`
            break

        case rocket == rocket2: 
            topOfRocket2 += speedOfRocket * coof
            rocket2.style.top = `${topOfRocket2}px`
            break
    }
}

export function moveOfBall() {
    leftOfBall += dieraction
    topOfBall += heightOfBall
    ball.style.left = `${leftOfBall}px`
    ball.style.top = `${topOfBall}px`

    switch (true) {
        case leftOfBall - 12 < leftOfRocket1 && leftOfBall - 12 > leftOfRocket1 - 10 && topOfBall < topOfRocket1 + 25 && topOfBall > topOfRocket1 - 25:
            repulsedBall(1, 'left')
            break

        case leftOfBall + 12 > leftOfRocket2 && leftOfBall + 12 < leftOfRocket2 + 10  && topOfBall < topOfRocket2 + 25 && topOfBall > topOfRocket2 - 25:
            repulsedBall(-1, 'right')
            break

        case leftOfBall < leftOfRocket1 - 30:
            scoreOfPlayer2++
            scoreTable()
            break

        case leftOfBall > leftOfRocket2 + 30:
            scoreOfPlayer1++
            scoreTable()
            break
    }

    scoreOfPlayer1 == 5 ? victory('Левый') : scoreOfPlayer2 == 5 ? victory('Правый') : false
}

export function dataToNull() {
    side = ''
    leftOfBall = 500
    topOfBall = 400
    stepOfMove = 0
    heightOfBall = 0
    topOfRocket1 = 400
    topOfRocket2 = 400
    speedOfRocket = 1
    dieraction = Math.random() > 0.5 ? -1 : 1
    rocket1.style.top = `${topOfRocket1}px`
    rocket2.style.top = `${topOfRocket2}px`
}

function victory(side) {
    infoWindow.style.height = '200px'
    title.innerHTML = 'Поздравляю!'
    subtitle.innerHTML = `${side} победил`
    infoWindow.style.display = 'block'
    submit.innerHTML = 'Ещё разочек'
    isPlaying = true
    win.play()
    submit.onclick = function() {
        dataToNull()
        scoreOfPlayer1 = 0
        scoreOfPlayer2 = 0
        isPlaying = false
        infoWindow.style.display = 'none'
        score.innerHTML = `${scoreOfPlayer1}:${scoreOfPlayer2}`
        ball.style.left = `500px`
        ball.style.top = `400px`
    }
}

function scoreTable() {
    score.innerHTML = `${scoreOfPlayer1}:${scoreOfPlayer2}`
    clearInterval(playTimer)
    goll.play()
    isPlaying = false
}

function repulsedBall(coof, sideOfBall) {
    if (side == sideOfBall) {
        return false
    } 
    else {
        side = sideOfBall
    }
    dieraction = coof * (1 + stepOfMove)
    let min = (topOfBall - 245) / 600 * Math.abs(dieraction) * -1
    let max = (330 - (topOfBall - 220)) / 600 * Math.abs(dieraction)
    heightOfBall = Math.random() * (max - min) + min
    repulse.play()
    stepOfMove += 0.1
    speedOfRocket += 0.1
}