import { ItcCustomSelect } from './itc-select.js';
import Swiper, { Pagination, Autoplay, Navigation, Thumbs } from 'swiper';
import JustValidate from 'just-validate';
import Inputmask from '../../../node_modules/inputmask/dist/inputmask.es6.js';
import noUiSlider from 'nouislider';

export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

// (gist - b47008824b0175d587f9acbc51892319)

export const anchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger');
    const menu = document.querySelector('.header-body__btns');
    const body = document.querySelector('body');

    let toggleBurger = () => {
      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
      } else {
        openBtn.classList.add('active');
        menu.classList.add('active');
        body.classList.add('lock');
      }
    };

    openBtn.addEventListener('click', toggleBurger);
  }
};

export const modal = () => {
  if (document.querySelector('.modal-open-btn')) {
    const openBtn = document.querySelectorAll('.modal-open-btn');
    const modal = document.querySelector('.contactus');
    const modalBg = document.querySelector('.contactus__bg');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.classList.remove('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1320px`;
            item.style.padding = ` 0 20px`;
          });
        }
      } else {
        modal.classList.add('active');
        body.classList.add('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1320 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`;
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
  }
};

export const parallax = () => {
  if (document.documentElement.clientWidth > 1000) {
    // disable script if resolution less than 1000px

    let bg = document.querySelector('.kanuvoye-pomesucud');
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });
  }
};

export const spoilerJQ = () => {
  $(document).ready(function () {
    $('.spoiler__btn').click(function (event) {
      if ($('.services__body').hasClass('one')) {
        $('.spoiler__btn').not($(this)).removeClass('active');
        $('.services__item-content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
  });
};

export const sticky = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the header
  var header = document.getElementById('myHeader');

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
};

export const tabs = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
};

export const tabsCard = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-card-trigger'),
    jsContents = document.querySelectorAll('.js-tab-card-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-card-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-card-trigger._active'),
        activeContent = document.querySelector('.js-tab-card-content._active');

      activeTrigger.classList.remove('_active'); // 1
      trigger.classList.add('_active'); // 2

      activeContent.classList.remove('_active'); // 3
      content.classList.add('_active'); // 4
    });
  });
};

