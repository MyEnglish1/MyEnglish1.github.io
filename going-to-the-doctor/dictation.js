const words = {
     "жидкость": "liquid",
     "кровь": "blood",
     "давление": "pressure",
     "аптека": "pharmacy",
     "заполнить": "fill",
     "пилюля, таблетка": "pill",
     "потребность, аппетит": "appetite",
     "эффект, результат": "effect",
     "имеющий тяжелые последствия": "serious",
     "рвота": "vomit",
     " медицинская сестра": "nurse",
     "рецепт": "prescription",
     "аллергический": "allergic",
     "ушибаться": "bruise",
     "страховать": "cover",
     "диарея, понос": "diarrhea",
     "головокружительный": "dizzy",
     "дозировка": "dosage",
     "страховой полис": "insurance",
     "жар, лихорадка": "fever",
     "кашель": "cough",
     "больной, воспаленный": "sore",
     "горло": "throat",
     "головная боль": "headache",
     "симптом": "symptom",
     "грипп": "flu",
     "лекарство": "medication",
     "медицина, терапия": "medicine",
     "вызывающий тошноту": "nauseous",
     "вывихнуть": "sprain",


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