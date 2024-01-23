import state from './state.js'
import { controls } from './elements.js';
import * as actions from './actions.js'



export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        }
        actions[action]()
    })
}

export function registerControlsMusic() {
    controlsMusic.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}
