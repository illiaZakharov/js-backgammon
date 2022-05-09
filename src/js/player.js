export class Player {
    constructor(name, checker) {
        this._name = name;
        this._checker = checker;
    }

    get name() {
        return this._name;
    }

    get checkerColor() {
        return this._checker ? 'White' : 'Dark';
    }
}