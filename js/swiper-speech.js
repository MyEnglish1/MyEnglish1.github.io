// Ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // 1. Создаем слайды
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Перебираем все фразы
    Object.entries(phrases).forEach(([eng, ru]) => {
        // Создаем HTML для слайда
        const slideHTML = `
        <div class="swiper-slide">
          <div class="card">
            <div class="card__face card__face--front">
              <div class="stages__item_content stages__item_content_w100 stages__item_content_en">${eng}</div>
              <div class="stages__item_content stages__item_content_w100 stages__item_content_ru">${ru}</div>
            </div>
            <div class="card__face card__face--back">
              <div class="stages__item_audio stages__item_audio_m0">
                <button class="button">Play</button>
              </div>
              <div class="stages__item_content stages__item_content_w100 stages__item_content_eng">${eng}</div>
              <div class="stages__item_content stages__item_content_w100 stages__item_content_rus">${ru}</div>
            </div>
          </div>
        </div>`;

        // Добавляем слайд в контейнер
        swiperWrapper.insertAdjacentHTML('beforeend', slideHTML);
    });

    // 2. Инициализируем Swiper ПОСЛЕ создания всех слайдов
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed: 1600,

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
        }
    });
});

// Обработчик для кнопок воспроизведения
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('button')) {
        const button = e.target;
        const card = button.closest('.card');
        const text = card.querySelector('.stages__item_content_en').textContent;

        if (button.classList.contains('button__stop')) {
            // Остановка воспроизведения
            window.speechSynthesis.cancel();
            button.textContent = 'Play';
            button.classList.remove('button__stop');
        } else {
            // Запуск воспроизведения
            button.textContent = 'Stop';
            button.classList.add('button__stop');
            speakText(text, button);
        }
    }
});

// Функция синтеза речи
function speakText(text, button) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.8;

    // Поиск подходящего голоса
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find(v => v.lang === 'en-GB' && v.name.includes('')) || voices[0];

    // Обработчики событий
    utterance.onend = () => {
        button.textContent = 'Play';
        button.classList.remove('button__stop');
    };

    utterance.onerror = () => {
        button.textContent = 'Play';
        button.classList.remove('button__stop');
    };

    // Запуск синтеза
    window.speechSynthesis.speak(utterance);
}


// Панель управления повторами
const panelHTML = `
    <div class="panel">
      <label for="replay">Повторений</label>
      <input id="replay" type="range" min="1" max="10" step="1" value="1">
      <output for="replay">1</output>
    </div>`;
document.querySelector('.swiper').insertAdjacentHTML('beforeend', panelHTML);

// Обработчик для ползунка
document.getElementById('replay').addEventListener('input', function (e) {
    document.querySelector('output[for="replay"]').textContent = e.target.value;
});

