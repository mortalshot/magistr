// Подключение функционала 
import { isMobile, menuClose, removeClasses } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Обработка кликов по странице
document.addEventListener('click', function (e) {
   const targetElement = e.target;

   // Показываем выпадающее меню при клике на стрелку
   if (window.innerWidth > 767.98) {
      if (targetElement.classList.contains('menu__arrow')) {
         targetElement.closest('.menu__item').classList.toggle('_hover');
      }
      if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
         removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
      }
   }

   // Закрываем меню при клике на "Закрыть"
   if (targetElement.classList.contains('menu-close') || targetElement.closest('.menu-close')) {
      menuClose();
   }

   // Клик по info
   if (targetElement.classList.contains('info__button') || targetElement.closest('.menu-info__button')) {
      targetElement.closest('.info').classList.toggle('_active');
   }
   if (!targetElement.closest('.info__button') && document.querySelectorAll('.info._active').length > 0) {
      removeClasses(document.querySelectorAll('.info._active'), "_active");
   }

   // Открываем фильтр на мобилках
   if (targetElement.classList.contains('filter-collapse__button') || targetElement.closest('.filter-collapse__button')) {
      targetElement.closest('.filter-collapse').classList.add('_active');
      document.documentElement.classList.add('popup-show');
   }
   if (targetElement.classList.contains('filter-collapse__close') || targetElement.closest('.filter-collapse__close')) {
      targetElement.closest('.filter-collapse').classList.remove('_active');
      document.documentElement.classList.remove('popup-show');
   }

   // Открываем уведомления в админке
   if (targetElement.classList.contains('admin-notifications__button') || targetElement.closest('.admin-notifications__button')) {
      e.preventDefault();
      targetElement.closest('.admin-notifications').classList.add('_active');
   }
   if (!targetElement.closest('.admin-notifications__button') && document.querySelectorAll('.admin-notifications._active').length > 0) {
      document.querySelector('.admin-notifications._active').classList.remove('_active');
   }
})

// Когда страница загрузилась
window.addEventListener('DOMContentLoaded', function () {
   const template1 = document.querySelector('.template1');
   const mainHeader = this.document.querySelector('.main-header')
   if (template1) {
      template1.style.setProperty('--header-height', `${mainHeader.offsetHeight}px`);
   }

   const rangeInputs = document.querySelectorAll('input[type="range"]')

   function handleInputChange(e) {
      let target = e.target
      if (e.target.type !== 'range') {
         target = document.getElementById('range')
      }
      const min = target.min
      const max = target.max
      const val = target.value

      target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
   }

   rangeInputs.forEach(input => {
      input.addEventListener('input', handleInputChange)
   })

})