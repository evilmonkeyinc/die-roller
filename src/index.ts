import { ExpressionHandler, regex as dieRegex } from './die/expressionhandler';
import { RollExpression } from './die/roll_expression';
import { Roll } from './die/roll';
import { RollAction, RollActionOrder, RollActionType } from './die/roll_action';

export {
    ExpressionHandler,
    RollExpression,
    Roll,
    RollActionOrder,
    RollActionType,
    RollAction,
}

/**
 * Parse a die roll shorthand expression and receive a parsed and calculated response.
 * @param expression the die roll shorthand expression
 */
export function parse(expression: string): ExpressionHandler {
    return ExpressionHandler.parse(expression);
}

/**
 * Gets the RegExp used to parse the die roll expression
 */
export function regex(): RegExp {
    return dieRegex;
}
