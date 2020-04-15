import { ExpressionHandler, regex as dieRegex } from './die/expressionhandler';

/**
 * Parse a die roll shorthand expression and receive a parsed and calculated response.
 * @param expression the die roll shorthand expression
 */
export function parse(expression: string): ExpressionHandler {
    return ExpressionHandler.parse(expression);
}

/**
 * Gets the RegExp used to parse the die roll epression
 */
export function regex(): RegExp {
    return dieRegex;
}
