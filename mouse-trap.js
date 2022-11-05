let isTrap = false
export function createCircle() {
    const boxData = document.querySelector("box").getBoundingClientRect()
    document.addEventListener('mousedown', (e) => {
        const circle = document.createElement("div")
        circle.style.background = "green"
        if (!(e.clientX >  boxData.x+25 && e.clientX < boxData.width+boxData.x-25 && e.clientY >  boxData.y+25 && e.clientY < boxData.height+boxData.y-25)) {
            console.log('inBox');
            isTrap = false
            circle.style.background = "white"
        } else {
            circle.style.background = "var(--purple)"
            console.log('outBox');
        }
        circle.classList.add("circle")
        circle.style.top = e.clientY-25+"px"
        circle.style.left = e.clientX-25+"px"
        document.body.append(circle)
    })
}
export function moveCircle() {
    const boxData = document.querySelector("box").getBoundingClientRect()
    document.addEventListener('mousemove', (e) => {
        const lastChild = document.body.lastChild
        if (lastChild.classList.contains('circle')) {
        if (!isTrap) {
            lastChild.style.background = "white"
            lastChild.style.left = e.clientX-25+"px"
            lastChild.style.top = e.clientY-25+"px"
        } else {
            lastChild.style.background = "var(--purple)"
            if (e.clientX >  boxData.x+26 && e.clientX < boxData.width+boxData.x-26) {
                lastChild.style.left = e.clientX-26+"px"
            } 
            if (e.clientY >  boxData.y+26 && e.clientY < boxData.height+boxData.y-26) {
                lastChild.style.top = e.clientY-26+"px"
            }
        }
        if ((e.clientX >  boxData.x+25 && e.clientX < boxData.width+boxData.x-25 && e.clientY >  boxData.y+25 && e.clientY < boxData.height+boxData.y-25)) {
            isTrap = true
        }
        }
    })
}
export function setBox() {
    const box = document.createElement("box")
    box.classList.add("box")
    box.style.background = ''// "var(--purple)"
    box.style.justifyContent = 'center'
    box.style.alignContent = 'center'
    document.body.append(box)
    box.addEventListener("mou", (e) => {
        console.log('mouse enter')
        isTrap = true
    })
}