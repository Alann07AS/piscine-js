export function generateLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let bold = 300
    let boldIncrease = 100
    let boldI = (120/3)
    for (let i = 0; i < 120; i++) {
        const randomLetter =  alphabet[Math.floor(Math.random() * alphabet.length)]
        const dv = document.createElement("div")
        dv.textContent = randomLetter
        dv.style.fontSize = (i+11) + "px"
        if (i >= boldI) {
            bold += boldIncrease
            boldIncrease = 200
            boldI += 40
        }
        dv.style.fontWeight = bold
        document.body.append(dv)
    }
}