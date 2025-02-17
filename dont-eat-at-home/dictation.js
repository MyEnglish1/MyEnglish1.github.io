const words = {
    "шоколадное пирожное": "brownie",
    "капучино": "cappuccino",
    "спаржа": "asparagus",
    "дикий": "wild",
    "кусок мяса, стейк": "steak",
    "креветка": "shrimp",
    "салат": "salad",
    "кукуруза, зерно": "corn",
    "боб, фасоль": "bean",
    "печь, выпекать": "bake",
    "раздавливать": "mash",
    "картофель": "potato",
    "соус, заправка, повязка": "dressing",
    "масло": "oil",
    "уксус": "vinegar",
    "чек": "check",
    "счет": "bill",
    "чизкейк": "cheesecake",
    "эспрессо": "espresso",
    "пудинг": "pudding",
    "расщеплять": "split",
    "открытый пирог": "tart",
    "вегетарианец": "vegan",
    "обезжиренный": "fat-free",
    "лазанья": "lasagna",
    "местный": "local",
    "с низким содержанием жира": "low-fat",
    "органический, живой": "organic",


};

let currentValue;
let correctCount = 0;
let wrongCount = 0;

function getRandomWord() {
    const values = Object.keys(words);
    currentValue = values[Math.floor(Math.random() * values.length)];
    document.getElementById('wordDisplay').textContent = currentValue;
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim();
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const popupImg = document.getElementById('popupImg');

    if (userInput === words[currentValue]) {
        // Правильный ответ
        correctCount++;
        document.querySelector('.lesson__header_right').textContent = correctCount;

        popupMessage.textContent = '';
        popupImg.src = 'correct-image-url.jpg'; // Замените на URL вашей картинки
        popup.style.display = 'block';

        setTimeout(() => {
            popup.style.display = 'none';
        }, 1000); // Закрываем всплывающее окно через 1 секунду

        getRandomWord();
    } else {
        // Неправильный ответ
        wrongCount++;
        document.querySelector('.lesson__header_wrong').textContent = wrongCount;


        alert('Неправильно! Правильный ответ: ' + words[currentValue]);

        setTimeout(() => {
            popup.style.display = 'none';
        }, 1000); // Закрываем всплывающее окно через 1 секунду

        getRandomWord();
    }
    document.getElementById('userInput').value = '';
}

getRandomWord();