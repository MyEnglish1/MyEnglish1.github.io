const words = {
    'решать': 'decide',
    'предлагать, подсказывать': 'suggest',
    'выбирать': 'choose',
    'согласен': 'agree',
    'лучший, наилучший': 'better',
    'возбуждающий, волнующий': 'exciting',
    'далеко': 'far',
    'честный': 'honest',
    'команда': 'team',
    'сооружать, строить': 'build',
    'так': 'so',
    'наибольший': 'most',
    'лучший, наилучший': 'best',
    'самый дальний': 'farthest',
    'дешевый, недорогой': 'cheap',
    'ближний, близлежащий': 'near',
    'дорогой, ценный': 'expensive',
    'проектор, кинопроектор': 'projector',
    'встреча': 'meeting',
    'оборудование': 'facility',
    'отдел, департамент': 'department',
    'место встречи': 'venue',
    'презентация': 'presentation',
    'рекомендовать': 'recommend',
    'собрание, конференция': 'conference',
    'упоминать, ссылаться': 'mention',
    'обсуждать':  'discuss',
    'настоящий': 'true',

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