export const tabsOrder = () => {
  if (document.querySelector('._order-form')) {
    let currentContent = 0;
    const contentTitle = document.querySelector('._order-content__title');
    const btnPrev = document.querySelector('._order-btn__prev');
    const btnNext = document.querySelector('._order-btn__next');
    const btnOrder = document.querySelector('._order-btn__order');

    const selectorOrder = document.querySelector('._phone-order-mask');
    Inputmask({ mask: '+7 (999) 999-99-99' }).mask(selectorOrder);

    let isFormSubmit = false;
    const validateCallbackOrder = new JustValidate('._order-form', {
      validateBeforeSubmitting: true,
    });
    validateCallbackOrder
      .addField('._input-email', [
        {
          rule: 'email',
          value: true,
          errorMessage: '',
        },
        {
          rule: 'required',
          value: true,
          errorMessage: '',
        },
      ])
      .addField('._input-name', [
        {
          rule: 'required',
          value: true,
          errorMessage: '',
        },
      ])
      .addField('._input-phone', [
        {
          rule: 'required',
          value: true,
          errorMessage: '',
        },
      ])
      .onValidate((e) => {
        e.isValid ? (isFormSubmit = true) : (isFormSubmit = false);
      })
      .onSuccess((event) => {
        isFormSubmit = true;
      });

    const handleValidate = () => {
      if (
        validateCallbackOrder.fields[1].isValid == false ||
        validateCallbackOrder.fields[1].isValid == undefined
      ) {
        validateCallbackOrder.showErrors({
          '._input-name': '',
        });
      }
      if (
        validateCallbackOrder.fields[2].isValid == false ||
        validateCallbackOrder.fields[2].isValid == undefined
      ) {
        validateCallbackOrder.showErrors({
          '._input-email': '',
        });
      }
      if (
        validateCallbackOrder.fields[3].isValid == false ||
        validateCallbackOrder.fields[3].isValid == undefined
      ) {
        validateCallbackOrder.showErrors({
          '._input-phone': '',
        });
      }
    };

    var jsTriggers = document.querySelectorAll('.js-tab-order-trigger'),
      jsContents = document.querySelectorAll('.js-tab-order-content');
    jsTriggers.forEach(function (trigger, index) {
      trigger.addEventListener('click', function () {
        if (isFormSubmit) {
          var id = this.getAttribute('data-tab'),
            content = document.querySelector(
              '.js-tab-order-content[data-tab="' + id + '"]'
            ),
            activeTrigger = document.querySelector(
              '.js-tab-order-trigger._active'
            ),
            activeContent = document.querySelector(
              '.js-tab-order-content._active'
            );

          activeTrigger.classList.remove('_active');
          trigger.classList.add('_active');

          activeContent.classList.remove('_active');
          content.classList.add('_active');

          currentContent = id - 1;
          if (currentContent == 3) {
            btnNext.classList.add('_disabled');
            btnOrder.classList.remove('_disabled');
            contentTitle.innerHTML = 'Подтверждение заказа';
          } else if (currentContent == 0) {
            btnPrev.classList.add('_disabled');
            btnNext.classList.remove('_disabled');
            btnOrder.classList.add('_disabled');
            contentTitle.innerHTML = 'Платежная информация';
          } else {
            btnOrder.classList.add('_disabled');
            btnNext.classList.remove('_disabled');
            btnPrev.classList.remove('_disabled');

            if (currentContent == 1) {
              contentTitle.innerHTML = 'Доставка';
            } else if (currentContent == 2) {
              contentTitle.innerHTML = 'Оплата';
            }
          }
        } else {
          handleValidate();
        }
      });
    });

    btnNext.addEventListener('click', () => {
      if (isFormSubmit) {
        jsContents.forEach((item, index) => {
          if (item.classList.contains('_active')) {
            jsTriggers[currentContent].classList.remove('_active');
            jsContents[currentContent].classList.remove('_active');

            currentContent = ++index;

            if (currentContent == 3) {
              btnNext.classList.add('_disabled');
              btnOrder.classList.remove('_disabled');
              contentTitle.innerHTML = 'Подтверждение заказа';
            } else if (currentContent == 0) {
              btnPrev.classList.add('_disabled');
              contentTitle.innerHTML = 'Платежная информация';
            } else {
              btnOrder.classList.add('_disabled');
              btnNext.classList.remove('_disabled');
              btnPrev.classList.remove('_disabled');

              if (currentContent == 1) {
                contentTitle.innerHTML = 'Доставка';
              } else if (currentContent == 2) {
                contentTitle.innerHTML = 'Оплата';
              }
            }
          }
        });

        jsTriggers[currentContent].classList.add('_active');
        jsContents[currentContent].classList.add('_active');
      } else {
        handleValidate();
      }
    });
    btnPrev.addEventListener('click', () => {
      if (isFormSubmit) {
        jsContents.forEach((item, index) => {
          if (item.classList.contains('_active')) {
            jsTriggers[currentContent].classList.remove('_active');
            jsContents[currentContent].classList.remove('_active');

            currentContent = --index;

            if (currentContent == 3) {
              btnNext.classList.add('_disabled');
              btnOrder.classList.remove('_disabled');
              contentTitle.innerHTML = 'Подтверждение заказа';
            } else if (currentContent == 0) {
              btnPrev.classList.add('_disabled');
              contentTitle.innerHTML = 'Платежная информация';
            } else {
              btnOrder.classList.add('_disabled');
              btnNext.classList.remove('_disabled');

              if (currentContent == 1) {
                contentTitle.innerHTML = 'Доставка';
              } else if (currentContent == 2) {
                contentTitle.innerHTML = 'Оплата';
              }
            }
          }
        });

        jsTriggers[currentContent].classList.add('_active');
        jsContents[currentContent].classList.add('_active');
      } else {
        handleValidate();
      }
    });
  }
};

