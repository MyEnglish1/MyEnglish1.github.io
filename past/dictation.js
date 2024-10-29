const words = {
  	'покидать, уезжать': 'leave',
  	'чистить, очищать': 'clean',
  	'присматривать, присмотреть': 'watch',
  	'мыть': 'wash',
  	'назад': 'ago',
  	'ездить, ехать ': 'drive',
  	'приводить, доставлять': 'bring',
  	'вор': 'thief',
  	'убивать': 'murder',
  	'где-то, где-нибудь, ': 'somewhere',
  	'кто-нибудь, кто-то': 'someone',
  	'кое-что, что-нибудь,': 'something',
  	'костер': 'campfire',
  	'тропа': 'trail',
  	'волк': 'wolf',
  	'убивать, лишать жизни': 'kill',
  	'полиция': 'police',
  	'воровать, красть': 'steal',
  	'рюкзак': 'backpack',
  	'медведь': 'bear',
  	'сапоги': 'boot',
  	'коттедж': 'cabin',
  	'олень': 'deer',
  	'змея': 'snake',
  	'палатка': 'tent',
  	'звонить, ': 'call',
  	'отглаженный': 'iron',
  	'вчера': 'yesterday',
  	'арестовывать, задерживать': 'arrest',
  	'преступление, правонарушение': 'crime',

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