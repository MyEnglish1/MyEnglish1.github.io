


const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // меняем точки будеты на цифры и вместо bullets пишем fraction
    type: 'fraction',
    // clickable: true,
    // dynamicBullets: true,
  },
  initialSlide: 0,
  grabCursor: true,
  // сколько выводить слайдеров
  slidesPerView: 3,
  // отступы между слайдами
  spaceBetween: 30,
  // количество пролистываемых слайдов
  slidesPerGroup: 1,
  // бесконечный слайдер
  // loop: true,
  // кол-во дублирующих слайдов
  // loopedSlides:3,
  // скорость прокрутки


  speed: 1600,
  // автопрокрутка
  // autoplay: {
  //   // пауза между прокруткой
  //   delay: 3000,
  //   // заканчивать на последнем слайде
  //   stopOnLastSlide: true,
  //   // отключение после ручного переключения 
  //   disableOnInteraction: false,
  // },

  breakpoints: {

    320: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },

  },

  mousewheel: {
    sensitivity: 1,

  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

});

var playButtons = document.getElementsByClassName('button');

Array.from(playButtons).forEach(function (button) {
  button.addEventListener('click', function () {
    if (button.classList.contains('button__stop')) {
      button.textContent = 'Play';
      button.classList.remove('button__stop');
      window.speechSynthesis.cancel(); // Stop speech synthesis
    } else {
      button.textContent = 'Stop';
      button.classList.add('button__stop');

      var card = button.closest('.card');
      var textBlock = card.querySelector('.stages__item_content_en');
      var text = textBlock.innerText;

      var delay = 2500; // Задержка в миллисекундах между повторениями

      var utterance = new SpeechSynthesisUtterance(text);

      utterance.lang = 'en-US'; // Установим язык речи на британский английский

      utterance.voice = speechSynthesis.getVoices().find(function (voice) {
        return voice.lang === 'en-US' && voice.gender === 'male';
      }); // Установим голос на британский мужской

      utterance.rate = 0.8; // Установим скорость речи

      utterance.pitch = 1; // Установим тон речи

      utterance.volume = 1; // Установим громкость

      var updateRepeatCount = function () {
        var rangeInput = document.getElementById('replay');
        var output = document.querySelector('output[for="replay"]');
        var count = parseInt(rangeInput.value);
        output.textContent = count;
        return count;
      };

      var repeat = function (count) {
        if (count <= 0) {
          button.textContent = 'Play'; // Change button text when speech synthesis is finished
          button.classList.remove('button__stop');
          return;
        }

        if (button.classList.contains('button__stop')) {
          window.speechSynthesis.speak(utterance);
          setTimeout(function () {
            repeat(count - 1);
          }, delay);
        }
      };

      var panel = document.createElement('div');
      panel.className = 'panel';
      panel.innerHTML = `
              <label for="replay">Повторений</label>
              <input id="replay" type="range" min="1" max="10" step="1" value="1">
              <output for="replay">1</output>
            `;
      document.body.appendChild(panel);

      var rangeInput = panel.querySelector('input');
      var output = panel.querySelector('output');

      rangeInput.addEventListener('input', function () {
        var count = updateRepeatCount();
      });

      updateRepeatCount(); // Initialize repeatCount

      repeat(updateRepeatCount());
    }
  });
});




// // var playButtons = document.getElementsByClassName('button');

// // Array.from(playButtons).forEach(function(button) {
// //     button.addEventListener('click', function() {
// //         var card = button.closest('.card');
// //         var textBlock = card.querySelector('.stages__item_content_en');
// //         var text = textBlock.innerText;

// //         var repeatCount = 10; // Количество повторений
// //         var delay = 2500; // Задержка в миллисекундах между повторениями

// //         var utterance = new SpeechSynthesisUtterance(text);

// //         utterance.lang = 'en-GB'; // Установим язык речи на британский английский

// //         utterance.voice = speechSynthesis.getVoices().find(function(voice) {
// //             return voice.lang === 'en-GB' && voice.gender === 'male';
// //         }); // Установим голос на британский мужской

// //         utterance.rate = 0.9; // Установим скорость речи

// //         utterance.pitch = 1; // Установим тон речи

// //         utterance.volume = 1; // Установим громкость

// //         var repeat = function(count) {
// //             if (count <= 0) return;

// //             window.speechSynthesis.speak(utterance);

// //             setTimeout(function() {
// //                 repeat(count - 1);
// //             }, delay);
// //         };

// //         repeat(repeatCount);
// //     });
// // });










// Получить ссылки на элементы
var headerTitleChange = document.querySelector('.lesson__header_title_change');
var swiperWrapper = document.querySelector('.swiper-wrapper');

// Обработчик события клика на заголовок
headerTitleChange.addEventListener('click', function () {
  // Получить все слайды
  var slides = swiperWrapper.querySelectorAll('.swiper-slide');

  // Перемешать слайды в случайном порядке
  var shuffledSlides = Array.from(slides).sort(function () { return Math.random() - 0.5; });

  // Очистить контейнер слайдов
  swiperWrapper.innerHTML = '';

  // Добавить перемешанные слайды обратно в контейнер
  shuffledSlides.forEach(function (slide) {
    swiperWrapper.appendChild(slide);
  });
});








document.querySelector('.lesson__header_title_ru').addEventListener('click', function () {
  document.querySelectorAll('.stages__item_content_ru').forEach(function (element) {
    element.style.display = 'block';
  });

  document.querySelectorAll('.stages__item_content_en').forEach(function (element) {
    element.style.display = 'none';
  });
});

document.querySelector('.lesson__header_title_en').addEventListener('click', function () {
  document.querySelectorAll('.stages__item_content_ru').forEach(function (element) {
    element.style.display = 'none';
  });

  document.querySelectorAll('.stages__item_content_en').forEach(function (element) {
    element.style.display = 'block';
  });
});


