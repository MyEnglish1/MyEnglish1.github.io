
  
const words = {
    "мешкообразный, мешковатый": "baggy",
    "кепка, шапка": "cap",
    "модный, стильный": "fashionable",
    "дамская сумочка": "handbag",
    "одежда для случая": "outfit",
    "кольцо": "ring",
    "сандали": "sandal",
    "просторный, широкий": "loose",
    "стильный": "stylish",
    "тесный": "tight",
    "модный": "trendy",
    "кожа": "leather",
    "шелк": "silk",
    "костюм": "suit",
    "галстук": "tie",
    "повседневный, непарадный": "casual",
    "строгий, формальный": "formal",
    "образцовый": "classic",
    "джинсы": "jeans",
    "очевидный, ясный": "plain",
    "уютный, удобный": "comfortable",
    "непромокаемый": "waterproof",
    "шерсть": "wool",
    "хлопчатобумажная нить": "cotton",
    "значительный, красивый": "handsome",
    "милый, прелестный": "pretty",
    "чудесный": "wonderful",
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

 
  