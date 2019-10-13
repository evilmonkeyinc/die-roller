import { ExpressionHandler, regex as dieRegex } from './die/expressionhandler';

export {
    parse,
    regex,
};

/**
 * Parse a die roll shorthand expression and receive a parsed and calculated response.
 * @param expression the die roll shorthand expression
 */
function parse(expression: string): ExpressionHandler {
    return ExpressionHandler.parse(expression);
}

/**
 * Gets the RegExp used to parse the die roll epression
 */
function regex(): RegExp {
    return dieRegex;
}
