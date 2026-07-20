let numbers = ''
let numArray = []
let numArrayInt = []
let calculationArray = []
let display = '';
let operationArray = []
let bracketCount = 0;
let result = 0.0;
let queue = []
let finalresult = [];
let Continue = false

function addNum(num) {
    display += num;
    numbers += num
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + operationArray, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function backspace() {
    display = display.slice(0, -1);
    operationArray.pop();
    numArray.pop();
    numArrayInt.pop()
    calculationArray.pop()
    operationArray.pop()
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
    result = 0.0;
    queue = [];
    finalresult = [];
    Continue = false
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
    calculationArray = queue.toSorted()

 for (let i = 0; i < numArray.length; i++) {
        numArrayInt.push(parseFloat(numArray[i]))
    }

    for (let i = 0; i < calculationArray.length; i++) {

        // brackets
        if (calculationArray[i] == 'a') {
            if (i > 0) {

            }
        }

        //
        if (calculationArray[i] == 'b') {

            // multiply
            if (operationArray.indexOf('*') != -1) {
                if (i > 0 || Continue) {
                    if (calculationArray.forEach('b') > 1) {
                        result = numArrayInt[operationArray.indexOf('*')] * numArrayInt[operationArray.indexOf('*') + 1]
                        finalresult.push(result)
                    }
                    else {
                        result = finalresult[0] * numArrayInt[operationArray.indexOf('*') + 1]
                        finalresult.splice(0,1, result)
                    }
                }
                else {
                    result = numArrayInt[operationArray.indexOf('*')] * numArrayInt[operationArray.indexOf('*') + 1]
                    finalresult.splice(0,1, result)
                }
                operationArray.splice(operationArray.indexOf('*'), 1, 'fin')
                console.log(finalresult, i)
            }
            // divide
            else {
                if (i > 0 || Continue) {
                        if (calculationArray.forEach('b') > 1) {
                            result = numArrayInt[operationArray.indexOf('/')] / numArrayInt[operationArray.indexOf('/') + 1]
                            finalresult.push(result)
                        }


                    else {
                        result = finalresult[0] / numArrayInt[operationArray.indexOf('/') + 1]
                        finalresult.splice(0,1, result)
                    }
                }
                else {
                    result = numArrayInt[operationArray.indexOf('/')] / numArrayInt[operationArray.indexOf('/') + 1]
                    finalresult.splice(0,1, result)
                }
                operationArray.splice(operationArray.indexOf('/'), 1, 'fin')
                console.log(finalresult, i)
            }

        }

        // modolus (implement percent instead later)
        if (calculationArray[i] == 'c') {
            if (i > 0 || Continue) {
                result = finalresult[0] % numArrayInt[operationArray.indexOf('%') + 1]
                finalresult.splice(0,1, result)
            }
            else {
                result = numArrayInt[operationArray.indexOf('%')] % numArrayInt[operationArray.indexOf('%') + 1]
                finalresult.splice(0,1, result)
            }
            operationArray.splice(operationArray.indexOf('%'), 1, 'fin')
            console.log(finalresult, i)
        }
        if (calculationArray[i] == 'd') {

            // plus
            if (operationArray.indexOf('+') != -1) {
                if (i > 0 || Continue) {
                    if (finalresult.length > 1) {
                        result = finalresult[0] + finalresult[1]
                        finalresult.splice(0,2,result)
                    }
                    else {
                    result = finalresult[0] + numArrayInt[operationArray.indexOf('+')]
                    finalresult.splice(0, 1, result)
                    }
                }
                else {
                    result = numArrayInt[operationArray.indexOf('+')] + numArrayInt[operationArray.indexOf('+') + 1]
                    finalresult.splice(0,1, result)
                }
                operationArray.splice(operationArray.indexOf('+'), 1, 'fin')
                console.log(finalresult, i)

            }
            // minus
            else {
                if (i > 0 || Continue) {
                    if (operationArray.indexOf('-') == 0) {
                        result = numArrayInt[operationArray.indexOf('-')] - finalresult[0]
                        finalresult.splice(0, 1, result)
                    }
                    else if (finalresult.length > 1) {
                        result = finalresult[0] - finalresult[1]
                        finalresult.splice(0,2, result)
                    }
                    else {
                        result =  finalresult[0] - numArrayInt[operationArray.indexOf('-') + 1]
                        finalresult.splice(0,1, result)
                    }
                }
                else {
                    result = numArrayInt[operationArray.indexOf('-')] - numArrayInt[operationArray.indexOf('-') + 1]
                    finalresult.splice(0,1, result)
                }
                operationArray.splice(operationArray.indexOf('-'), 1, 'fin')
                console.log(finalresult, i)
            }
        }
    }

    display = finalresult[0]
    console.log(finalresult, numArrayInt, operationArray, calculationArray)
    document.getElementById('inputBox').innerHTML = '= ' + display

    numArrayInt = []
    numArray = []
    calculationArray = []
    operationArray = []
    Continue = true

}
    function Pemdas() {
        numArray.push(numbers)
        for (let i = 0; i < operationArray.length; i++) {
            switch (operationArray[i]) {
                case '(':
                    queue.push('a');
                    break;
                case '*':
                    queue.push('b');
                    break;
                case '/':
                    queue.push('b');
                    break;
                case '%':
                    queue.push('c');
                    break;
                case '+':
                    queue.push('d');
                    break;
                case '-':
                    queue.push('d');
                    break;
            }
        }
        Calculate()
    }