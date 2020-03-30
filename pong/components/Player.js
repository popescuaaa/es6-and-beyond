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


export { Player };