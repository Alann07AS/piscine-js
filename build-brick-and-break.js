
export function build(nbBrick) {
    let i = 1;
    let midlle = 2
    const time = setInterval(()=>{ 
        const brick = document.createElement("div")
        brick.id = "brick-" + i.toString()
        if (i == midlle) {
            brick.dataset.foundation = true
            midlle += 3
        }
        document.body.append(brick)
        if (i >= nbBrick) {clearInterval(time)}; 
        i++;
    }, 10)
}

export function repair(...arrId) {
    arrId.forEach((id) => {
        const elemmentId = document.getElementById(id)
        console.log(elemmentId.hasAttribute("data-foundation"));
        if (elemmentId.hasAttribute("data-foundation")) {
            elemmentId.dataset.repaired = 'in progress'
        } else {
            elemmentId.dataset.repaired = 'true'
        }
    })
}

export function destroy() {
    document.body.removeChild(document.body.lastChild)
}