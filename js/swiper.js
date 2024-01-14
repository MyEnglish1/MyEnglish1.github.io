


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





// // Старый код речи. не устраивает произношение. Сначала получим ссылку на кнопку
// var playButtons = document.getElementsByClassName('button');

// // Затем назначим обработчик события 'click' для каждой кнопки
// Array.from(playButtons).forEach(function(button) {
//     button.addEventListener('click', function() {
//         // Найдем родительский элемент кнопки (карточку)
//         var card = button.closest('.card');

//         // Найдем блок с текстом на английском языке
//         var textBlock = card.querySelector('.stages__item_content_en');

//         // Получим текст из блока
//         var text = textBlock.innerText;

//         // Создадим новый объект SpeechSynthesisUtterance с текстом
//         var utterance = new SpeechSynthesisUtterance(text);

//         // Установим язык речи на английский
//         utterance.lang = 'en-US';

//         // Вызовем Text-to-Speech API для воспроизведения речи
//         window.speechSynthesis.speak(utterance);
//     });
// });





var playButtons = document.getElementsByClassName('button');

Array.from(playButtons).forEach(function(button) {
    button.addEventListener('click', function() {
        var card = button.closest('.card');
        var textBlock = card.querySelector('.stages__item_content_en');
        var text = textBlock.innerText;

        var utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = 'en-GB'; // Установим язык речи на британский английский

        utterance.voice = speechSynthesis.getVoices().find(function(voice) {
            return voice.lang === 'en-GB' && voice.gender === 'male';
        }); // Установим голос на британский мужской

        utterance.rate = 1; // Установим скорость речи

        utterance.pitch = 1; // Установим тон речи

        utterance.volume = 1; // Установим громкость

        window.speechSynthesis.speak(utterance);
    });
});






// Получить ссылки на элементы
var headerTitleChange = document.querySelector('.lesson__header_title_change');
var swiperWrapper = document.querySelector('.swiper-wrapper');

// Обработчик события клика на заголовок
headerTitleChange.addEventListener('click', function() {
  // Получить все слайды
  var slides = swiperWrapper.querySelectorAll('.swiper-slide');

  // Перемешать слайды в случайном порядке
  var shuffledSlides = Array.from(slides).sort(function() { return Math.random() - 0.5; });

  // Очистить контейнер слайдов
  swiperWrapper.innerHTML = '';

  // Добавить перемешанные слайды обратно в контейнер
  shuffledSlides.forEach(function(slide) {
    swiperWrapper.appendChild(slide);
  });
});







document.querySelector('.lesson__header_title_ru').addEventListener('click', function() {
  document.querySelectorAll('.stages__item_content_ru').forEach(function(element) {
      element.style.display = 'block';
  });
  
  document.querySelectorAll('.stages__item_content_en').forEach(function(element) {
      element.style.display = 'none';
  });
});

document.querySelector('.lesson__header_title_en').addEventListener('click', function() {
  document.querySelectorAll('.stages__item_content_ru').forEach(function(element) {
      element.style.display = 'none';
  });
  
  document.querySelectorAll('.stages__item_content_en').forEach(function(element) {
      element.style.display = 'block';
  });
});


