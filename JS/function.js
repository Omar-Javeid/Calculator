let numbers = ''
let numArray = []
let numArrayInt = []
let display = '';
let calculateArr = []
let bracketCount = 0;
let result = 0;

function addNum(num) {
    display += num;
    numbers += num
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function backspace() {
    display = display.slice(0, -1);
    display = display.trimEnd();
    calculateArr.pop()
    numArray.pop()
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function clearAll() {
    numbers = ''
    numArray = []
    numArrayInt = []
    display = '';
    calculateArr = []
    bracketCount = 0;
    result = 0;
    document.getElementById('inputBox').innerHTML = ''
    console.log('display: ' + display,'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Add() {
    numArray.push(numbers)
    numbers = '';
    display += ' + '
    calculateArr.push('+')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Subtract() {
    numArray.push(numbers)
    numbers = '';
    display += ' - '
    calculateArr.push('-')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Percent() {
    numArray.push(numbers)
    numbers = '';
    display += '% '
    calculateArr.push('%')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Divide() {
    numArray.push(numbers)
    numbers = '';
    display += ' ÷ '
    calculateArr.push('/')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Multiply() {
    numArray.push(numbers)
    numbers = '';
    display += ' x '
    calculateArr.push('*')
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display,'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}

function Brackets() {
    bracketCount++
    if (bracketCount % 2) {
        display += '('
        calculateArr.push('(')
    } else {
        display += ')'
        calculateArr.push(')')
    }
    document.getElementById('inputBox').innerHTML = display
    console.log('display: ' + display, 'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray)
}


function Calculate() {
    numArray.push(numbers)
    
    for (let i = 0; i < numArray.length; i++) {
        numArrayInt.push(parseFloat(numArray[i]))
    }

    for (let i = 0; i < calculateArr.length; i++) {

        if (calculateArr[i] == '(') {

        }

        if (calculateArr[i] == '%') {
            if (calculateArr[i] == calculateArr[i - 1]) {
                result %= numArrayInt[i]
                numArrayInt.splice(i-1,1,result)
            } else {
                result = numArrayInt[i] % numArrayInt[i + 1]
                numArrayInt.splice(i,1,result)
            }
            result %= result
        }

        if (calculateArr[i] == '*') {
            result = 1
            if (calculateArr[i] == calculateArr[i - 1]) {
                result *= numArrayInt[i]
                numArrayInt.splice(i-1,1,result)
            } else {
                result = numArrayInt[i] * numArrayInt[i + 1]
                numArrayInt.splice(i,1,result)
            }
            result = result
        }



        if (calculateArr[i] == '/') {
            result = 1
            if (calculateArr[i] == calculateArr[i - 1]) {
                result /= numArrayInt[i]
                numArrayInt.splice(i-1,1,result)
            } else {
                result = numArrayInt[i] / numArrayInt[i+1]
                numArrayInt.splice(i,1,result)
            }
            result /= result
        }


        if (calculateArr[i] == '+') {
            if (calculateArr[i] == calculateArr[i - 1]) {
                result += numArrayInt[i]
                numArrayInt.splice(i-1,1,result)
            } else {
                result = numArrayInt[i] + numArrayInt[i + 1]
                    .splice(i,1,result)
            }
            result += result
        }


        if (calculateArr[i] == '-') {
            if (calculateArr[i] == calculateArr[i - 1]) {
                result -= numArrayInt[i]
                numArrayInt.splice(i-1,1,result)
            } else {
                result = numArrayInt[i] - numArrayInt[i + 1]
                numArrayInt.splice(i,1,result)
            }
            result = result
        }
        console.log(numArrayInt[i] + ' ' + calculateArr[i] + ' ' + numArrayInt[i+1] + ' = ' + result, i, numArrayInt)
        
    }
    document.getElementById('inputBox').innerHTML = '= ' + numArrayInt[0]
    console.log('display: ' + display, 'calculation array: ' + calculateArr, 'numbers: ' + numbers, 'numArray:  ' + numArray, 'Result: ' + result)
}
let order = [];
function Pemdas() {
    for (let i = 0; i < calculateArr.length; i++) {
        if (calculateArr[i] == '(') {
            order.push('(')
        }
        if (calculateArr[i] == '*') {
            order.push('*')
        }
        if (calculateArr[i] == '/') {
            order.push('/')
        }
        if (calculateArr[i] == '%') {
            order.push('%')
        }
        if (calculateArr[i] == '+') {
            order.push('+')
        }
        if (calculateArr[i] == '-') {
            order.push('-')
        }
    }
}