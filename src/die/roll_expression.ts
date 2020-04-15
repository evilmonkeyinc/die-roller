import { Roll } from './roll';
import RollAction, { RollActionOrder, RollActionType } from './roll_action';

class RollExpression {

    public static parseRegExpExec(execArray: RegExpExecArray): RollExpression {

        let result = Number(execArray[7]);

        const actionType = execArray[4];
        const actionSort = execArray[5];
        const actionQuantity = Number(execArray[6]);

        let action;

        if (actionType !== undefined && !isNaN(actionQuantity)) {

            const type = actionType === 'd' ? RollActionType.Drop : RollActionType.Keep;
            let order = actionType === 'd' ? RollActionOrder.Lowest : RollActionOrder.Highest;

            if (actionSort !== undefined) {
                order = actionSort === 'l' ? RollActionOrder.Lowest : RollActionOrder.Highest;
            }

            action = new RollAction(type, order, actionQuantity);
        }

        let roll;

        const quantity = Number(execArray[2]);
        const sides = Number(execArray[3]);
        if (!isNaN(quantity) && !isNaN(sides)) {
            roll = new Roll(quantity, sides, action);

            result = roll.result;
        }

        const expression = execArray[0];
        let operator = execArray[1];
        if (operator === undefined) {
            operator = '';
        }

        return new RollExpression(expression, operator, roll, result);
    }

    public expression: string;
    public operator: string;
    public roll?: Roll;
    public result: number;

    constructor(expression: string, operator: string, roll?: Roll, result?: number) {
        this.expression = expression;
        this.operator = operator;
        this.roll = roll;
        this.result = result !== undefined ? result : 0;
    }
}

export { RollExpression };
