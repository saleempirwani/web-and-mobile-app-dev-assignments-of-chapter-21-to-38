/*********** Chap 35 - 38 ************/


// Task: 1

function showDate() {
    var date = new Date()
    document.write(date)
}

// showDate()



// Task: 2

function greet(fname, lname) {
    document.write(`Hello! ${fname} ${lname}`)
}

// greet('Saleem', 'Raza')



// Task: 3

function add() {
    var no1 = +prompt('Enter a num 1')
    var no2 = +prompt('Enter a num 2')

    return no1 + no2
}

// ans = add()
// document.write(`Sum: ${ans}`)



// Task: 4

function calc() {
    var no1 = +prompt('Enter a num 1')
    var no2 = +prompt('Enter a num 2')
    var oper = prompt('Enter a operator (+, -, *, /, %)')

    if (oper === '+')
        return no1 + no2

    else if (oper === '-')
        return no1 - no2

    else if (oper === '*')
        return no1 * no2

    else if (oper === '/')
        return no1 / no2

    else if (oper === '%')
        return no1 % no2

    else
        console.log('Invalid things occurred')

}

// ans = calc()
// document.write(`Answer: ${ans}`)



// Task: 5

function square(num) {
    document.write(`Square of ${num} is ${Math.pow(num, 2)}`)
}

// square(5)



// Task: 6

function fact(num) {

    fact = 1
    no = num
    for (var i = 0; i < num; i++) {

        if (no > 0) {
            fact *= no
            no--
        }
    }

    document.write(`Factorial of ${num} is ${fact}`)
}

// fact(3)



// Task: 7

function counting() {
    var st = +prompt('Enter a start no')
    var lt = +prompt('Enter a last no')

    for (var i = st; i <= lt; i++) {
        document.write(`${i} `)
    }
}

// counting()



// Task: 8


function calculateHypotenuse(base, perp) {

    function calculateSquare(hypo) {
        return Math.sqrt(hypo)
    }

    var h = Math.pow(base, 2) + Math.pow(perp, 2)

    return calculateSquare(h)
}

// document.write(`Right angle triangle: ${calculateHypotenuse(3, 4)}`)



// Task: 9

function area(w, h) {

    return w * h
}

// document.write(`Area: ${area(5, 5)}`)



// Task: 10

function palidrome(text) {

    revString = ''
    for (var i = text.length - 1; i >= 0; i--) {
        revString += text[i]
    }

    if (text === revString) {
        document.write(`${text} is a palidrome string <br>.`)
    }
    else {
        document.write(`${text} is a not palidrome string.`)
    }
}

// palidrome('madam')
// palidrome('hello')


// Task: 11


function toTitleCase(text) {

    textArr = text.split(' ')
    textNew = ''
    for (var i = 0; i < textArr.length; i++) {
        textNew += `${textArr[i][0].toUpperCase()}${textArr[i].substring(1)} `
    }

    document.write(`${text} <br> ${textNew}`)
}

// titleCase('the quick brown fox')

// Task: 12

function findLongestString(text) {

    textArr = text.split(' ')
    long = textArr[0].length
    index = 0
    for (var i = 1; i < textArr.length; i++) {

        if (long < textArr[i].length) {
            long = textArr[i].length
            index = i
        }
    }

    document.write(`
        ${text} <br>
        Longest text: ${textArr[index]}
    `)
}

// findLongestString('Web Development Tutorial')



// Task: 13

function letterCounter(text, letter) {

    count = 0
    for (var i = 0; i < text.length; i++) {

        if (letter === text[i]) {
            count++
        }
    }

    document.write(`The no. of letter "${letter}" in "${text}" is ${count}`)
}

// letterCounter('JSResourceS.com', 'o')



// Task: 14

function calcCircumference(r){
    circum = 2 * Math.PI * r
    document.write(`The circumference of circle is ${circum.toFixed(2)} <br>`)
}

function calcArea(r){
    area = Math.PI * Math.pow(r, 2)
    document.write(`The Area of circle is ${area.toFixed(2)}`)
}

// var radius = 25
// calcCircumference(radius)
// calcArea(radius)