export const upBtn = () => {
  document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
        btn.classList.add('show');
        // Иначе прячем
      } else {
        btn.classList.remove('show');
      }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
    };
  });
};

export const serachSelect = () => {
  if (document.querySelector('#select-1')) {
    const select1 = new ItcCustomSelect('#select-1');
  }
};

export const orderSelect = () => {
  if (document.querySelector('#select-2')) {
    const select2 = new ItcCustomSelect('#select-2');
  }
};

export const goodsTabs = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger._active'),
        activeContent = document.querySelector('.js-tab-content._active');

      activeTrigger.classList.remove('_active'); // 1
      trigger.classList.add('_active'); // 2

      activeContent.classList.remove('_active'); // 3
      content.classList.add('_active'); // 4
    });
  });
};

export const mainSlider = () => {
  const swiper = new Swiper('.main-slider__slider', {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 8,
    speed: 1000,

    autoplay: {
      delay: 10000,
    },

    pagination: {
      el: '.main-swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.main-swiper-button-next',
      prevEl: '.main-swiper-button-prev',
    },

    breakpoints: {
      960: {
        slidesPerView: 1,
        loop: true,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
    },
  });
};

export const mainMenu = () => {
  if (document.querySelector('.main-menu')) {
    const btns = document.querySelectorAll('.main-menu__item');
    const container = document.querySelector('.main-body');
    const submenu = document.querySelector('.main-submenu');
    const menu = document.querySelector('.main-menu');
    const content = document.querySelectorAll('.main-submenu__content');

    const toggleMenu = (index) => {
      if (index !== undefined) {
        if (content[index].classList.contains('_active')) {
          menu.classList.remove('_active');
          submenu.classList.remove('_active');
          content.forEach((item) => item.classList.remove('_active'));
          btns.forEach((item) => item.classList.remove('_active'));
        } else {
          menu.classList.add('_active');
          submenu.classList.add('_active');
          content.forEach((item) => item.classList.remove('_active'));
          btns.forEach((item) => item.classList.remove('_active'));
          content[index].classList.add('_active');
          btns[index].classList.add('_active');
        }
      } else {
        menu.classList.remove('_active');
        submenu.classList.remove('_active');
        content.forEach((item) => item.classList.remove('_active'));
        btns.forEach((item) => item.classList.remove('_active'));
      }
    };

    container.addEventListener('mouseleave', () => toggleMenu());

    btns.forEach((item) => {
      const index = item.dataset.menuBtn - 1;
      item.addEventListener('click', () => toggleMenu(index));
    });
  }
};

export const modalCall = () => {
  if (document.querySelector('._modal-call')) {
    const openBtn = document.querySelectorAll('._modal-call-open-btn');
    const modal = document.querySelector('._modal-call');
    const modalBg = document.querySelector('._modal-call__bg');
    const closeBtn = document.querySelector('._modal-call__close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `1472px`;
              item.style.padding = ` 0 24px`;
            } else {
              item.style.maxWidth = `1368px`;
              item.style.padding = ` 0 24px`;
            }
          });
        }
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `${1472 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            } else {
              item.style.maxWidth = `${1368 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            }
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
  }
};

export const modalLogin = () => {
  if (document.querySelector('._modal-login')) {
    const openBtn = document.querySelectorAll('._modal-login-open-btn');
    const modal = document.querySelector('._modal-login');
    const modalBg = document.querySelector('._modal-login__bg');
    const closeBtn = document.querySelectorAll('._modal-login__close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `1472px`;
              item.style.padding = ` 0 24px`;
            } else {
              item.style.maxWidth = `1368px`;
              item.style.padding = ` 0 24px`;
            }
          });
        }
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `${1472 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            } else {
              item.style.maxWidth = `${1368 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            }
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
  }
};

