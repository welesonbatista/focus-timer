import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function pause() {

    state.isRunning = false
    document.documentElement.classList.remove('running')
    state.minutes = Number(document.querySelector('#minutes').textContent)
    state.seconds = Number(document.querySelector('#seconds').textContent)
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    state.minutes = 0
    state.seconds = 0
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function plus() {
    state.minutes = Number(document.querySelector('#minutes').textContent) + 5
    if (state.minutes > 60) {
        state.minutes = 60
    }
    state.seconds = Number(document.querySelector('#seconds').textContent)
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function less() {
    state.minutes = Number(document.querySelector('#minutes').textContent) - 5
    if (state.minutes < 0) {
        state.minutes = 1
    }
    state.seconds = Number(document.querySelector('#seconds').textContent)
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function florest() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.florest.play()
        return
    }

    sounds.florest.pause()
}

export function rain() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.rain.play()
        return
    }

    sounds.rain.pause()
}

export function coffee() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.coffee.play()
        return
    }

    sounds.coffee.pause()
}

export function fire() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.fire.play()
        return
    }

    sounds.fire.pause()
}
