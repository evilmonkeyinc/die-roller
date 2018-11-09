class RollAction {
    public quantity: number;
    public actionType: RollActionType;
    public order: RollActionOrder;

    public constructor(actionType: RollActionType, order: RollActionOrder, quantity: number) {
        this.quantity = quantity;
        this.actionType = actionType;
        this.order = order;
    }

    public handle(rolls: number[]): number {

        const sortedRolls = rolls.slice(0, rolls.length);
        let result = 0;

        switch (this.order) {
            case RollActionOrder.Highest:
                // For descending sort
                sortedRolls.sort((a: number, b: number) => b - a);
                break;
            case RollActionOrder.Lowest:
                // For ascending sort
                sortedRolls.sort((a: number, b: number) => a - b);
                break;
        }

        switch (this.actionType) {
            case RollActionType.Keep:
                for (let i = 0; i < this.quantity; i++) {
                    result += sortedRolls[i];
                }
                break;
            case RollActionType.Drop:
                for (let i = this.quantity; i < sortedRolls.length; i++) {
                    result += sortedRolls[i];
                }
                break;
        }

        return result;

    }
}

enum RollActionType {
    Keep = 'KEEP',
    Drop = 'DROP',
}

enum RollActionOrder {
    Highest = 'HIGHEST',
    Lowest = 'LOWEST',
}

export { RollAction, RollActionType, RollActionOrder };
