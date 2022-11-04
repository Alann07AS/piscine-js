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
export function moveCircle() {
    document.addEventListener('mousemove', (e) => {
        const lastChild = document.body.lastChild
        lastChild.style.top = e.clientY-25+"px"
        lastChild.style.left = e.clientX-25+"px"
    })
}
export function setBox() {
    
}