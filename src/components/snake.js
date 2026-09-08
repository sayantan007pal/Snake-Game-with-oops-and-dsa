import { OPPOSITE_DIRECTION } from "../types/key-direction.js";
import { cellKey } from "./utils.js";


export class Snake { 
    constructor(initialSegments, initialDirection) {
      this.pendingGrowth = 0;
      this.body = new Deque();
      this.occupied = new Set();
      this.direction = initialDirection;
        //initialSegments is tail-first
        for (const segment of initialSegments) {
            this.body.pushFront(segment);
            this.occupied.add(cellKey(segment));
        }
    }
}
