

const words = {
  "company": "компания, фирма, товарищество, общество",
  "read": "читать, прочитать",
  "April": "апрель",
  "August": "август",
  "birthday": "день рождения",
  "computer game": "компьютерная игра",
  "dance": "танец",
  "December": "декабрь, календарный месяц",
  "February": "февраль",
  "go out": "выходить",
  "January": "январь",
  "July": "июль",
  "June": "июнь",
  "March": "март",
  "May": "май",
  "movie": "кинокартина, кинофильм, фильм",
  "November": "ноябрь",
  "October": "октябрь",
  "September": "сентябрь",
  "sing": " петь, напевать",
  "a.m.": "до полудня",
  "afternoon": "время после полудня, дневное время",
  "apartment": "квартира",
  "check": "проверять",
  "evening": "вечер",
  "late": "поздно, поздний, опаздывать",
  "meeting": "встреча",
  "midnight": "полночь",
  "morning": "утро, первая половина дня",
  "noon": "полдень",
  "p.m.": "после полудня",
  "study": "заниматься, учиться",
  "time": "время",
  "work": "работа",
  "internet": "Internet",
  "ride": "ехать, поехать",
  "sleep": "засыпать, спать",
  "surf": "заниматься серфингом",
  "tennis": "теннис"

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
