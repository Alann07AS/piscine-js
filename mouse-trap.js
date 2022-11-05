let isTrap = false
let boxData
export function createCircle() {
    document.addEventListener('mousedown', (e) => {
        const circle = document.createElement("div")
        if (!(e.clientX >  boxData.x+25 && e.clientX < boxData.width+boxData.x-25 && e.clientY >  boxData.y+25 && e.clientY < boxData.height+boxData.y-25)) {
            isTrap = false
            console.log('outBox');
            circle.style.background = "white"
        } else {
            circle.style.background = "var(--purple)"
            console.log('inBox');
        }
        circle.classList.add("circle")
        circle.style.top = e.clientY-25+"px"
        circle.style.left = e.clientX-25+"px"
        document.body.append(circle)
    })
}
export function moveCircle() {
    document.addEventListener('mousemove', (e) => {
        const lastChild = document.body.lastChild

        if (lastChild.classList.contains('circle')) {
            if ((e.clientX >  boxData.x-25 && e.clientX < boxData.width+boxData.x+25 && e.clientY >  boxData.y-25 && e.clientY < boxData.height+boxData.y+25)) {
                console.log('AAAAAAAAAAAAAAA')
                lastChild.style.background = "var(--purple)"
            } else {
                lastChild.style.background = "white"
            }
            if (!isTrap) {
                lastChild.style.left = e.clientX-25+"px"
                lastChild.style.top = e.clientY-25+"px"
            } else {
                lastChild.style.background = "var(--purple)"
                if (e.clientX >  boxData.x+26 && e.clientX < boxData.width+boxData.x-26) {
                    lastChild.style.left = e.clientX-26+"px"
                } else if (e.clientX <  boxData.x+26){
                    lastChild.style.left = boxData.x+"px"
                } else {
                    lastChild.style.left = boxData.width+boxData.x-51+"px"
                }
                if (e.clientY >  boxData.y+26 && e.clientY < boxData.height+boxData.y-26) {
                    lastChild.style.top = e.clientY-26+"px"
                } else if(e.clientY <  boxData.y+26) {
                    lastChild.style.top = boxData.y+"px"
                } else {
                    lastChild.style.top = boxData.height+boxData.y-51+"px"
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
    box.addEventListener('mouseenter', (e) => {
        console.log('mouse over')
        const lastChild = document.body.lastChild
        if (lastChild.classList.contains('circle')) {
            lastChild.style.background = "var(--purple)"
        }
    })
    boxData = document.querySelector("box").getBoundingClientRect()
}