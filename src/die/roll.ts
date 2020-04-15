import RollAction from './roll_action';

class Roll {

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * @param min The minimum value in the range
     * @param max The maximum value in the range
     */
    private static getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public quantity: number;
    public sides: number;
    public rolls: number[];
    public result: number;
    public action?: RollAction;

    constructor(quantity: number, sides: number, action?: RollAction) {
        this.quantity = quantity;
        this.sides = sides;
        this.rolls = [];
        this.result = 0;
        this.action = action;

        for (let i = 0; i < this.quantity; i++) {
            const roll = Roll.getRandomInt(1, this.sides);
            this.result += roll;
            this.rolls.push(roll);
        }

        if (this.action !== undefined) {
            this.result = this.action.handle(this.rolls);
        }
    }
}

export { Roll };
