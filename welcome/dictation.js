const words = {
  	'абсолютно': 'absolutely',
  	'довольный, счастливый': 'delighted',
  	'в любом случае': 'anyway',
  	'может быть': 'maybe',
  	'точно, определенно': 'definitely',
  	'вероятно, наверное': 'probably',
  	'house-warming': 'house-warming',
  	'сумасшедший': 'crazy',
  	'великолепный': 'gorgeous',
  	'довольный': 'glad',
  	'красивый': 'beautiful',
  	'чудесный': 'wonderful',
  	'туалет': 'restroom',
  	'красивый, прекрасный': 'lovely',
  	'принимать гостей': 'host',
  	'надеяться': 'hope',
  	'очень, на самом деле': 'really',
  	'вкусный': 'delicious',
  	'только что, прямо,': 'just',
  	'вряд-ли': 'unlikely',
  	'готовый': 'ready',
  	'удивленный': 'surprised',
  	'восхитительный': 'delightful',
  	'приятный': 'enjoyable',
  	'бензин, газолин': 'petrol',
  	'довольный': 'pleased',
  	' вкусный': 'tasty',
  	'дорогой': 'dear',


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