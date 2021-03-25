let board = document.getElementById('board')
let clearBtn = document.getElementById('clear-btn')
let size = 16
let board_size = 660;
let color
let squares

// Generate random color
function generateColor() {
    let r = Math.floor(Math.random() * Math.floor(255));
    let g = Math.floor(Math.random() * Math.floor(255))
    let b = Math.floor(Math.random() * Math.floor(255))
    return `rgb(${r}, ${g}, ${b})`
}

// Creating the grid for the sketchpad
function createBoard(size) {
    let div
    for (let i = 0; i < size * size; i++) {
        div = document.createElement('div')
        div.className = 'square'
        div.id = i
        div.style.width = `${board_size / size}px`
        div.style.height = `${board_size / size}px`
        board.appendChild(div)
    }

    board.style.width = `${board_size}px`
    squares = document.querySelectorAll('.square');
}

// Initialize the first board
createBoard(size)

// Make the painting available
paint()

function paint() {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            color = generateColor()
            square.style.backgroundColor = color;
        })
    })
}

// Change board size
clearBtn.addEventListener('click', () => {
    // Prompt logic
    size = parseInt(prompt('Enter the board size. Max size is 100'))
    while (!(typeof size === 'number' && size <= 100 && size > 0)) {
        alert('Invalid input');
        size = parseInt(prompt('Enter the board size. Max size is 100'))
    }

    // Remove old board and generate new board
    squares.forEach(square => {
        square.remove();
    })
    createBoard(size)
    paint()
})

