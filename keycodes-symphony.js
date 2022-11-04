export function compose() {
    console.log('INIT')
    const colorList = new Map
    const isAlpha = RegExp(/^\w$/i)
    document.body.addEventListener('keydown', (e) => {
        console.log(e)
        if(isAlpha.test(e.key)) {
            const noteDiv = document.createElement("div")
            noteDiv.classList.add("note")
            noteDiv.textContent = e.key
            if (!colorList.has(e.key)) {
                colorList.set(e.key, Math.floor(Math.random()*0xDDDDD))
            }
            noteDiv.style.background = "#"+colorList.get(e.key)
            console.log((colorList.get(e.key)));
            document.body.append(noteDiv)
        }
        if (e.key === 'Escape') {
            console.log('escape');
            colorList.clear()
            document.body.textContent = ''

        }
        if (e.key === 'Backspace') {
            console.log('backspace');
            document.body.removeChild(document.body.lastChild)
        }   
    })
}