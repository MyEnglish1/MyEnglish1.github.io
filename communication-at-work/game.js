

const words = {
    update: "новый выпуск",
    well: "хорошо",
    outgoing: "общительный",
    anyone: "кто-нибудь",
    anything: "что-нибудь",
    reliable: "надежный",
    stupid: "глупый, тупой",
    organized: "организованный",
    fast: "быстрый, скорый",
    hard: "трудный, утомительный, тяжелый",
    shy: "робкий, стеснительный",
    good: "достойный, добропорядочный",
    for: "для, ради",
    wonder: "удивляться, дивиться",
    surprise: "заставать врасплох",
    worry: "беспокоиться, волноваться",
    say: "говорить, сказать, произносить",
    reason: "причина",
    tell: "рассказывать, рассказать",
    further: "добавочный, дальнейший",
    expect: "ожидать, рассчитывать, надеяться, предполагать",
    hire: 'наем, прокат',
    honest: "честный",
    item: "пункт, параграф, статья",
    since: "с, начиная с, с тех пор как",
    summarize: "суммировать, подводить итог",
    agenda: "повестка дня",
    ambitious: "амбициозный",
    clever: "умный, сметливый"
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
  
  // Initial call to set content
  updateContent();

  
  
  