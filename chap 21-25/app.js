/*********** Chap 21 - 25 ************/

// Task: 1

// var fname = prompt('Enter first name')
// var lname = prompt('Enter last name')
// var fullname = fname + ' ' + lname
// alert('Hello! ' + fullname)


// Task: 2 

// var favPhone = prompt('Enter your favourite phone')
// document.write('My Favorite Phone is: ', favPhone, '<br>')
// document.write('Length of string: ', favPhone.length)


// Task: 3

// var pak = 'Pakistani'
// document.write('String: ', pak, '<br>')
// document.write("Index of 'n' is: ", pak.indexOf('n'))


// Task: 4

// var hw = 'Hello World'
// document.write('String: ', hw, '<br>')
// document.write("Last index of 'l' is: ", hw.lastIndexOf('l'))


// Task: 5

// var pak = 'Pakistani'
// document.write('String: ', pak, '<br>')
// document.write("Character at index 3: ", pak.charAt(3))


// Task: 6

// var fname = prompt('Enter first name')
// var lname = prompt('Enter last name')
// var fullname = fname.concat(' ').concat(lname)
// alert('Hello! '.concat(fullname))


// Task: 7

// var city1 = 'Hyderabad'
// var city2 = city1.replace('Hyder', 'Islam')
// document.write('City: ', city1, '<br>')
// document.write("After replacing: ", city2)


// Task: 8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var message2 = message.replace('and', '&')
// var message2 = message2.replace('and', '&')
// document.write(message, '<br>')
// document.write(message2)

// Task: 9

// var string = '472'
// var number = +string
// document.write('Value: ', string , '<br>')
// document.write('Type: ', typeof string , '<br>')
// document.write('Value: ', number , '<br>')
// document.write('Type: ', typeof number)


// Task: 10

// var user_input = prompt('Enter a string')
// document.write('User Input: ', user_input , '<br>')
// document.write('Upper Case: ', user_input.toUpperCase())


// Task: 11

// var user_input = prompt('Enter a string')
// var toTitleCase = user_input[0].toUpperCase() + user_input.substring(1, user_input.length)
// document.write('User Input: ', user_input , '<br>')
// document.write('Title Case: ', toTitleCase)


// Task: 12

// var num = 35.36
// var string = num.toString().replace('.', '')
// document.write('Number: ', num , '<br>')
// document.write('Result: ', string)


// Task: 13 

// var username = prompt('Enter a username')
// for (var i = 0; i < username.length; i++) {
//     if (username[i] == '@' || username[i] == '.' || username[i] == ',' || username[i] == '!') {
//         alert('Plz enter a valid username')
//     }
// }


// Task: 14 

// a = ["cake", "apple pie", "cookie", "chips", "patties"]
// found = true
// var user_choice = prompt('Welcome! What you want to order!').toLowerCase()
// for (var i = 0; i < a.length; i++) {

//     if (a[i] == user_choice) {
//         alert('Your item is avaliable in our bakery')
//         found = false
//     }
// }

// if (found) {
//     alert('Sorry your item is not avaliable in our bakery')
// }


// Task: 15

// var passwd = prompt('Enter a password')
// document.write('Password: ', passwd, '<br>')

// for (var i = 0; i <= 9; i++) {
//     if (passwd[0] == i) {
//         document.write('Password can not begin with number', '<br>')
//     }
// }

// if (passwd.length < 6) {
//     document.write('Password is at least 6 characters long', '<br>')
// }

// for (var j = 0; j < passwd.length; j++) {
//     for (var i = 32; i <= 47; i++) {
//         if (passwd.charCodeAt(j) == i) {
//             document.write('Only contain alphabets and numbers')
//         }
//     }
//     for (var i = 58; i <= 64; i++) {
//         if (passwd.charCodeAt(j) == i) {
//             document.write('Only contain alphabets and numbers')
//         }
//     }
//     for (var i = 91; i <= 96; i++) {
//         if (passwd.charCodeAt(j) == i) {
//             document.write('Only contain alphabets and numbers')
//         }
//     }
//     for (var i = 123; i <= 126; i++) {
//         if (passwd.charCodeAt(j) == i) {
//             document.write('Only contain alphabets and numbers')
//         }
//     }
// }


// Task: 16

// var university = "University of Karachi";
// var arr = university.split('')
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i], '<br>')
// }


// Task: 17

// var user_input = prompt('Enter a string')
// document.write('User input: ', user_input, '<br>')
// document.write('Last Character: ', user_input.charAt(user_input.length-1))


// Task: 18

// var msg = "The quick brown fox jumps over the lazy dog"
// var msg_arry = msg.split(' ')
// var word = 'the'
// var num = 0

// for(var i=0; i< msg_arry.length; i++){
//     if (msg_arry[i].toLowerCase() === word){
//         num += 1
//     }
// }

// document.write('Text: ', msg, '<br>')
// document.write('There are ', num, ' occurrences of word ', word)