export const modalRegistration = () => {
  if (document.querySelector('._modal-registration')) {
    const openBtn = document.querySelectorAll('._modal-registration-open-btn');
    const modal = document.querySelector('._modal-registration');
    const modalBg = document.querySelector('._modal-registration__bg');
    const closeBtn = document.querySelectorAll('._modal-registration__close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `1472px`;
              item.style.padding = ` 0 24px`;
            } else {
              item.style.maxWidth = `1368px`;
              item.style.padding = ` 0 24px`;
            }
          });
        }
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `${1472 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            } else {
              item.style.maxWidth = `${1368 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            }
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
  }
};

export const modalForgot = () => {
  if (document.querySelector('._modal-forgot')) {
    const openBtn = document.querySelectorAll('._modal-forgot-open-btn');
    const modal = document.querySelector('._modal-forgot');
    const modalBg = document.querySelector('._modal-forgot__bg');
    const closeBtn = document.querySelectorAll('._modal-forgot__close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `1472px`;
              item.style.padding = ` 0 24px`;
            } else {
              item.style.maxWidth = `1368px`;
              item.style.padding = ` 0 24px`;
            }
          });
        }
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `${1472 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            } else {
              item.style.maxWidth = `${1368 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            }
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
  }
};

export const modalProfile = () => {
  if (document.querySelector('._modal-profile')) {
    const btnOpen = document.querySelector('._modal-profile-open-btn');
    const modal = document.querySelector('._modal-profile');

    btnOpen.addEventListener('click', () => {
      modal.classList.add('_active');
    });
    modal.addEventListener('mouseleave', () => {
      modal.classList.remove('_active');
    });
  }
};

export const modalProfileMobile = () => {
  if (document.querySelector('.mobile-profile')) {
    const btnOpen = document.querySelector('._mobile-profile-open-btn');
    const btnClose = document.querySelector('.mobile-profile__close');
    const modal = document.querySelector('.mobile-profile');
    const modalBg = document.querySelector('.mobile-profile__bg');
    const body = document.querySelector('body');

    btnOpen.addEventListener('click', () => {
      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');
      }
    });
    btnClose.addEventListener('click', () => {
      modal.classList.remove('_active');
      body.classList.remove('_lock');
    });
    modalBg.addEventListener('click', () => {
      modal.classList.remove('_active');
      body.classList.remove('_lock');
    });
  }
};

