

const words = {
  "funny": "забавный, смешной",
  "easy": "легкий, несложный",
  "cold": "холодный, неприветливый, равнодушный",
  "hard": "трудный, тяжелый",
  "read": "читать",
  "aggressive": "агрессивный",
  "remark": "замечание",
  "comment": "комментарий",
  "mention": "упоминать, ссылаться",
  "usually": "обычно",
  "generally": "в целом",
  "possible": "вероятный, возможный",
  "postpone": "откладывать",
  "investigate": "расследовать",
  "resolve": "разрешать, разрешить",
  "attend": "посещать",
  "respond": "отвечать, ответить",
  "actually": "на самом деле",
  "warm": "теплый",
  "fun": "забавный, радость",
  "really": "очень, на самом деле",
  "pretty": "хорошенький",
  "very": "очень",
  "so": "настолько",
  "rather": "довольно",
  "quite": "довольно, вполне",
  "insurance": "страховка",
  "supplier": "поставщик",
  "seem": "казаться, представляться"
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
