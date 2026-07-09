let result;
let answerBox = [];
let i = -1
let stringBox = ''
let regex = new RegExp("^([-+/*]\d+(\.\d+)?)*");
let flag = regex.test(stringBox)
let intBox = 0
function addNum(value) {
    answerBox.push(value)
    unseperated = answerBox.join()
    stringBox = answerBox.join('')
    document.getElementById('inputBox').innerHTML = stringBox;
    i++
    console.log(answerBox, i, stringBox, flag)
}


function clearAll() {
    document.getElementById('inputBox').innerHTML = ''
    answerBox = []
    unseperated = answerBox.join()
    stringBox = answerBox.join('')
    i = -1
    console.log(answerBox, i, stringBox, flag)
}
function backspace() {
    answerBox.splice(i,1)
    unseperated = answerBox.join()
    stringBox = answerBox.join('')
    i = i - 1
    if (i < -1) {
        i = -1
    }
    document.getElementById('inputBox').innerHTML = stringBox;
    console.log(answerBox, i, stringBox, flag)
}

function Add() {
    intBox = parseInt(stringBox)
    flag = regex.test(intBox)

    if (regex.test(stringBox)) {
        i++
        answerBox.push(' + ')
        stringBox = answerBox.join('')
        document.getElementById('inputBox').innerHTML = stringBox;
    }
    else {
        console.log('+ already exists')
    }

    console.log(answerBox, i, stringBox, flag)
}

function Subtract() {
    intBox = parseInt(stringBox)
    flag = regex.test(intBox)

    if (regex.test(stringBox)) {
        i++
        stringBox = answerBox.join('')
        document.getElementById('inputBox').innerHTML = stringBox;
    }
    else {
        console.log('- already exists')
    }

    console.log(answerBox, i, stringBox, flag)
}



function Equals() {
    
}
