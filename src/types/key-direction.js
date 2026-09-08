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

export { KEY_DIRECTION, Direction };