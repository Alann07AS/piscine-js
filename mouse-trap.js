export function createCircle() {
    document.addEventListener('mousedown', (e) => {
        const circle = document.createElement("div")
        circle.style.background = "white"
        circle.classList.add("circle")
        circle.style.top = e.clientY-25+"px"
        circle.style.left = e.clientX-25+"px"
        document.body.append(circle)
        console.log(e, e.clientX, e.clientY);
    })
}
let isTrap = false
export function moveCircle() {
    document.addEventListener('mousemove', (e) => {
        const lastChild = document.body.lastChild
        if (lastChild.classList.contains('circle')) {
        if (!isTrap) {
            lastChild.style.background = "white"
            lastChild.style.left = e.clientX-25+"px"
            lastChild.style.top = e.clientY-25+"px"
        } else {
            const boxData = document.querySelector("box").getBoundingClientRect()
            lastChild.style.background = "var(--purple)"
            if (e.clientX >  boxData.x+25 && e.clientX < boxData.width+boxData.x-25) {
                lastChild.style.left = e.clientX-25+"px"
            } 
            if (e.clientY >  boxData.y+25 && e.clientY < boxData.height+boxData.y-25) {
                lastChild.style.top = e.clientY-25+"px"
            }
        }
        }
    })
    document.addEventListener('click', (e) => {
        const boxData = document.querySelector("box").getBoundingClientRect()
        if (!(e.clientX >  boxData.x+25 && e.clientX < boxData.width+boxData.x-25 && e.clientY >  boxData.y+25 && e.clientY < boxData.height+boxData.y-25)) {
            isTrap = false
        }
    });
}
export function setBox() {
    const box = document.createElement("box")
    box.classList.add("box")
    box.style.background = ''// "var(--purple)"
    box.style.justifyContent = 'center'
    box.style.alignContent = 'center'
    document.body.append(box)
    box.addEventListener("mouseover", (e) => {
        console.log('mouse enter')
        isTrap = true
    })
}