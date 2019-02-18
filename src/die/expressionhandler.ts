import * as math from 'mathjs';
import { RollExpression } from './roll_expression';

const regex = /(?:^|^-|(?:(?!^)([*\\+-])))(?:([0-9]{1,})d([0-9]{1,})(?:([kd])([lh])?([0-9]{1,}))?|([0-9]{1,}))/g;

export class ExpressionHandler {
    public static parse(expression: string): ExpressionHandler {

        const expressions = new Array() as RollExpression[];

        let execArray = regex.exec(expression);
        while (execArray != null) {
            expressions.push(RollExpression.parseRegExpExec(execArray));

            execArray = regex.exec(expression);
        }

        return new ExpressionHandler(expression, expressions);
    }

    public expression: string;
    public expressions: RollExpression[];
    public result: number;

    constructor(expression: string, expressions: RollExpression[]) {
        this.expression = expression;
        this.expressions = expressions;

        let command = '';
        for (const curr of this.expressions) {
            command += `${curr.operator}${curr.result}`;
        }
        command += '';

        this.result = Number(math.eval(command));
    }
}
