import { rocketMove, dataToNull, moveOfBall } from "./functions.js"

start.onclick = function() {
    if (isPlaying == true) {
        return false
    } 
    isPlaying = true
    dataToNull()
    playTimer = setInterval(moveOfBall, 4)
}

submit.onclick = function() {
    infoWindow.style.display = 'none'
    container.style.display = 'block'
}

soundOn.onclick = function() {
    soundOff.style.display = 'block'
    soundOn.style.display = 'none'
    goll.muted = true
    repulse.muted = true
    win.muted = true
}

soundOff.onclick = function() {
    soundOn.style.display = 'block'
    soundOff.style.display = 'none'
    goll.muted = false
    repulse.muted = false
    win.muted = false
}

addEventListener('keydown', function(event) {
    if (event.key == 'Shift' || event.key == 'Control') {
        if (event.key == keyOfRocket1) {
            return false
        }
        else if (event.key == 'Shift' && keyOfRocket1 == 'Control' || event.key == 'Control' && keyOfRocket1 == 'Shift') {
            clearInterval(timerOfRocket1)
        }

        keyOfRocket1 = event.key
        switch (keyOfRocket1) {
            case 'Shift':
                timerOfRocket1 = setInterval(rocketMove, 10, rocket1, -1)
                break;
        
            case 'Control':
                timerOfRocket1 = setInterval(rocketMove, 10, rocket1, +1)
                break;
        }

        addEventListener('keyup', function(event) {
            if (event.key == 'Shift' && keyOfRocket1 == 'Control' || event.key == 'Control' && keyOfRocket1 == 'Shift') {
                return false
            }
            else if (event.key == 'Shift' || event.key == 'Control') {
                clearInterval(timerOfRocket1)
            }
            else {
                return false
            }
            keyOfRocket1 = null
        })
    }

    else if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
        if (event.key == keyOfRocket2) {
            return false
        }
        else if (event.key == 'ArrowUp' && keyOfRocket2 == 'ArrowDown' || event.key == 'ArrowDown' && keyOfRocket2 == 'ArrowUp') {
            clearInterval(timerOfRocket2)
        }

        keyOfRocket2 = event.key
        switch (keyOfRocket2) {
            case 'ArrowUp':
                timerOfRocket2 = setInterval(rocketMove, 10, rocket2, -1)
                break;
        
            case 'ArrowDown':
                timerOfRocket2 = setInterval(rocketMove, 10, rocket2, +1)
                break;
        }

        addEventListener('keyup', function(event) {
            if (event.key == 'ArrowUp' && keyOfRocket2 == 'ArrowDown' || event.key == 'ArrowDown' && keyOfRocket2 == 'ArrowUp') {
                return false
            }
            else if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
                clearInterval(timerOfRocket2)
            }
            else {
                return false
            }
            keyOfRocket2 = null
        })
    }
    
    else {
        return false
    }
})