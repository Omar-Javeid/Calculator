let numbers = ''
let numArray = []
let numArrayInt = []
let calculationArray = []
let display = '';
let operationArray = []
let bracketCount = 0;
let result = 0.0;
let queue = []
let finalresult = 0;

function addNum(num) {
    display += num;
    numbers += num
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function backspace() {
    display = display.slice(0, -1);
    display = display.trimEnd();
    operationArray.pop()
    numArray.pop()
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function clearAll() {
    numbers = ''
    numArray = []
    numArrayInt = []
    display = '';
    operationArray = []
    bracketCount = 0;
    result = 0;
    queue = []
    calculationArray = []
    document.getElementById('inputBox').innerHTML = ''
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Add() {
    numArray.push(numbers)
    numbers = '';
    display += ' + '
    operationArray.push('+')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Subtract() {
    numArray.push(numbers)
    numbers = '';
    display += ' - '
    operationArray.push('-')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Percent() {
    numArray.push(numbers)
    numbers = '';
    display += '% '
    operationArray.push('%')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Divide() {
    numArray.push(numbers)
    numbers = '';
    display += ' ÷ '
    operationArray.push('/')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Multiply() {
    numArray.push(numbers)
    numbers = '';
    display += ' x '
    operationArray.push('*')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Brackets() {
    bracketCount++
    if (bracketCount % 2) {
        display += '('
        operationArray.push('(')
    } else {
        display += ')'
        operationArray.push(')')
        numArray.push(numbers)
    }
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display, 'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Calculate() {
    numArray.push(numbers)
    calculationArray = queue.toSorted()
    for (let i = 0; i < numArray.length; i++) {
        numArrayInt.push(parseFloat(numArray[i]))
    }

    for (let i = 0; i < numArrayInt.length; i++) {
        if (calculationArray[i] == 'a') {

        } else if (calculationArray[i] == 'ba') {
            result = numArrayInt[operationArray.indexOf('*')] * numArrayInt[calculationArray.indexOf('*') + 1]
            finalresult /= result
        } else if (calculationArray[i] == 'bb') {
            result = numArrayInt[operationArray.indexOf('/')] / numArrayInt[operationArray.indexOf('/') + 1]
            finalresult /= result

        } else if (calculationArray[i] == 'ca') {
            result = numArrayInt[operationArray.indexOf('%')]
            finalresult %= result

        } else if (operationArray[i] == '+') {
            if (operationArray.length > 1) {
                result += numArrayInt[i]
            } else {
                result = numArrayInt[i] + numArrayInt[i + 1]
            }
        } else if (operationArray[i] === '-') {
            if (operationArray.length > 1) {
                result = numArrayInt[i] - numArrayInt[i + 1]
                numArrayInt.slice(i)
            } else {
                result -= numArrayInt[i]
            }

        }

        document.getElementById('inputBox').innerHTML = result
        console.log(result, numArrayInt, operationArray, calculationArray)

    }
}
    function Pemdas() {
        for (let i = 0; i < operationArray.length; i++) {
            switch (operationArray[i]) {
                case '(':
                    queue.push('a');
                    break;
                case '*':
                    queue.push('ba');
                    break;
                case '/':
                    queue.push('bb');
                    break;
                case '%':
                    queue.push('ca');
                    break;
                case '+':
                    queue.push('da');
                    break;
                case '-':
                    queue.push('db');
                    break;
            }
        }
        Calculate()
    }