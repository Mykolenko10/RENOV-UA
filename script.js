// Функция для изменения изображения в зависимости от ширины экрана
function changeImageBasedOnWidth() {
    const imgElement = document.getElementById('aboutImg');
    const windowWidth = window.innerWidth; // Получаем ширину окна
    const windowHeight = window.innerHeight;

    // Устанавливаем изображения в зависимости от ширины экрана
    if (windowWidth < 481) {
        imgElement.src = '../img/Group 387.png'
    } if (windowWidth < 756) {
        imgElement.src = '../img/Group 4 small.png'
    } else if (windowWidth < 1025 && windowHeight > 800) {
        imgElement.src = '../img/Group 4 small.png';     // Для экранов меньше 1200px
    } else if (windowWidth < 1220) {
        imgElement.src = '../img/Group 3 small.png';     // Для экранов меньше 1200px
    } else if (windowWidth < 1370) {
        imgElement.src = '../img/Group 3.png';           // Для экранов меньше 1460px
    } else if (windowWidth < 1640) {
        imgElement.src = '../img/Group 4.png';           // Для экранов меньше 1460px
    } else {
        imgElement.src = '../img/Group 2.png';     // Для экранов больше 1460px
    }
}

// Выполняем функцию при изменении размера окна
window.addEventListener('resize', changeImageBasedOnWidth);

// Выполняем функцию при загрузке страницы
window.addEventListener('load', changeImageBasedOnWidth);

// Функция для открытия модального окна
// Получаем элементы
const modal = document.querySelector('.modal'); // Модальное окно
const requestCallButton = document.querySelector('.requestForACall'); // Кнопка открытия модального окна
const closeModalButton = document.querySelector('.close'); // Крестик закрытия

// Функция для открытия модального окна
const openModal = () => {
    modal.style.display = 'flex'; // Показываем модальное окно
    document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
};

// Функция для закрытия модального окна
const closeModal = () => {
    modal.style.display = 'none'; // Скрываем модальное окно
    document.body.style.overflow = ''; // Включаем прокрутку страницы
};

// Обработчик клика на кнопку "REQUEST FOR A CALL"
requestCallButton.addEventListener('click', openModal);

// Обработчик клика на крестик закрытия
closeModalButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне его содержимого
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
  
// Функция для открытия/закрытия меню
function toggleMenu() {
    document.querySelector('.side-menu').classList.toggle('open');
}

// Функция для закрытия меню при клике на крестик
document.querySelector('.side-menu .close-menu').addEventListener('click', function() {
    document.querySelector('.side-menu').classList.remove('open');
});