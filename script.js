// script.js
(function() {
    // === ПАРАЛЛАКС ЭФФЕКТ ===
    const container = document.getElementById('parallaxContainer');
    const image = document.getElementById('parallaxImage');
    
    if (container && image) {
        let ticking = false;
        
        function updateParallax() {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Насколько контейнер виден (0 - 1)
            const visiblePercent = (windowHeight - rect.top) / (windowHeight + rect.height);
            const progress = Math.max(0, Math.min(1, visiblePercent));
            
            // Движение фото (от -10% до +10%)
            const imageShift = 25 * (progress - 0.5);
            image.style.transform = `translateY(${imageShift}%)`;

            // Добавьте движение для календаря (если элемент существует)
            const calendarOverlay = document.getElementById('calendarOverlay');
            if (calendarOverlay) {
                const calendarShift = 20 * (1 - progress);
                calendarOverlay.style.transform = `translateY(${calendarShift}px)`;
            }
            
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
        
        window.addEventListener('resize', function() {
            window.requestAnimationFrame(updateParallax);
        });
        
        updateParallax();
    }

    // === ОБРАБОТКА ССЫЛОК-ЗАГЛУШЕК ===
    const rsvp = document.getElementById('rsvp-link');
    const wish = document.getElementById('wishlist-link');
    
    if (rsvp && rsvp.getAttribute('href') === '#') {
        rsvp.addEventListener('click', (e) => {
            e.preventDefault();
            alert('🔗 Вставьте ссылку на Google Форму (опрос "приду/не приду").\n\nНайдите href="#" у кнопки RSVP и замените на актуальный URL.');
        });
    }
    
    if (wish && wish.getAttribute('href') === '#') {
        wish.addEventListener('click', (e) => {
            e.preventDefault();
            alert('🎁 Добавьте ссылку на вишлист в атрибут href.\n\nПример: href="https://example.com/wishlist"');
        });
    }

    // === ПРОВЕРКА ЗАГРУЗКИ ФОТО (опционально) ===
    const photoDiv = document.getElementById('parallaxImage');
    if (photoDiv) {
        const bgImage = new Image();
        const bgUrl = window.getComputedStyle(photoDiv).backgroundImage.slice(5, -2);
        if (bgUrl && bgUrl.includes('YOUR_GOOGLE_DRIVE_IMAGE_ID')) {
            // Ничего не делаем, фото не заменили — оставляем как есть
        } else if (bgUrl) {
            bgImage.src = bgUrl;
            bgImage.onerror = function() {
                photoDiv.style.backgroundColor = '#604B30';
                photoDiv.style.backgroundImage = 'none';
                console.log('Не удалось загрузить фото с Google Диска');
            };
        }
    }
    // ДОБАВЬТЕ ЭТОТ КОД В ФАЙЛ script.js (внутри основного блока (function() { ... }) )

    // === ОБРАТНЫЙ ОТСЧЕТ ДО СВАДЬБЫ ===
    function updateCountdown() {
        // Дата свадьбы: 17 июля 2026, 17:30
        const weddingDate = new Date(2026, 6, 17, 17, 30, 0); // Месяцы в JS от 0: 6 = июль
        
        const now = new Date();
        const diff = weddingDate - now;
        
        if (diff <= 0) {
            // Если дата уже прошла
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        // Расчет дней, часов, минут, секунд
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Обновление DOM с добавлением ведущего нуля
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Запускаем таймер и обновляем каждую секунду
    updateCountdown();
    setInterval(updateCountdown, 1000);
})();

    // Данные для слайдов (можно легко заменить на свои)
const slides = [
    {
        image: 'https://drive.google.com/thumbnail?id=1vSzat6yauTRbL4WtuKGisAlif4luOD_I&sz=w1000',
        caption: 'Динозавр'
    },
    {
        image: 'https://drive.google.com/thumbnail?id=152-noc-nOB7jXhbc3E0TYx6DB1huj_ov&sz=w1000',
        caption: 'Риба'
    },
    {
        image: 'https://drive.google.com/thumbnail?id=1wwxOGwDwBR3cXvzXQsanpHh-sAHHiOt3&sz=w1000',
        caption: 'поле'
    },
    {
        image: 'https://drive.google.com/thumbnail?id=1zow_gD7j7sijI_-mb8Du7znpYiVuwH4V&sz=w1000',
        caption: 'театр'
    },
     {
        image: 'https://drive.google.com/thumbnail?id=1I5VC6fnJUe9mc4W22X1mgh7hWDWzmAw3&sz=w1000',
        caption: 'парк'
    },
    {
        image: 'https://drive.google.com/thumbnail?id=1M3yLAKyzB0A08Cti-vUJCq5eWBLtGMvt&sz=w1000',
        caption: 'диплом'
    },       
    {
        image: 'https://drive.google.com/thumbnail?id=1kSQQi5Nue_tHtDETE01DPW0eylCeCj6c&sz=w1000',
        caption: 'снежок'
    },
    {
        image: 'https://drive.google.com/thumbnail?id=1HoQhpSgspGvQ806dNMVFzf1Niit2Yje8&sz=w1000',
        caption: 'зеркало'
    },
];

// Состояние карусели
let currentSpeed = 20; // секунд на полный цикл

// Получаем элементы DOM
const track = document.getElementById('infiniteTrack');
const pauseBtn = document.getElementById('pauseInfiniteBtn');
const speedSlider = document.getElementById('speedSlider');

/**
 * Создает слайды и дублирует их для бесконечного эффекта
 */
function createInfiniteSlides() {
    // Создаем оригинальные слайды
    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'infinite-slide';
        slideDiv.innerHTML = `
            <img src="${slide.image}" alt="Slide ${index + 1}"></div>
            `;
        track.appendChild(slideDiv);
    });
    
    // Дублируем слайды для бесконечного эффекта
    // Это создает эффект бесконечной ленты без видимых разрывов
    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'infinite-slide';
        slideDiv.innerHTML = `
            <img src="${slide.image}" alt="Slide ${index + 1} duplicate"></div>
        `;
        track.appendChild(slideDiv);
    });
}


/**
 * Инициализирует карусель
 */
function initInfiniteCarousel() {
    createInfiniteSlides();
    
    // Добавляем обработчик для отслеживания завершения циклов анимации
    track.addEventListener('animationiteration', () => {
        // Этот обработчик срабатывает при каждом завершении цикла анимации
        // Можно использовать для дополнительной логики, если необходимо
        console.log('Цикл анимации завершен');
    });
}

// Запускаем карусель после загрузки страницы
document.addEventListener('DOMContentLoaded', initInfiniteCarousel);