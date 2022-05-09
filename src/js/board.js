import { Checker } from "./checker.js";

export class Board {
    columns = new Array(24);

    init() {
        this.columns.fill({ checkers: [], owner: -1 });

        this.columns[17] = { checkers: this.#createCheckers(15, 1), owner: 1 };

        this.renderCheckers(17);
        this.renderColumns();

        return this.columns;
    }

    renderColumns() {
        const slots = document.getElementsByClassName('slot');

        this.columns.forEach((column, index) => {
            slots[index].ondragover = this.#onDragOver;
            slots[index].ondrop = this.#onColumnDrop;
        });
    }

    renderCheckers(col) {
        const slots = document.getElementsByClassName('slot');
        this.columns[col].checkers.forEach(checker => {
            slots[col].appendChild(checker.elem);
        });
    }

    #createCheckers(count, color) {
        const arr = [];

        for (let i = 0; i < count; i++) {
            arr.push(new Checker(color, i));
        }

        return arr;
    }

    #onColumnDrop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/id');
        const draggable = document.getElementById(data);

        event.target.closest('.slot').appendChild(draggable);
        draggable.classList.remove('hide');
    }

    #onDragOver(event) {
        event.preventDefault()
    }
}
