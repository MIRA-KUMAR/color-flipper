const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = '#';

    for(let i = 0; i < 6; i ++) {
        hexColor += hex[getRandomNumber()];
    }
    
    document.body.style.backgroundColor = hexColor;

    if (hexColor == '#E67E22') {
        color.textContent = '#Lotus Forever!';
    }
    else if (hexColor == '#F1C40F' || hexColor == '#F7DC6F' || hexColor == '#F4D03F') {
        color.textContent = '#CSK Forever!';
    }
    else if (hexColor == '#6C3483' || hexColor == '#7D3C98' || hexColor == '#8E44AD') {
        color.textContent = '#Purple Army!';
    }
    else {
        color.textContent = hexColor;
    }
})

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}