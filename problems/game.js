


  
  
const words = {
  "addicted": "зависимый",
  "alcoholic": "алкоголик",
  "morale": "моральное состояние",
  "offensive": "обидный",
  "sloppy": "неряшливый",
  "solution": "раствор, решение",
  "overweight": "полный",
  "problem": "проблема",
  "break": "нарушать",
  "quit": "покидать",
  "begin": "начинать",
  "disorganized": "неорганизованный",
  "lazy": "ленивый",
  "flexible": "гибкий",
  "employee": "служащий",
  "cost": "цена",
  "theft": "кража",
  "argumentative": "склонный поспорить",
  "communication": "коммуникация",
  "competition": "конкуренция",
  "deadline": "крайний срок",
  "financial": "финансовый",
  "innovation": "нововведение",
  "insomnia": "бессонница",
  "lack": "недостаток",
  "marital": "брачный"
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
