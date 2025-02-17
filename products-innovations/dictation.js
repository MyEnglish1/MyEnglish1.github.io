const words = {
    "возврат": "refund",
    "политика": "policy",
    "революционизировать": "revolutionize",
    "вернуть": "return",
    "причина": "cause",
    "результат": "result",
    "эффект, результат": "effect",
    "бюджетный": "budget",
    "выбор, альтернатива, вариант": "option",
    "диапазон": "range",
    "аксессуары": "accessory",
    "ремень": "strap",
    "кабель": "cable",
    "распоряжение": "instruction",
    "коробка, ящик": "case",
    "зарядное устройство": "charger",
    "сравнивать": "compare",
    "доступный": "available",
    "чек": "receipt",
    "скользить, двигаться плавно": "slide",
    "карта": "card",
    "чек": "check",
    "подпись": "signature",
    "налог": "tax",
    "кассир": "cashier",
    "нажимать": "press",
    "описывать": "describe",
    "выдумывать": "invent",
    "производить": "produce",

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