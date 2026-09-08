const Direction = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
}

const KEY_DIRECTION = {
    ArrowUp: Direction.UP,
    ArrowDown: Direction.DOWN,
    ArrowLeft: Direction.LEFT,
    ArrowRight: Direction.RIGHT,
    w: Direction.UP,
    s: Direction.DOWN,
    a: Direction.LEFT,
    d: Direction.RIGHT,
}

const OPPOSITE_DIRECTION = {
    [Direction.UP]: Direction.DOWN,
    [Direction.DOWN]: Direction.UP,
    [Direction.LEFT]: Direction.RIGHT,
    [Direction.RIGHT]: Direction.LEFT,
}

export { KEY_DIRECTION, Direction, OPPOSITE_DIRECTION };