// const img1 = document.querySelectorAll('.img1');
// const img2 = document.querySelectorAll('.img2');

// let numberOfImages = img1.length;

let randomNumber1 = Math.floor(Math.random() * 6) + 1 // 1 => 6

let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png
let randomImageSourse = "images/" + randomDiceImage // images/dice1.png => images/dice1.png

let images1 = document.querySelectorAll('img')[0]
images1.setAttribute('src', randomImageSourse)


let randomNumber2 = Math.floor(Math.random() * 6) + 1 // 1 => 6

let randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png
let randomImageSourse2 = "images/" + randomDiceImage2 // images/dice1.png => images/dice1.png

let images2 = document.querySelectorAll('img')[1]
images2.setAttribute('src', randomImageSourse2)

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 WIN ";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 WIN ";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector('h1').innerHTML = "Its a Draw! ";

}

btn = document.querySelector('button');
btn.addEventListener('click', function () {
    location.reload();
})


// console.log(img1[randomImages])
// document.querySelector('#images').innerHTML = img1[randomImages]
// // document.write(img1[randomImages])















// for (let i = 1; i < 7; i++) {
//     let randomDice = Math.random();
//     randomDice = Math.floor(randomDice * i)
//     console.log(randomDice)
// }