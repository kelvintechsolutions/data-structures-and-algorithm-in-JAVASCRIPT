function infixToPostfix(infix) {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const output = [];
    const operators = [];

    infix.split(' ').forEach(token => {
        if (!isNaN(token)) { // Operand
            output.push(token);
        } else if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                output.push(operators.pop());
            }
            operators.pop(); // Remove the '(' from the stack
        } else { // Operator
            while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
                output.push(operators.pop());
            }
            operators.push(token);
        }
    });

    // Pop all remaining operators
    while (operators.length) {
        output.push(operators.pop());
    }

    return output.join(' ');
}
