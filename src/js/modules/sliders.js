import Swiper from 'swiper';

export const aboutSlider = () => {
  if (document.querySelector('.about-body__slider')) {
    const swiper = new Swiper('.about-body__slider', {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });
  }
};
export const discountSlider = () => {
  if (document.querySelector('.discountsCurrent__slider')) {
    const swiper = new Swiper('.discountsCurrent__slider', {
      slidesPerView: 1.1,
      spaceBetween: 4,
      autoHeight: true,

      breakpoints: {
        767: {
          spaceBetween: 12,
        },
        991: {
          spaceBetween: 30,
        },
      },
    });
  }
};
