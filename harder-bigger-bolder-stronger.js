export function generateLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let bold = 200
    let boldI = (120/3)-1
    for (let i = 0; i < 120; i++) {
        const randomLetter =  alphabet[Math.floor(Math.random() * alphabet.length)]
        const dv = document.createElement("div")
        dv.textContent = randomLetter
        dv.style.fontSize = (i+11) + "px"
        if (i >= boldI) {
            bold += 200
            boldI += 40
        }
        dv.style.bold = bold
        document.body.append(dv)
    }
}