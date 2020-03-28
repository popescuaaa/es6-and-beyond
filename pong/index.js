class Pong {
    _canvas;
    _context;
    _players;
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext("2d");
        this._players = [
          new Player(20, 0, 30, canvas.height / 2),
          new Player(canvas.width - 50, 0, 30, canvas.height / 2)
        ];
    }

    drawPlayer = (player) => {
        this._context.fillStyle = "#000";
        this._context.fillRect(player.getPosX(), player.getPosY(),
            player.getWidth(), player.getHeight());
    }

    drawGamePad = () => {
        this._context.fillStyle = "yellow";
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this._players.map((player) => this.drawPlayer(player));
    }
}

class Ball {

}

class Player {
    _pos_x;
    _pos_y;
    _width;
    _height;

    constructor(_pos_x, _pos_y, _width, _height) {
        this._pos_x = _pos_x;
        this._pos_y = _pos_y;
        this._width = _width;
        this._height = _height;
    }

    getPosX = () => {
        return this._pos_x;
    }

    getPosY = () => {
        return this._pos_y;
    }


    getWidth = () => {
        return this._width;
    }

    getHeight = () => {
        return this._height;
    }
}


const canvas = document.getElementById("gamepad");
const game = new Pong(canvas);
game.drawGamePad();
