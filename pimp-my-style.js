import { styles } from "./pimp-my-style.data.js"

let i = 0
export function pimp() {
    const btm = document.querySelector("button")
    if (btm.classList.contains("unpimp")) {
        i--
        btm.classList.remove(styles[i])
    } else {
        btm.classList.add(styles[i])
        i++
    }
    if (i == styles.length) {
        btm.classList.toggle("unpimp")
    }
    if (i == 0) {
        btm.classList.toggle("unpimp")
    }
}