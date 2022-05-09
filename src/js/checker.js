export class Checker {
    constructor(color, id) {
        this._color = color;
        this._id = id;
        this._htmlElement = this.createHTMLElement();
    }

    get color() { return this._color ? 'light' : 'dark'; }

    get id() { return this._id; }

    get elem() { return this._htmlElement; }

    createHTMLElement() {
        const div = document.createElement('div');

        div.id = this.color + this.id;
        div.draggable = true;
        div.onclick = this.#onClick;
        div.ondragstart = this.#onDrag;
        div.classList.add(`${this.color}-checker`, 'checker');

        return div;
    }

    #onClick(event) {
        console.log('stop clicking...');
    }

    #onDrag(event) {
        event.dataTransfer.setData('text/id', event.target.id);
        setTimeout(() => document.getElementById(event.target.id).classList.add('hide'));
    }
}