export const catalogMobile = () => {
  if (document.querySelector('._mobile-catalog')) {
    const catalog = document.querySelector('._mobile-catalog');
    const openBtn = document.querySelectorAll('._mobile-catalog-btn-open');
    const closeBtn = document.querySelector('._mobile-catalog-btn-close');
    const body = document.querySelector('body');
    const catalogTop = document.querySelector('._mobile-catalog__top');
    const catalogTopName = document.querySelector('._mobile-catalog-name');
    const catalogCon = document.querySelector('._mobile-catalog__con');
    const catalogBody = document.querySelector('._mobile-catalog__body');
    const catalogBtn = document.querySelectorAll('._mobile-catalog-btn');
    const catalogBtnBack = document.querySelectorAll(
      '._mobile-catalog-btn-back'
    );
    const catalogLinks = document.querySelector('._mobile-catalog__links');
    const catalogLinksContent = document.querySelectorAll(
      '._mobile-catalog-content'
    );

    const openCatalog = () => {
      catalog.classList.add('_active');
      body.classList.add('_lock');
    };
    const closeCatalog = () => {
      catalog.classList.remove('_active');
      body.classList.remove('_lock');
      catalogTop.classList.remove('_links-open');
      catalogCon.classList.remove('_links-open');
    };

    openBtn.forEach((item) => item.addEventListener('click', openCatalog));
    closeBtn.addEventListener('click', closeCatalog);

    const openCatalogContent = (index) => {
      console.log(catalogBtn[index].textContent);
      catalogTopName.innerHTML = catalogBtn[index].textContent;
      catalogTop.classList.add('_links-open');
      catalogCon.classList.add('_links-open');
      catalogLinksContent[index].classList.add('_active');
      catalogBody.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const backCatalogContent = () => {
      catalogTop.classList.remove('_links-open');
      catalogCon.classList.remove('_links-open');
      catalogLinksContent.forEach((item) => item.classList.remove('_active'));
    };

    catalogBtn.forEach((item, index) =>
      item.addEventListener('click', () => openCatalogContent(index))
    );
    catalogBtnBack.forEach((item) =>
      item.addEventListener('click', backCatalogContent)
    );
  }
};

export const moreMobile = () => {
  if (document.querySelector('._mobile-more')) {
    const catalog = document.querySelector('._mobile-more');
    const openBtn = document.querySelectorAll('._mobile-more-btn-open');
    const closeBtn = document.querySelector('._mobile-more-btn-close');
    const body = document.querySelector('body');
    const catalogTop = document.querySelector('._mobile-more__top');
    const catalogTopName = document.querySelector('._mobile-more-name');
    const catalogCon = document.querySelector('._mobile-more__con');
    const catalogBody = document.querySelector('._mobile-more__body');
    const catalogBtn = document.querySelectorAll('._mobile-more-btn');
    const catalogBtnBack = document.querySelectorAll('._mobile-more-btn-back');
    const catalogLinks = document.querySelector('._mobile-catalog__links');
    const catalogLinksContent = document.querySelectorAll(
      '._mobile-more-content'
    );

    const openCatalog = () => {
      if (catalog.classList.contains('_active')) {
        closeCatalog();
      } else {
        catalog.classList.add('_active');
        body.classList.add('_lock');
      }
    };
    const closeCatalog = () => {
      catalog.classList.remove('_active');
      body.classList.remove('_lock');
      catalogTop.classList.remove('_links-open');
      catalogCon.classList.remove('_links-open');
    };

    openBtn.forEach((item) => item.addEventListener('click', openCatalog));
    closeBtn.addEventListener('click', closeCatalog);

    const openCatalogContent = (index) => {
      console.log(catalogBtn[index].textContent);
      catalogTopName.innerHTML = catalogBtn[index].textContent;
      catalogTop.classList.add('_links-open');
      catalogCon.classList.add('_links-open');
      catalogLinksContent[index].classList.add('_active');
      catalogBody.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const backCatalogContent = () => {
      catalogTop.classList.remove('_links-open');
      catalogCon.classList.remove('_links-open');
      catalogLinksContent.forEach((item) => item.classList.remove('_active'));
    };

    catalogBtn.forEach((item, index) =>
      item.addEventListener('click', () => openCatalogContent(index))
    );
    catalogBtnBack.forEach((item) =>
      item.addEventListener('click', backCatalogContent)
    );
  }
};

export const maskPhoneNumber = () => {
  if (document.querySelector('._phone-mask')) {
    const selector = document.querySelectorAll('._phone-mask');
    Inputmask({ mask: '+7 (999) 999-99-99' }).mask(selector);
  }
};

export const validateModalRegistr = () => {
  if (document.querySelector('._modal-registration')) {
    const validateCallback = new JustValidate('._modal-registration');
    validateCallback
      .addField('._input-email', [
        {
          rule: 'email',
          value: true,
          errorMessage: '',
        },
        {
          rule: 'required',
          value: true,
          errorMessage: '',
        },
      ])
      .addField('._input-password', [
        {
          rule: 'required',
          errorMessage: '',
        },
      ])
      .onSuccess((event) => {
        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Mail send');
            }
          }
        };

        // xhr.open('POST', 'mail.php', true)
        xhr.send(formData);

        event.target.reset();
      });
  }
};

export const validateModalLogin = () => {
  if (document.querySelector('._modal-login')) {
    const validateCallback = new JustValidate('._modal-login');
    validateCallback
      .addField('._input-email', [
        {
          rule: 'email',
          value: true,
          errorMessage: '',
        },
        {
          rule: 'required',
          value: true,
          errorMessage: '',
        },
      ])
      .addField('._input-password', [
        {
          rule: 'required',
          errorMessage: '',
        },
      ])
      .onSuccess((event) => {
        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Mail send');
            }
          }
        };

        // xhr.open('POST', 'mail.php', true)
        xhr.send(formData);

        event.target.reset();
      });
  }
};

