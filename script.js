function add(a,b){
    return a + b
}
function subtract(a,b){
    return a - b
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    return a / b
}
function operateDecimal(operator,a,b){
    if(operator === '+') return add(a,b).toFixed(2)
    if(operator === '-') return subtract(a,b).toFixed(2)
    if(operator === '*') return multiply(a,b).toFixed(2)
    if(operator === '/') return divide(a,b).toFixed(2)
}
function operate(operator,a,b){
    if(operator === '+') return add(a,b)
    if(operator === '-') return subtract(a,b)
    if(operator === '*') return multiply(a,b)
    if(operator === '/') return divide(a,b)
}
function clear(){
    div.textContent = ''
    array = []
}
function removeLastEntry(array){
        array.pop()
        newArray = array.join('')
        div.textContent = newArray
    }
function equal(array){
    if(array[0] !== '-'){
        
        operator = array.find(element => Number.isInteger(parseInt(element)) ===false && element !== '.')
        operator = operator.toString()
        
        for(let i = 0;i< array.length;i++){
            if(array[i] === operator){
                num1 = array.splice(0,i)
                num1 = num1.join('')
                num1 = parseFloat(num1)
                array.shift()
                num2 = array.join('')
                num2 = parseFloat(num2)
            }
        }
        if(operator == '/' && num2 === 0){
            alert('Can\'t divide by 0')
            clear()
        }
        else if(num1 % 1=== 0 && num2 % 1 === 0){
            div.textContent = operate(operator,num1,num2)
        }
        
        else{
            div.textContent = operateDecimal(operator,num1,num2)
        }
        
    }
    else{
        array.shift()
        operator = array.find(element => Number.isInteger(parseInt(element)) ===false && element !== '.')
        operator = operator.toString()
        for(let i = 0;i< array.length;i++){
            if(array[i] === operator){
                num1 = array.splice(0,i)
                num1 = num1.join('')
                num1 = parseFloat(num1) * -1
                array.shift()
                num2 = array.join('')
                num2 = parseFloat(num2)
            }
        }
        if(num1 % 1=== 0 && num2 % 1 === 0){
            div.textContent = operate(operator,num1,num2)
        }
        else{
            div.textContent = operateDecimal(operator,num1,num2)
        }
    }
    
}
function reverse(array){
    if(array[0] === '-'){
        array.shift()
        var newArray = array.join('')
        div.textContent = newArray
    }
    else{
        array.unshift('-')
        var newArray = array.join('')
        div.textContent = newArray
    }
}
var div = document.querySelector('div')
div.classList.add('content')
var numbers = document.querySelectorAll('button')
var array = []
var num1 = ''
var num2 = ''
var operator = ''
numbers.forEach(number => number.addEventListener('click', (e)=>{
    if(e.target.id === 'number' || e.target.id === 'operator') array.push(e.target.textContent)
    
    if(e.target.textContent === 'C') clear()
    else if (e.target.textContent === '+/-') reverse(array)

    else if (e.target.textContent === 'CE') removeLastEntry(array)
        
    else if (e.target.textContent === '=') equal(array)
    else { 
        div.textContent += e.target.textContent
    }
    
}))