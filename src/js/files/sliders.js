/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	if (document.querySelector('.template4__slider')) {
		new Swiper('.template4__slider', {
			modules: [Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 16,
			autoHeight: true,
			speed: 300,
			direction: 'vertical',
			mousewheel: {
				sensitivity: 1,
			},
			centeredSlides: true,
			initialSlide: 2,
			loop: true,

			// События
			on: {
			}
		});
	}

	if (document.querySelector('.template7__slider')) {
		new Swiper('.template7__slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.template7 .swiper-pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.template7 .swiper__arrow_left',
				nextEl: '.template7 .swiper__arrow_right',
			},


			// Брейкпоинты

			breakpoints: {
				574.98: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				767.98: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				991.98: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.template21__slider')) {
		new Swiper('.template21__slider', {
			modules: [],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 16,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Брейкпоинты

			breakpoints: {
			},

			// События
			on: {
				574.98: {
					spaceBetween: 21,
				},
			}
		});
	}

	if (document.querySelector('.template39__slider')) {
		new Swiper('.template39__slider', {
			modules: [],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Брейкпоинты

			breakpoints: {
				574.98: {
					slidesPerView: 2,
				},
				767.98: {
					slidesPerView: 3,
				},
				991.98: {
					slidesPerView: 4,
				},
			},

			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});