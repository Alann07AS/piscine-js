import { styles } from "./pimp-my-style.data.js"

let i = 0
export function pimp() {
    const btm = document.querySelector("button")

    if (i == styles.length) {
        btm.classList.add("unpimp")
    }
    console.log(btm.hasAttribute("unpimp"))
    if (btm.classList.contains("unpimp")) {
        i--
        btm.classList.remove(styles[i])
    } else {
        btm.classList.add(styles[i])
        i++
    }
    if (i == 0) {
        btm.classList.remove("unpimp")
    }
}