export class Board {
    constructor(canvas, columns, rows, cellSize) {
        this.rows = rows;
        this.columns = columns;
        this.cellSize = cellSize;
        canvas.width = columns * cellSize;
        canvas.height = rows * cellSize;
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('2D canvas context is not available in this browser');
        }
        this.ctx = context;
    }

}