let size = 20
let cols = 3
let rows = 6
let grid = []
let colorPrimary
let colorSecondary

function setup() {
    createCanvas((cols * size), (rows * size))
    colorPrimary = color(255, 255, 255)
    colorSecondary = color(30, 100, 200)

    // create the cells
    let cellsCount = rows * cols
    let thisCell = 0;

    for (var y = 0; y < rows; y++){
        for (var x = 0; x < cols; x++){
            var percentage = thisCell / (cellsCount - 1)
            var thisColor = getColorBetween(colorPrimary, colorSecondary, percentage)
            var cell = new Cell(x, y, thisColor);
            grid.push(cell);
            thisCell++;
        }
    }
    
}

function draw() {
    background(51);

    for (let i = 0; i < grid.length; i++){
        grid[i].show()
    }
}

function Cell(x, y, color){
    this.grid_x = x;
    this.grid_y = y;
    this.color = color

    this.show = function () {
        var x = this.grid_x * size;
        var y = this.grid_y * size;
        fill(this.color)
        rect(x, y, size, size)
    }
}

function getColorBetween(color1, color2, percentage){
    let rgb = new Array(3)

    for (let i = 0; i < 3; i++){
        let val1 = color1.levels[i]
        let val2 = color2.levels[i]
        rgb[i] = Math.round(between(val1, val2, percentage))
    }

    // console.log(rgb[0], rgb[1], rgb[2])

    return color(rgb[0], rgb[1], rgb[2])
}

function between(val1, val2, percentage){
    // console.log('val1: ', val1)
    // console.log('val2: ', val2)
    // console.log('percentage: ', percentage)
    // console.log('between: ', ((val2 - val1) * percentage) + val1)
    return ((val2 - val1) * percentage) + val1
}