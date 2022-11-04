import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    const styleE = document.createElement("style")
    colors.forEach(color => {
        // styleE.setAttribute(color, 'background: '+color+';')
        styleE.textContent += '.'+color+' { background: '+color+'; } '
    });
    document.head.append(styleE)
}
export function generateColdShades() {
    const regCold = /(aqua|blue|turquoise|green|cyan|navy|purple)/gi
    colors.forEach(color => {
    })
    colors.forEach(color => {
        if ((regCold.test(color))) {
            console.log(regCold.test(color))
            const coloDiv = document.createElement("div")
            coloDiv.classList.add(color)
            coloDiv.textContent = color
            document.body.append(coloDiv)
        }
    });
}
export function choseShade(colorSelect) {
    const allDiv = document.querySelectorAll("div")
    allDiv.forEach((div) => {div.classList.replace(div.className, colorSelect)})
}