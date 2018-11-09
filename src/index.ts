import { ExpressionHandler } from './die/expressionhandler';

export {
    parse,
};

/**
 * Parse a die roll shorthand expression and receive a parsed and calculated response.
 * @param expression the die roll shorthand expression
 */
function parse(expression: string): ExpressionHandler {
    return ExpressionHandler.parse(expression);
}
