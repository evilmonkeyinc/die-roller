# Die Roller

A simple library to take die rolling shorthand and return the result

## Installing

This library ahs been published to NPM and can be installed with npm or yarn

```npm
npm install @evilmonkeyinc/die-roller
````

```yarn
yarn add @evilmonkeyinc/die-roller
```

The library will be compatible with both javascript and typescript

## Usage

```
import { parse } from '@evilmonkeyinc/die-roller'

...

const parsedExpression = parse('4d6k3')
console.log(parsedExpression.result);
// will return a number between 3 and 18
```

The `parse` function will take a die expression shorthand and evaluate it and return the result.

The expression should be in the format `{number of die}d{size of die}{options}`

The options are used to perform simple actions on the die results before giving back the result, such as `2d20k1` which would return the higher of two d20 rolls or `4d6k3` which would return the result of the best three d6 rolls out of 4.

| Option     | Description                                   |
| ---------- | --------------------------------------------- |
| k{number}  | Keep only the highest {number} of die results |
| kh{number} | Keep only the highest {number} of die results |
| kl{number} | Keep only the lowest {number} of die results  |
| d{number}  | Drop the lowest {number} of die results       |
| dl{number} | Drop the lowest {number} of die results       |
| dh{number} | Drop the highest {number} of die results      |

You can also chain expressions, or simply add or subtract whole numbers for the result by appending a `+` or `-` to an expression if you need to include modifiers to your results.

`1d20+2+3` for your Palidin attacking with their Longsword, with their 2 in proficiency and 3 strength. You hit, and decide to SMITE the enemy, you could then roll `1d8+3+2d8` for damage, `1d8+3` for the weapon and `2d8` for a Divine Smite at 1st level
