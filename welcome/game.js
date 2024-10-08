
const words = {
  'absolutely':	'абсолютно',
  'delighted':	'довольный, счастливый',
  'anyway':	'в любом случае',
  'maybe':	'может быть',
  'definitely':	'точно, определенно',
  'probably':	'вероятно, наверное',
  'house-warming':	'house-warming',
  'crazy':	'сумасшедший',
  'gorgeous':	'великолепный',
  'glad':	'довольный',
  'beautiful':	'красивый',
  'wonderful':	'чудесный',
  'restroom':	'туалет',
  'lovely':	'красивый, прекрасный',
  'host':	'принимать гостей',
  'hope':	'надеяться',
  'really':	'очень, на самом деле',
  'delicious':	'вкусный',
  'just':	'только что',
  'unlikely':	'вряд-ли',
  'ready':	'готовый',
  'surprised':	'удивленный',
  'delightful':	'восхитительный',
  'enjoyable':	'приятный',
  'petrol':	'бензин, газолин',
  'pleased':	'довольный',
  'tasty':	' вкусный',
  'dear':	'дорогой',


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
    
    // Set background color to #aaa for all designated divs
    // allBrDivs.forEach(div => div.style.backgroundColor = "#aaa");
  
    const randomIndex = Math.floor(Math.random() * allBrDivs.length);
    allBrDivs[randomIndex].textContent = correctValue;
  
    const values = Object.keys(words).filter(key => key !== currentKey).map(key => words[key]);
    
    allBrDivs.forEach((div, index) => {
        if (index !== randomIndex) {
            div.textContent = getRandomElement(values);
        }
        div.onclick = () => checkAnswer(div, div.textContent); // Pass the div to checkAnswer
    });
  }
  
  function checkAnswer(div, selectedValue) {
    if (selectedValue === words[currentKey]) {
        setTimeout(updateContent, 1000); // Load new key and values after delay
  
        div.style.backgroundColor = "#008000"; 
        setTimeout(() => div.style.backgroundColor = "", 800); // Reset background after 1 sec
    } else {
        div.style.backgroundColor = "#ff0000"; // Set background to red
        setTimeout(() => div.style.backgroundColor = "", 500); // Reset background after 1 sec
    }
  }
  function checkAnswer(div, selectedValue) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    
    if (selectedValue === words[currentKey]) {
        popupMessage.textContent = '';
        popup.style.display = 'block';
        
        setTimeout(() => {
            popup.style.display = 'none';
            updateContent(); // Загружаем новые слова после показа всплывающего окна
        }, 1000); // Скрыть popup через 1 секунду

        div.style.backgroundColor = ""; 
        setTimeout(() => div.style.backgroundColor = "", 800); 
    } else {
        div.style.backgroundColor = "#ff0000";
        setTimeout(() => div.style.backgroundColor = "", 500);
    }
}


  // Initial call to set content
  updateContent();

  
  
  