export const validateModalForgot = () => {
  if (document.querySelector('._modal-forgot')) {
    const validateCallback = new JustValidate('._modal-forgot');
    validateCallback
      .addField('._input-email', [
        {
          rule: 'required',
          value: true,
          errorMessage: '',
        },
      ])
      .onSuccess((event) => {
        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Mail send');
            }
          }
        };

        // xhr.open('POST', 'mail.php', true)
        xhr.send(formData);

        event.target.reset();
      });
  }
};

export const validateModalCall = () => {
  if (document.querySelector('._modal-call')) {
    const validateCallback = new JustValidate('._modal-call');
    validateCallback
      .addField('._input-name', [
        {
          rule: 'required',
          value: true,
          errorMessage: '',
        },
      ])
      .addField('._input-phone', [
        {
          rule: 'required',
          value: true,
          errorMessage: '',
        },
      ])
      .onSuccess((event) => {
        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Mail send');
            }
          }
        };

        // xhr.open('POST', 'mail.php', true)
        xhr.send(formData);

        event.target.reset();
      });
  }
};

export const youtubeModal = () => {
  if (document.querySelector('._yt-modal')) {
    const openBtn = document.querySelectorAll('._yt-modal-open-btn');
    const modal = document.querySelector('._yt-modal');
    const modalBg = document.querySelector('._yt-modal__bg');
    const closeBtn = document.querySelectorAll('.yt-modal__content-close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (videoId) => {
      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      let iframeVideo = document.createElement('iframe');

      iframeVideo.src = `https://www.youtube.com/embed/${videoId}`;
      iframeVideo.classList = `_iframe-yt-video`;
      iframeVideo.title = 'YouTube video player';
      iframeVideo.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframeVideo.allowFullscreen;

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');

        document.querySelector('._iframe-yt-video').remove();

        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `1472px`;
              item.style.padding = ` 0 24px`;
            } else {
              item.style.maxWidth = `1368px`;
              item.style.padding = ` 0 24px`;
            }
          });
        }
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');

        document.querySelector('.yt-modal__content').append(iframeVideo);

        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `${1472 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            } else {
              item.style.maxWidth = `${1368 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            }
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', () => toggleModal(item.dataset.videoid));
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
  }
};

export const youtubeSlider = () => {
  const swiper = new Swiper('.videos-body', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 600,

    breakpoints: {
      768: {
        slidesPerView: 4,
      },
    },
  });
};

export const sparesListSlider = () => {
  const swiper = new Swiper('.spares-list__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 600,
  });
};

export const catalogItemSlider = () => {
  if (document.querySelector('.card-content__count')) {
    const counter = document.querySelector('.card-content__count');

    const swiperThumbs = new Swiper('.card-content__slider-small', {
      spaceBetween: 8,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
    });
    const swiperBig = new Swiper('.card-content__slider-big', {
      modules: [Thumbs, Navigation],
      spaceBetween: 8,
      slidesPerView: 'auto',
      // slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: swiperThumbs,
      },
      breakpoints: {
        992: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
      on: {
        snapIndexChange: function (swiper) {
          counter.innerHTML = `${swiper.activeIndex + 1}/${
            swiper.slides.length
          }`;
        },
      },
    });
  }
};

export const catalogItemTabsSlider = () => {
  const swiper = new Swiper('.card-tabs__content-slider', {
    spaceBetween: 0,
    slidesPerView: 'auto',
    breakpoints: {
      992: {
        slidesPerView: 5,
      },
    },
  });
};

export const modalBuy = () => {
  if (document.querySelector('._modal-buy')) {
    const openBtn = document.querySelectorAll('._modal-buy-open-btn');
    const modal = document.querySelector('._modal-buy');
    const modalBg = document.querySelector('._modal-buy__bg');
    const closeBtn = document.querySelector('._modal-buy__close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `1472px`;
              item.style.padding = ` 0 24px`;
            } else {
              item.style.maxWidth = `1368px`;
              item.style.padding = ` 0 24px`;
            }
          });
        }
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `${1472 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            } else {
              item.style.maxWidth = `${1368 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            }
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
  }
};

