// Generating Random Numbers using Math.random()

////! generating random numbers between 1 to 6 like DICE Game
// let n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n)



////! LOVE CALCULATOR 
// const firstPerson = prompt("Enter your name ")
// const secondPerson = prompt("Enter your lover name ")
// let loverPercentage = Math.random();
// loverPercentage = loverPercentage * 100
// loverPercentage = Math.floor(loverPercentage) + 1

// if (loverPercentage > 80) {
//     alert(firstPerson + " Love " + secondPerson + " " + loverPercentage + "%" + " like kenya loves kenya ")
// } else {
//     alert(firstPerson + " Love " + secondPerson + " " + loverPercentage + "%")
// }

////! Calculating The Leap Year 

// const year = prompt("Enter the year")
// if (year % 4 == 0 || year % 100 == 1) {
//     alert("This " + year + " is a leap Year.")
// } else {
//     alert("This " + year + " is not a leap Year.")
// }

// function isLeap(year) {

//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//             if (year % 400 == 0) {
//                 alert("Is a leap Year.")
//             } else {
//                 alert("Is not a leap Year.")
//             }
//         } else {
//             alert("Is  a leap Year.")
//         }
//     } else {
//         alert("Is not a leap Year.")
//     }
// }

// let years = prompt('Enter the year')
// isLeap(years)


////! ARRAYS 
// let guestList = ['Angela', 'Jack', 'Pam', 'James', 'lara', 'Jason']
// let guestName = prompt("Enter the guest name")
// if (guestList.includes(guestName)) {
//     alert("Welcome! " + guestName)
// } else {
//     alert("Sorry! " + guestName + "  you are not in the guest List")
// }


////! FIZZBUZZ PROGRAM

// let outPut = []
// let count = 1

// function fizzBuzz() {

//     if (count % 3 === 0 && count % 5 === 0) {
//         outPut.push('FizzBuzz')
//     } else if (count % 5 === 0) {
//         outPut.push('Buzz')
//     } else if (count % 3 === 0) {
//         outPut.push('Fizz')
//     } else {

//         outPut.push(count)
//     }
//     count++

//     console.log(outPut)
// }

// fizzBuzz()



//////! GENERATING RANDOM NAMES From AN ARRAY 
// //?? Simple Games who going to buy us lunch today
// const names = ['Angela', 'Jack', 'Pam', 'James', 'lara', 'Jason', 'Kejgon', 'Laa']

// function randomPerson(name) {


//     let numberOfperson = names.length
//     let randomPersonPosition = Math.floor(Math.random() * numberOfperson)
//     let personName = names[randomPersonPosition]

//     return personName + " is going to buy lunch today ";
// }

// console.log(randomPerson(names))


//////////////////////! LOOPS ///////////////////
//??????? FizzBuzz using while loop
////! FIZZBUZZ PROGRAM
// let outPut = []
// let count = 1

// function fizzBuzz() {
//     while (count <= 100) {
//         if (count % 3 === 0 && count % 5 === 0) {
//             outPut.push('FizzBuzz')
//         } else if (count % 5 === 0) {
//             outPut.push('Buzz')
//         } else if (count % 3 === 0) {
//             outPut.push('Fizz')
//         } else {
//             outPut.push(count)
//         }
//         count++
//     }
//     console.log(outPut)
// }
// fizzBuzz()



////!       99 Bottles of Beer Game      /////

// let countBottles = 99
// function beersGame() {
//     while (countBottles >= 0) {
//         let countWord = "bottle";
//         if (countBottles === 1) {
//             countWord = "bottles";
//         }
//         console.log(countBottles + " " + countWord + "  of beer on the wall " + countBottles + " " + countWord + " of beer, " + "Take one down, pass it around, ");
//         countBottles--
//         console.log(countBottles + " " + countWord + " of beer on the wall.")
//     }
// }
// beersGame()

// let numberOfBottles = 99;
// function beersBottles() {
//     while (numberOfBottles >= 0) {
//         let bottlesWord = "bottle";
//         if (numberOfBottles === 1) {
//             bottlesWord = "bottles"

//         } else if (numberOfBottles <= 0) {
//             bottlesWord = "No more bottles of beer on the wall.";
//         } else {

//             console.log(numberOfBottles + " " + bottlesWord + "  of beer on the wall");
//             console.log(numberOfBottles + " " + bottlesWord + " of beer, ");
//             console.log("Take one down, pass it around, ")

//         }
//         numberOfBottles--


//         console.log(numberOfBottles + " " + bottlesWord + " of beer on the wall.")
//     }


// }
// beersBottles()


////////! FIBOANCCI NUMBERS  GENERATOR PROGRAM !/////////

function fibOANCI(num) {
    let outPut = []
    if (num == 1) {
        outPut = [0]
    } else if (num == 2) {
        outPut = [1]
    } else {
        outPut = [0, 1]

        for (let i = 2; i < num; i++) {
            outPut.push(outPut[outPut.length - 2] + outPut[outPut.length - 1])
        }
    }
    return outPut
}

const fibO = fibOANCI(3)
console.log(fibO)



