const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
    for(let i = 0; i < 1; i++) {
        for(let j = 0; j < 1; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box);
        }
    }
}

createBoxes()

function tpMenu() {
    const link = document.querySelector('.links');

    if (link.style.display === "none") {
        link.style.display = "block";
    }
    else {
        link.style.display = "none";
    }
}