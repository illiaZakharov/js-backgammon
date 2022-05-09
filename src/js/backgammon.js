export class Backgammon {
    #BOARD = [new Array(6), new Array(6), new Array(6), new Array(6)];

    constructor(p1, p2) {
        this.player1 = { name: p1.name, checker: 0 };
        this.player2 = { name: p2.name, checker: 1 };
    }

    initGame() {
        console.log('START');
        console.log(this.throwDice());
        console.log(this.throwDice());
    }

    throwDice() {
        return Math.floor(Math.random() * 6 + 1);
    }

    showStatistics() {
        const results = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };

        for (let i = 0; i < 1000000; i++) {
            const res = this.throwDice();

            results[res].push('');
        }

        return results;
    }
}