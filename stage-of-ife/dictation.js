const words = {
    "тратить, расходовать": "spend",
    "мнение, слово": "say",
    "компенсация, возмещение": "compensation",
    "удивляться, дивиться": "wonder",
    "удобный, расслабленный": "comfortable",
    "захватывать, схватить": "grab",
    "поздний завтрак": "brunch",
    "население, жители": "population",
    "развитый, мощный": "developed",
    "средний": "average",
    "борьба, бороться": "struggle",
    "возраст": "age",
    "отрасль, промышленность": "industry",
    "выглядеть, казаться": "look",
    "звучать": "sound",
    "чувствовать, ощущать": "feel",
    "финансовый": "financial",
    "оптимистический, оптимистичный": "optimistic",
    "выйти на пенсию": "retire",
    "карьера, служебный рост": "career",
    "перемена, изменение": "change",
    "продвижение по службе, рекламирование": "promotion",
    "казаться, представляться": "seem",
    "дополнительное / добавочное время": "overtime",
    "ответственность, обязанность": "responsibility",
    "положительный": "positive",
    "инвестирование": "investment",
    "спорный вопрос, проблема": "issue",
    "сомневаться, быть неуверенным": "doubt",


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