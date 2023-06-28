import Swiper from 'swiper';

export const aboutSlider = () => {
  if (document.querySelector('.about-body__slider')) {
    const swiper = new Swiper('.about-body__slider', {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });
  }
};
