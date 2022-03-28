let expr = "1"
let flag = false

const findExpression = (number) => {
    let result = "1";
    let currentNumber = 1;
    while (currentNumber < number) {
        if (currentNumber * 2 < number) {
            result += ` ${mul2}`;
            currentNumber *= 2;
        } else if (currentNumber + 4 < number) {
            result += ` ${add4}`;
            currentNumber += 4;
        } else {
            return undefined;
        }
    }
    return result;
};