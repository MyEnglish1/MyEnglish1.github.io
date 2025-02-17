const words = {
    "забавный, смешной": "funny",
    "легкий, несложный": "easy",
    "холодный, неприветливый, равнодушный": "cold",
    "трудный, тяжелый": "hard",
    "читать": "read",
    "агрессивный": "aggressive",
    "замечание": "remark",
    "комментарий": "comment",
    "упоминать, ссылаться": "mention",
    "обычно": "usually",
    "в целом": "generally",
    "вероятный, возможный": "possible",
    "откладывать": "postpone",
    "расследовать": "investigate",
    "разрешать, разрешить": "resolve",
    "посещать": "attend",
    "отвечать, ответить": "respond",
    "на самом деле": "actually",
    "теплый": "warm",
    "забавный, радость": "fun",
    "очень, на самом деле": "really",
    "хорошенький": "pretty",
    "очень": "very",
    "довольно": "rather",
    "довольно, вполне": "quite",
    "страховка": "insurance",
    "поставщик": "supplier",
    "казаться, представляться": "seem",

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