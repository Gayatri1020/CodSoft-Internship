const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.secondValue = display.textContent; 
        } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action; 
            display.textContent = displayedNum + ` ${keyContent} `; 
        } else if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            }
        } else if (action === 'clear') {
            display.textContent = '0';
            delete calculator.dataset.firstValue; 
            delete calculator.dataset.operator; 
            delete calculator.dataset.secondValue; 
        } else if (action === 'equal') {
            const firstValue = calculator.dataset.firstValue; 
            const operator = calculator.dataset.operator;
            const secondValue = calculator.dataset.secondValue; 
            
            if (firstValue && operator && secondValue) {
                display.textContent = calculate(firstValue, operator, secondValue); 
            }
        }
    }
});

const calculate = (n1, operator, n2) => {
    let result = '';
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    
    if (operator === 'add') {
        result = num1 + num2;
    } else if (operator === 'subtract') {
        result = num1 - num2;
    } else if (operator === 'multiply') {
        result = num1 * num2;
    } else if (operator === 'divide') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = 'Error'; 
        }
    }
    return result;
};