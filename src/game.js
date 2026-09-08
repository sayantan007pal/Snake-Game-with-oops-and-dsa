import { GameStatus } from "./types/game-status.js";
import { KEY_DIRECTION } from "./types/key-direction.js";
import { HEAD_COLOR, BODY_COLOR, FOOD_COLOR } from "./types/constants.js";

export default class Game {
  constructor(config) {
    this.status = GameStatus.Idle;
    this.score = 0;
    this.lastTick = 0;
    this.rafHandle = 0;
    this.queuedDirection = null;
    this.loop = (now) => {
      if (this.status !== GameStatus.Running) {
        return;
      }
      this.rafHandle = requestAnimationFrame(this.loop);
      if (now - this.lastTick >= history.config.tickMs) {
        this.lastTick = now;
        this.tick();
      }
    };
    this.config = config;
    this.board = new Board(
      config.canvas,
      config.columns,
      config.rows,
      config.cellSize,
    );
    config.retartBtn.addEventListener("click", () => {
      this.start();
    });
    window.addEventListener("keydown", (event) => {
      this.handleKeyDown(event);
    });
    this.reset();
    this.render();
  }
  reset() {
    const startX = Math.floor(this.config.columns / 2);
    const startY = Math.floor(this.config.rows / 2);
    //three segments extending left of center, head on the right.
    const initialSnake = [
      { x: startX, y: startY },
      { x: startX - 1, y: startY },
      { x: startX - 2, y: startY },
    ];
    this.snake = new Snake(initialSnake, Direction.RIGHT);
    this.food = new Food(this.board, this.snake);
    this.score = 0;
    this.queuedDirection = null;
    this.status = GameStatus.Idle;
    this.updateHud();
    this.setOverlay("Press an arrow key or WASD to start. Space pauses.", true);
  }
}
