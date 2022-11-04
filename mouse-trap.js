export function createCircle() {
    document.addEventListener('mousedown', (e) => {
        const circle = document.createElement("div")
        circle.style.background = "white"
        circle.classList.add("circle")
        circle.style.top = e.clientY+"px"
        circle.style.left = e.clientX+"px"
        document.body.append(circle)
        console.log(e, e.clientX, e.clientY);
    })
}
export function moveCircle() {
    
}
export function setBox() {
    
}