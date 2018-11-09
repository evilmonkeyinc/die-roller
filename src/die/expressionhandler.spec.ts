import { ExpressionHandler } from './expressionhandler';
import { RollActionOrder, RollActionType } from './roll_action';

describe('Roll Expression', () => {

    it('Roll 2 D20, Keep 1, Add 10', () => {
        const expression = '2d20k1+10';
        const result = ExpressionHandler.parse(expression);
        expect(result).toHaveProperty('expression', expression);
        expect(result).toHaveProperty('expressions');
        expect(result.expressions).toHaveLength(2);
        expect(result.expressions[0]).toHaveProperty('roll');
        expect(result.expressions[0].roll).toBeDefined();
        if (result.expressions[0].roll !== undefined) {

            // Extra check to get round tslint errors
            expect(result.expressions[0].roll).toHaveProperty('quantity', 2);
            expect(result.expressions[0].roll).toHaveProperty('sides', 20);
            expect(result.expressions[0].roll).toHaveProperty('result');
            expect(result.expressions[0].roll).toHaveProperty('action');
            expect(result.expressions[0].roll.action).toHaveProperty('quantity', 1);
            expect(result.expressions[0].roll.action).toHaveProperty('actionType', RollActionType.Keep);
            expect(result.expressions[0].roll.action).toHaveProperty('order', RollActionOrder.Highest);
            expect(result.expressions[0].roll.rolls).toHaveLength(2);

            const maxRollResult = Math.max(result.expressions[0].roll.rolls[0], result.expressions[0].roll.rolls[1]);
            expect(result.expressions[0].roll.result).toEqual(maxRollResult);
            expect(result.expressions[0].roll.result).toEqual(result.expressions[0].result);
        }
        expect(result.expressions[1]).toHaveProperty('result', 10);
        expect(result.result).toEqual(result.expressions[0].result + result.expressions[1].result);
    });

    it('Roll 2 D20, Keep Highest 1, Add 10', () => {
        const expression = '2d20kh1+10';
        const result = ExpressionHandler.parse(expression);
        expect(result).toHaveProperty('expression', expression);
        expect(result).toHaveProperty('expressions');
        expect(result.expressions).toHaveLength(2);
        expect(result.expressions[0]).toHaveProperty('roll');
        expect(result.expressions[0].roll).toBeDefined();
        if (result.expressions[0].roll !== undefined) {
            // Extra check to get round tslint errors
            expect(result.expressions[0].roll).toHaveProperty('quantity', 2);
            expect(result.expressions[0].roll).toHaveProperty('sides', 20);
            expect(result.expressions[0].roll).toHaveProperty('result');
            expect(result.expressions[0].roll.action).toHaveProperty('quantity', 1);
            expect(result.expressions[0].roll.action).toHaveProperty('actionType', RollActionType.Keep);
            expect(result.expressions[0].roll.action).toHaveProperty('order', RollActionOrder.Highest);
            expect(result.expressions[0].roll.rolls).toHaveLength(2);

            const maxRollResult = Math.max(result.expressions[0].roll.rolls[0], result.expressions[0].roll.rolls[1]);
            expect(result.expressions[0].roll.result).toEqual(maxRollResult);
            expect(result.expressions[0].roll.result).toEqual(result.expressions[0].result);
        }
        expect(result.expressions[1]).toHaveProperty('result', 10);
        expect(result.result).toEqual(result.expressions[0].result + result.expressions[1].result);
    });

    it('Roll 2 D20, Keep Lowest 1, Add 10', () => {
        const expression = '2d20kl1+10';
        const result = ExpressionHandler.parse(expression);
        expect(result).toHaveProperty('expression', expression);
        expect(result).toHaveProperty('expressions');
        expect(result.expressions).toHaveLength(2);
        expect(result.expressions[0]).toHaveProperty('roll');
        expect(result.expressions[0].roll).toBeDefined();
        if (result.expressions[0].roll !== undefined) {
            // Extra check to get round tslint errors
            expect(result.expressions[0].roll).toHaveProperty('quantity', 2);
            expect(result.expressions[0].roll).toHaveProperty('sides', 20);
            expect(result.expressions[0].roll).toHaveProperty('result');
            expect(result.expressions[0].roll.action).toHaveProperty('quantity', 1);
            expect(result.expressions[0].roll.action).toHaveProperty('actionType', RollActionType.Keep);
            expect(result.expressions[0].roll.action).toHaveProperty('order', RollActionOrder.Lowest);
            expect(result.expressions[0].roll.rolls).toHaveLength(2);

            const minRollResult = Math.min(result.expressions[0].roll.rolls[0], result.expressions[0].roll.rolls[1]);
            expect(result.expressions[0].roll.result).toEqual(minRollResult);
            expect(result.expressions[0].roll.result).toEqual(result.expressions[0].result);
        }
        expect(result.expressions[1]).toHaveProperty('result', 10);
        expect(result.result).toEqual(result.expressions[0].result + result.expressions[1].result);
    });

    it('Roll 2 D20, Drop 1, Add 10', () => {
        const expression = '2d20d1+10';
        const result = ExpressionHandler.parse(expression);
        expect(result).toHaveProperty('expression', expression);
        expect(result).toHaveProperty('expressions');
        expect(result.expressions).toHaveLength(2);
        expect(result.expressions[0]).toHaveProperty('roll');
        expect(result.expressions[0].roll).toBeDefined();
        if (result.expressions[0].roll !== undefined) {
            // Extra check to get round tslint errors
            expect(result.expressions[0].roll).toHaveProperty('quantity', 2);
            expect(result.expressions[0].roll).toHaveProperty('sides', 20);
            expect(result.expressions[0].roll).toHaveProperty('result');
            expect(result.expressions[0].roll).toHaveProperty('action');
            expect(result.expressions[0].roll.action).toHaveProperty('quantity', 1);
            expect(result.expressions[0].roll.action).toHaveProperty('actionType', RollActionType.Drop);
            expect(result.expressions[0].roll.action).toHaveProperty('order', RollActionOrder.Lowest);
            expect(result.expressions[0].roll.rolls).toHaveLength(2);

            const maxRollResult = Math.max(result.expressions[0].roll.rolls[0], result.expressions[0].roll.rolls[1]);
            expect(result.expressions[0].roll.result).toEqual(maxRollResult);
            expect(result.expressions[0].roll.result).toEqual(result.expressions[0].result);
        }
        expect(result.expressions[1]).toHaveProperty('result', 10);
        expect(result.result).toEqual(result.expressions[0].result + result.expressions[1].result);
    });

    it('Roll 2 D20, Drop Lowest 1, Add 10', () => {
        const expression = '2d20dl1+10';
        const result = ExpressionHandler.parse(expression);
        expect(result).toHaveProperty('expression', expression);
        expect(result).toHaveProperty('expressions');
        expect(result.expressions).toHaveLength(2);
        expect(result.expressions[0]).toHaveProperty('roll');
        expect(result.expressions[0].roll).toBeDefined();
        if (result.expressions[0].roll !== undefined) {
            // Extra check to get round tslint errors
            expect(result.expressions[0].roll).toHaveProperty('quantity', 2);
            expect(result.expressions[0].roll).toHaveProperty('sides', 20);
            expect(result.expressions[0].roll).toHaveProperty('result');
            expect(result.expressions[0].roll.action).toHaveProperty('quantity', 1);
            expect(result.expressions[0].roll.action).toHaveProperty('actionType', RollActionType.Drop);
            expect(result.expressions[0].roll.action).toHaveProperty('order', RollActionOrder.Lowest);
            expect(result.expressions[0].roll.rolls).toHaveLength(2);

            const maxRollResult = Math.max(result.expressions[0].roll.rolls[0], result.expressions[0].roll.rolls[1]);
            expect(result.expressions[0].roll.result).toEqual(maxRollResult);
            expect(result.expressions[0].roll.result).toEqual(result.expressions[0].result);
        }
        expect(result.expressions[1]).toHaveProperty('result', 10);
        expect(result.result).toEqual(result.expressions[0].result + result.expressions[1].result);
    });

    it('Roll 2 D20, Drop Highest 1, Add 10', () => {
        const expression = '2d20dh1+10';
        const result = ExpressionHandler.parse(expression);
        expect(result).toHaveProperty('expression', expression);
        expect(result).toHaveProperty('expressions');
        expect(result.expressions).toHaveLength(2);
        expect(result.expressions[0]).toHaveProperty('roll');
        expect(result.expressions[0].roll).toBeDefined();
        if (result.expressions[0].roll !== undefined) {
            // Extra check to get round tslint errors
            expect(result.expressions[0].roll).toHaveProperty('quantity', 2);
            expect(result.expressions[0].roll).toHaveProperty('sides', 20);
            expect(result.expressions[0].roll).toHaveProperty('result');
            expect(result.expressions[0].roll.action).toHaveProperty('quantity', 1);
            expect(result.expressions[0].roll.action).toHaveProperty('actionType', RollActionType.Drop);
            expect(result.expressions[0].roll.action).toHaveProperty('order', RollActionOrder.Highest);
            expect(result.expressions[0].roll.rolls).toHaveLength(2);

            const minRollResult = Math.min(result.expressions[0].roll.rolls[0], result.expressions[0].roll.rolls[1]);
            expect(result.expressions[0].roll.result).toEqual(minRollResult);
            expect(result.expressions[0].roll.result).toEqual(result.expressions[0].result);
        }
        expect(result.expressions[1]).toHaveProperty('result', 10);
        expect(result.result).toEqual(result.expressions[0].result + result.expressions[1].result);
    });

    it('Roll 4 D6, Keep Highest 3', () => {
        const expression = '4d6kh3';
        const result = ExpressionHandler.parse(expression);
        expect(result).toHaveProperty('expression', expression);
        expect(result).toHaveProperty('expressions');
        expect(result.expressions).toHaveLength(1);
        expect(result.expressions[0]).toHaveProperty('roll');
        expect(result.expressions[0].roll).toBeDefined();
        if (result.expressions[0].roll !== undefined) {
            const roll0 = result.expressions[0].roll;

            // Extra check to get round tslint errors
            expect(roll0).toHaveProperty('quantity', 4);
            expect(roll0).toHaveProperty('sides', 6);
            expect(roll0).toHaveProperty('result');
            expect(roll0).toHaveProperty('action');
            expect(roll0.action).toHaveProperty('quantity', 3);
            expect(roll0.action).toHaveProperty('actionType', RollActionType.Keep);
            expect(roll0.action).toHaveProperty('order', RollActionOrder.Highest);
            expect(roll0.rolls).toHaveLength(4);

            const sortedRolls = roll0.rolls.slice(0, roll0.rolls.length);
            sortedRolls.sort((a: number, b: number) => b - a);

            let expectedResult = 0;
            for (let i = 0; i < 3; i++) {
                expectedResult += sortedRolls[i];
            }

            expect(roll0.result).toEqual(expectedResult);
            expect(roll0.result).toEqual(result.expressions[0].result);
        }
        expect(result.result).toEqual(result.expressions[0].result);
    });

});
