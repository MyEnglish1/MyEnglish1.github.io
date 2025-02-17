const words = {
    "простой, базовый": "basic",
    "груда, кипа, масса": "bulk",
    "уточнить, прояснить": "clarify",
    "контракт, договор": "contract",
    "долговечный, прочный": "durable",
    "громадный, гигантский": "enormous",
    "счет, фактура": "invoice",
    "марка, модель": "model",
    "вести переговоры": "negotiate",
    "предложение": "offer",
    "потерпеть крах, обанкротиться": "crash",
    "продуктивный, производительный": "productive",
    "гибкий, гнущийся, мягкий": "flexible",
    "старомодный, устаревший": "old-fashioned",
    "надежный, заслуживающий доверия": "dependable",
    "мощный, крепкий, сильный": "powerful",
    "скидка, уменьшение цены": "discount",
    "завершать, заканчивать": "finalize",
    "принять": "accept",
    "целая сумма": "total",
    "обслуживание": "service",
    "подтверждать": "confirm",
    "улучшать, улучшить": "upgrade",
    "продавец, продавщица": "vendor",
    "предварительный": "preliminary",
    "процесс, ход развития": "process",
    "серьезный, веский": "solid",
    "особенный, специфический": "specific",
    "норма, стандарт": "standard",


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