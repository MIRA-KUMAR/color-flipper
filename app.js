const colors = ["red", "blue", "green", "#f1f5f8"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
    // console.log(document.body);
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}