(function (){
    
    // Бургер

    document.addEventListener('DOMContentLoaded', () => {
        const burgerIcon = document.querySelector('.burger-icon');
        const body = document.body;
    
        // Убедитесь, что меню закрыто при загрузке страницы
        if (window.innerWidth <= 900) {
            body.classList.remove('body--opened-menu'); // Убираем класс при маленьком экране
        }
    
        // Обработчик клика на бургер-иконку
        burgerIcon.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем переход по ссылке
            body.classList.toggle('body--opened-menu'); // Переключаем класс
        });
    
        // Закрытие меню при клике вне его области
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header__nav') && !e.target.closest('.burger-icon')) {
                body.classList.remove('body--opened-menu'); // Убираем класс
            }
        });
    
        // Закрытие меню при ресайзе окна
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                body.classList.remove('body--opened-menu'); // Убираем класс при ширине больше 900px
            }
        });
    });

    //
    // Функция для получения текущего смещения в зависимости от разрешения экрана
function getScrollOffset() {
    const width = window.innerWidth; // Получаем ширину окна
    let offset;

    if (width < 480) {
        offset = 450; // Для экранов меньше 480px
    } else if (width < 768) {
        offset = 600; // Для экранов меньше 768px
    } else if (width < 1250) {
        offset = 600; // Для экранов меньше 1250px
    } else {
        offset = 400; // Для остальных экранов
    } 

    return offset;
}

// Слушатель для кнопок слайдера properties
document.querySelector('.properties__arrow--left').addEventListener('click', () => {
    const slider = document.querySelector('.properties__slider');
    const offset = -getScrollOffset(); // Отрицательное смещение для прокрутки влево
    slider.scrollBy({ left: offset, behavior: 'smooth' });
});

document.querySelector('.properties__arrow--right').addEventListener('click', () => {
    const slider = document.querySelector('.properties__slider');
    const offset = getScrollOffset(); // Положительное смещение для прокрутки вправо
    slider.scrollBy({ left: offset, behavior: 'smooth' });
});

// Слушатель для кнопок слайдера reviews
document.querySelector('.reviews__arrow--left').addEventListener('click', () => {
    const slider = document.querySelector('.review__slider');
    const offset = -getScrollOffset(); // Отрицательное смещение для прокрутки влево
    slider.scrollBy({ left: offset, behavior: 'smooth' });
});

document.querySelector('.reviews__arrow--right').addEventListener('click', () => {
    const slider = document.querySelector('.review__slider');
    const offset = getScrollOffset(); // Положительное смещение для прокрутки вправо
    slider.scrollBy({ left: offset, behavior: 'smooth' });
});
    









    document.addEventListener("DOMContentLoaded", () => {
        const thumbnails = document.querySelectorAll(".thumbnail");
        const largeImages = document.querySelectorAll(".large-image");
        const dots = document.querySelectorAll(".dot");
        const prevButton = document.querySelector(".control-button.prev");
        const nextButton = document.querySelector(".control-button.next");
    
        let currentIndex = 0;
    
        // Функция для активации изображения и точки
        function setActiveImage(index) {
            thumbnails.forEach((thumbnail, i) => {
                thumbnail.classList.remove("active");
                largeImages[i].classList.remove("active");
                dots[i].classList.remove("active");
            });
    
            thumbnails[index].classList.add("active");
            largeImages[index].classList.add("active");
            dots[index].classList.add("active");
            currentIndex = index;
        }
    
        // Переключение по клику на миниатюры
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener("click", () => {
                setActiveImage(index);
            });
        });
    
        // Переключение по кнопкам
        prevButton.addEventListener("click", () => {
            const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            setActiveImage(newIndex);
        });
    
        nextButton.addEventListener("click", () => {
            const newIndex = (currentIndex + 1) % thumbnails.length;
            setActiveImage(newIndex);
        });
    
        // Инициализация первого изображения
        setActiveImage(0);
    });
    
    
    
    
})()




