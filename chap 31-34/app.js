/*********** Chap 31 - 34 ************/

// Task: 1 

// var date = new Date()
// document.write(date)


// Task: 2 

// var date = new Date()
// var month_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// alert(`Current month: ${month_arr[date.getMonth()]}`)


// Task: 3 

// var date = new Date()
// var day_arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',]
// alert(`Current month: ${day_arr[date.getDay()]}`)


// Task: 4

// var date = new Date()
// if (date.getDay() == 0 || date.getDay() == 6)
//     document.write('Its Fun day.')


// Task: 5 

// var date = new Date()
// if (date.getDate() < 16)
//     document.write('First fifteen days of the month.')
// else
//     document.write('Last fifteen days of the month.')


// Task: 6

// var date = new Date()
// document.write(`Current date: ${date} <br>
// Elasped milliseconds since January 1, 1970: ${date.getTime()} milliseconds <br>
// Elasped minutes since January 1, 1970: ${date.getTime() / (1000 * 60)} minutes
// `)


// Task: 7 

// var date = new Date()
// time = date.getHours()

// if (time > 11)
//     document.write("It's PM")
// else
//     document.write("It's AM")


// Task: 8

// var laterDate = new Date('12/31/2020')
// document.write(`Later Date: ${laterDate}`)


// Task: 9

// var startOfRamzan = new Date('5/23/2020')
// var today = new Date()
// var days = parseInt((today.getTime() - startOfRamzan.getTime()) / (1000 * 60 * 60 * 24))
// document.write(`${days} days has passed since 1st Ramzan 2020`) 



// Task: 10

// var startDec = new Date('1/1/2020')
// var refDate = new Date('12/5/2020 22:50:16')
// var seconds = parseInt((refDate.getTime() - startDec.getTime()) / (1000 * 60))
// document.write(`${seconds} seconds has passed since beginning 2020`)


// Task: 11

// var date = new Date()
// document.write(`Current date: ${date} <br>`)

// date.setHours(date.getHours() - 1)

// document.write(`1 hour ago, it was ${date}`)


// Task: 12

// var date = new Date()
// var date2 = new Date()
// date2.setFullYear(date.getFullYear() - 100)

// alert(`
// Current date: ${date} \n
// 100 year ago, it was ${date2}`
// )



// Task: 13 

// var age = +prompt('Enter your age.')
// var date = new Date()
// document.write(`
//     Your age is: ${age}
//     Your birth year is: ${date.getFullYear() - age}
// `)


// Task: 14

// var custName = 'Muhammad Saleem Raza'
// var currMonth = 'June'
// var noOfUnits = 200
// var charPerUnit = 6.50
// var latePay = 0
// var netAmtPay = noOfUnits * charPerUnit
// var grsAmtPay = netAmtPay + latePay

// document.write(`

//     <h2>K-Electric Bill</h2>

//     Customer name: <strong>${ custName }</strong> <br>
//     Current month: <strong>${ currMonth }</strong> <br>
//     Number of units: <strong>${ noOfUnits }</strong> <br>
//     Charges per unit: <strong>${ charPerUnit }</strong> <br><br>
//     Net amount payable (within Due Date): <strong>${ netAmtPay }</strong> <br>
//     Late payment surcharge: <strong>${ latePay}</strong> <br>
//     Gross Amount Payable (after Due Date): <strong>${ grsAmtPay }</strong>
// `)

