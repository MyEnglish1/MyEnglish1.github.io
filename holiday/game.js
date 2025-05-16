

const words = {
  "definitely": "точно, определенно",
  "entertaining": "развлекательный",
  "exactly": "в точности, точно",
  "different": "непохожий, другой",
  "dull": "скучный, занудный",
  "funny": "забавный, смешной",
  "gorgeous": "великолепный",
  "hideous": "ужасный",
  "last": "продолжаться, длиться",
  "ordinary": "обычный, обыкновенный",
  "special": "особенный, специальный",
  "busy": "занятой, оживленный",
  "free": "свободный, незанятый",
  "poor": "скромный, жалкий, ничтожный",
  "wonderful": "чудесный",
  "incredible": "невероятный",
  "awful": "страшный, ужасный",
  "crowded": "переполненный, тесный",
  "during": "в течение, во время",
  "serious": "важный",
  "same": "такой же, одинаковый",
  "quiet": "тихий, безлюдный",
  "noisy": "шумный, неспокойный",
  "cake": "кекс, пирожное, торт",
  "gift": "подарок",
  "snack": "легкая закуска",
  "soda": "газированная вода",
  "wine": "вино",
  "amazing": "удивительный",
  "beer": "пиво"
};




const keys = Object.keys(words);
let currentKey;

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function updateContent() {
  currentKey = getRandomElement(keys);
  const correctValue = words[currentKey];

  const enDiv = document.querySelector('.stages__item_content.stages__item_content_w100.stages__item_content_en');
  enDiv.textContent = currentKey;

  const allBrDivs = document.querySelectorAll('.stages__item_content.stages__item_content_w100.stages__item_content_br');

  const randomIndex = Math.floor(Math.random() * allBrDivs.length);
  allBrDivs[randomIndex].textContent = correctValue;

  const values = Object.keys(words).filter(key => key !== currentKey).map(key => words[key]);

  allBrDivs.forEach((div, index) => {
    if (index !== randomIndex) {
      div.textContent = getRandomElement(values);
    }
    div.onclick = () => checkAnswer(div, div.textContent);
  });
}

function checkAnswer(div, selectedValue) {
  const correctCountDiv = document.querySelector('.lesson__header_right');
  const wrongCountDiv = document.querySelector('.lesson__header_wrong');
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popupMessage');

  if (selectedValue === words[currentKey]) {
    correctCountDiv.textContent = parseInt(correctCountDiv.textContent) + 1; // Increment correct answers

    popup.style.display = 'block'; // Show popup
    div.style.backgroundColor = "#008000";
    setTimeout(() => {
      div.style.backgroundColor = "";
      popup.style.display = 'none'; // Hide popup
      updateContent();
    }, 1500);
  } else {
    wrongCountDiv.textContent = parseInt(wrongCountDiv.textContent) + 1; // Increment wrong answers
    div.style.backgroundColor = "#ff0000";
    setTimeout(() => div.style.backgroundColor = "", 500);
  }
}

// Initial call to set content
updateContent();
