// Simple PathFind Extension - PenguinMod / Scratch Mod Compatible

(function(Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Simple PathFind must be run unsandboxed.");
  }

  class SimplePathFind {
    constructor() {
      this.paths = {}; // stores paths by id
      this.collisionSprite = null;
      this.collisionCostume = null;
      this.margin = 0;
      this.width = 480;
      this.height = 360;
      this.grid = null; // binary collision grid
    }

    getInfo() {
      return {
        id: "simplepathfind",
        name: "Simple PathFind",
        blocks: [
          {
            opcode: "setCollisionSource",
            blockType: Scratch.BlockType.COMMAND,
            text: "set collision sprite [SPRITE] and costume [COSTUME]",
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "walls" },
              COSTUME: { type: Scratch.ArgumentType.STRING, defaultValue: "collision" },
            }
          },
          {
            opcode: "setMargin",
            blockType: Scratch.BlockType.COMMAND,
            text: "set path margin to [MARGIN]",
            arguments: {
              MARGIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 },
            }
          },
          {
            opcode: "computePath",
            blockType: Scratch.BlockType.COMMAND,
            text: "compute path from [X1],[Y1] to [X2],[Y2] with ID [ID]",
            arguments: {
              X1: { type: Scratch.ArgumentType.NUMBER },
              Y1: { type: Scratch.ArgumentType.NUMBER },
              X2: { type: Scratch.ArgumentType.NUMBER },
              Y2: { type: Scratch.ArgumentType.NUMBER },
              ID: { type: Scratch.ArgumentType.STRING },
            }
          },
          {
            opcode: "getPathLength",
            blockType: Scratch.BlockType.REPORTER,
            text: "path length of ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING },
            }
          },
          {
            opcode: "getWaypoint",
            blockType: Scratch.BlockType.REPORTER,
            text: "waypoint [INDEX] X of ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING },
              INDEX: { type: Scratch.ArgumentType.NUMBER },
            }
          },
          {
            opcode: "getWaypointY",
            blockType: Scratch.BlockType.REPORTER,
            text: "waypoint [INDEX] Y of ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING },
              INDEX: { type: Scratch.ArgumentType.NUMBER },
            }
          },
          {
            opcode: "hasPath",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "path with ID [ID] exists",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING },
            }
          },
          {
            opcode: "clearPath",
            blockType: Scratch.BlockType.COMMAND,
            text: "clear path with ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING },
            }
          },
        ]
      };
    }

    setCollisionSource(args) {
      this.collisionSprite = args.SPRITE;
      this.collisionCostume = args.COSTUME;
      this.generateCollisionGrid();
    }

    setMargin(args) {
      this.margin = args.MARGIN;
    }

    generateCollisionGrid() {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      const ctx = canvas.getContext("2d");
      const sprite = Scratch.vm.runtime.getSpriteTargetByName(this.collisionSprite);
      if (!sprite) return;
      const costume = sprite.getCostume();
      const skin = sprite.drawable.skin;
      const image = skin._canvas; // internal access
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, this.width, this.height);
      this.grid = new Uint8Array(this.width * this.height);
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const i = (y * this.width + x) * 4;
          const alpha = imageData.data[i + 3];
          this.grid[y * this.width + x] = alpha > 128 ? 1 : 0;
        }
      }
    }

    computePath(args) {
      const start = { x: Math.floor(args.X1), y: Math.floor(args.Y1) };
      const end = { x: Math.floor(args.X2), y: Math.floor(args.Y2) };
      const id = args.ID;
      if (!this.grid) return;

      const inBounds = (x, y) => x >= 0 && y >= 0 && x < this.width && y < this.height;
      const passable = (x, y) => inBounds(x, y) && this.grid[y * this.width + x] === 0;

      const queue = [start];
      const cameFrom = {};
      const key = (p) => `${p.x},${p.y}`;
      cameFrom[key(start)] = null;

      while (queue.length > 0) {
        const current = queue.shift();
        if (current.x === end.x && current.y === end.y) break;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = current.x + dx;
            const ny = current.y + dy;
            const nkey = `${nx},${ny}`;
            if (passable(nx, ny) && !(nkey in cameFrom)) {
              queue.push({ x: nx, y: ny });
              cameFrom[nkey] = current;
            }
          }
        }
      }

      const path = [];
      let cur = end;
      while (key(cur) !== key(start)) {
        path.unshift({ x: cur.x, y: cur.y });
        cur = cameFrom[key(cur)];
        if (!cur) break;
      }
      path.unshift(start);
      this.paths[id] = path;
    }

    getPathLength(args) {
      const id = args.ID;
      return this.paths[id] ? this.paths[id].length : 0;
    }

    getWaypoint(args) {
      const id = args.ID;
      const index = Math.floor(args.INDEX);
      if (this.paths[id] && this.paths[id][index]) {
        return `${this.paths[id][index].x}`;
      } else {
        return "";
      }
    }

    getWaypointY(args) {
      const id = args.ID;
      const index = Math.floor(args.INDEX);
      if (this.paths[id] && this.paths[id][index]) {
        return `${this.paths[id][index].y}`;
      } else {
        return "";
      }
    }

    hasPath(args) {
      return !!this.paths[args.ID];
    }

    clearPath(args) {
      delete this.paths[args.ID];
    }
  }

  Scratch.extensions.register(new SimplePathFind());
})(Scratch);