export const modalSort = () => {
  if (document.querySelector('._modal-sort')) {
    const openBtn = document.querySelectorAll('._modal-sort-open-btn');
    const modal = document.querySelector('._modal-sort');
    const modalBg = document.querySelector('._modal-sort__bg');
    const closeBtn = document.querySelector('._modal-sort__close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `1472px`;
              item.style.padding = ` 0 24px`;
            } else {
              item.style.maxWidth = `1368px`;
              item.style.padding = ` 0 24px`;
            }
          });
        }
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `${1472 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            } else {
              item.style.maxWidth = `${1368 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            }
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
  }
};

export const modalFilter = () => {
  if (document.querySelector('._modal-filter')) {
    const openBtn = document.querySelectorAll('._modal-filter-open-btn');
    const modal = document.querySelector('._modal-filter');
    const modalBg = document.querySelector('._modal-filter__bg');
    const closeBtn = document.querySelector('._modal-filter__close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `1472px`;
              item.style.padding = ` 0 24px`;
            } else {
              item.style.maxWidth = `1368px`;
              item.style.padding = ` 0 24px`;
            }
          });
        }
      } else {
        modal.classList.add('_active');
        body.classList.add('_lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            if (item.classList.contains('container_lg')) {
              item.style.maxWidth = `${1472 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            } else {
              item.style.maxWidth = `${1368 + scrollWidth}px`;
              item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
            }
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
  }
};

export const filterRangeSlider = () => {
  if (document.querySelector('#range-slider')) {
    let slider = document.querySelector('#range-slider');

    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  }
  if (document.querySelector('#range-perfomance-slider')) {
    let slider2 = document.querySelector('#range-perfomance-slider');

    noUiSlider.create(slider2, {
      start: [2, 10],
      connect: true,
      range: {
        min: 0,
        max: 20,
      },
      pips: { mode: 'count', values: 5 },
    });
  }
  if (document.querySelector('#range-slider-mobile')) {
    let sliderMobile = document.querySelector('#range-slider-mobile');

    noUiSlider.create(sliderMobile, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  }
  if (document.querySelector('#range-perfomance-slider-mobile')) {
    let sliderMobile2 = document.querySelector(
      '#range-perfomance-slider-mobile'
    );

    noUiSlider.create(sliderMobile2, {
      start: [2, 10],
      connect: true,
      range: {
        min: 0,
        max: 20,
      },
      pips: { mode: 'count', values: 5 },
    });
  }
};

export const searchResult = () => {
  if (document.querySelector('.order-city__list')) {
    const list = document.querySelector('.order-city__list');
    const listItem = document.querySelectorAll('.order-city__list-item');
    const search = document.querySelector('._order-city__input');
    const searchShadow = document.querySelector('.order-city__shadow');
    const clear = document.querySelector('._clear');

    search.addEventListener('input', (e) => {
      if (e.target.value.length == 0) {
        list.classList.remove('_open');
        searchShadow.value = '';
      } else {
        list.classList.add('_open');
      }
    });

    listItem.forEach((item) => {
      item.addEventListener('click', () => {
        searchShadow.value = 'Москва, Центр, Россия';
        search.value = 'Москва';
        search.focus();
        list.classList.remove('_open');
      });
    });

    clear.addEventListener('click', () => {
      searchShadow.value = '';
      search.value = '';
      search.focus();
      list.classList.remove('_open');
    });

    list.addEventListener('mouseleave', () => {
      list.classList.remove('_open');
    });
  }
};

export const cartClose = () => {
  if (window.innerWidth < 992 && document.querySelector('.cart-item__close')) {
    const itemsList = document.querySelectorAll('.cart-item');
    const closeBtns = document.querySelectorAll('.cart-item__close');

    itemsList.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target == item.querySelector('.cart-item__close')) {
          if (item.classList.contains('_close')) {
            item.classList.remove('_close');
          } else {
            item.classList.add('_close');
          }
        }
      });
    });
  }
};
