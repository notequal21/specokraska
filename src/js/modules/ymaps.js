export const ymapCentral = () => {
  if (document.querySelector('#ymap-central')) {
    const init = () => {
      const ymapCentral = new ymaps.Map('ymap-central', {
        center: [55.74863329546302, 37.624213566451715],
        zoom: 16,
      });

      ymapCentral.controls.remove('geolocationControl');
      ymapCentral.controls.remove('searchControl');
      ymapCentral.controls.remove('trafficControl');
      ymapCentral.controls.remove('typeSelector');
      ymapCentral.controls.remove('fullscreenControl');
      ymapCentral.controls.remove('rulerControl');

      const myPlacemark = new ymaps.Placemark(
        [55.74863329546302, 37.624213566451715],
        {
          hintContent: 'Название метки (подсказка)',
          balloonContentHeader: 'Название метки',
          balloonContent: 'Описание метки',
          balloonContentFooter: 'Описание метки',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '../img/icons/placemark.svg',
          iconImageSize: [54, 60],
          iconImageOffset: [-26, -52],
        }
      );

      ymapCentral.geoObjects.add(myPlacemark);
    };

    ymaps.ready(init);
  }
};

export const ymapShop = () => {
  if (document.querySelector('#ymap-shop')) {
    const init = () => {
      const ymapShop = new ymaps.Map('ymap-shop', {
        center: [55.74863329546302, 37.624213566451715],
        zoom: 16,
      });

      ymapShop.controls.remove('geolocationControl');
      ymapShop.controls.remove('searchControl');
      ymapShop.controls.remove('trafficControl');
      ymapShop.controls.remove('typeSelector');
      ymapShop.controls.remove('fullscreenControl');
      ymapShop.controls.remove('rulerControl');

      const myPlacemark = new ymaps.Placemark(
        [55.74863329546302, 37.624213566451715],
        {
          hintContent: 'Название метки (подсказка)',
          balloonContentHeader: 'Название метки',
          balloonContent: 'Описание метки',
          balloonContentFooter: 'Описание метки',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '../img/icons/placemark.svg',
          iconImageSize: [54, 60],
          iconImageOffset: [-26, -52],
        }
      );

      ymapShop.geoObjects.add(myPlacemark);
    };

    ymaps.ready(init);
  }
};

export const ymapDillers = () => {
  if (document.querySelector('#ymap-dillers')) {
    // массив маркеров
    const placemarks = [
      {
        coords: [55.74863329546302, 37.624213566451715],
        hintContent: 'Название метки (подсказка)',
        balloonContentHeader: 'Название метки',
        balloonContent: 'Название метки',
        balloonContentFooter: 'Описание метки',
      },
      {
        coords: [55.74863329546302, 37.614213566451715],
        hintContent: 'Название метки (подсказка)',
        balloonContentHeader: 'Название метки',
        balloonContent: 'Название метки',
        balloonContentFooter: 'Описание метки',
      },
      {
        coords: [55.74863329546302, 37.634213566451715],
        hintContent: 'Название метки (подсказка)',
        balloonContentHeader: 'Название метки',
        balloonContent: 'Название метки',
        balloonContentFooter: 'Описание метки',
      },
    ];

    const init = () => {
      const content = document.querySelector('.contacts');

      const ymapDillers = new ymaps.Map('ymap-dillers', {
        center: [55.74863329546302, 37.624213566451715],
        zoom: 16,
      });

      ymapDillers.controls.remove('geolocationControl');
      ymapDillers.controls.remove('searchControl');
      ymapDillers.controls.remove('trafficControl');
      ymapDillers.controls.remove('typeSelector');
      ymapDillers.controls.remove('fullscreenControl');
      ymapDillers.controls.remove('rulerControl');

      // добавляем маркеры на карту
      placemarks.forEach((item, index) => {
        const myPlacemark = new ymaps.Placemark(
          item.coords,
          {
            hintContent: item.hintContent,
            balloonContentHeader: item.balloonContentHeader,
            balloonContent: item.balloonContent,
            balloonContentFooter: item.balloonContentFooter,
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '../img/icons/placemark.svg',
            iconImageSize: [54, 60],
            iconImageOffset: [-26, -52],
          }
        );
        ymapDillers.geoObjects.add(myPlacemark);
      });

      // обрабатываем клик на кнопку
      content.addEventListener('click', (e) => {
        const isCoordBtn = e.target.closest('[data-coords]');
        if (isCoordBtn) {
          e.preventDefault();
          content.scrollIntoView({
            behavior: 'smooth',
          });
          ymapDillers.setCenter(e.target.dataset.coords.split(','));
        }
      });
    };

    ymaps.ready(init);
  }
};

export const ymapServices = () => {
  if (document.querySelector('#ymap-services')) {
    // массив маркеров
    const placemarks = [
      {
        coords: [55.74863329546302, 37.624213566451715],
        hintContent: 'Название метки (подсказка)',
        balloonContentHeader: 'Название метки',
        balloonContent: 'Название метки',
        balloonContentFooter: 'Описание метки',
      },
      {
        coords: [55.74863329546302, 37.614213566451715],
        hintContent: 'Название метки (подсказка)',
        balloonContentHeader: 'Название метки',
        balloonContent: 'Название метки',
        balloonContentFooter: 'Описание метки',
      },
      {
        coords: [55.74863329546302, 37.634213566451715],
        hintContent: 'Название метки (подсказка)',
        balloonContentHeader: 'Название метки',
        balloonContent: 'Название метки',
        balloonContentFooter: 'Описание метки',
      },
    ];

    const init = () => {
      const content = document.querySelector('.contacts');

      const ymapDillers = new ymaps.Map('ymap-services', {
        center: [55.74863329546302, 37.624213566451715],
        zoom: 16,
      });

      ymapDillers.controls.remove('geolocationControl');
      ymapDillers.controls.remove('searchControl');
      ymapDillers.controls.remove('trafficControl');
      ymapDillers.controls.remove('typeSelector');
      ymapDillers.controls.remove('fullscreenControl');
      ymapDillers.controls.remove('rulerControl');

      // добавляем маркеры на карту
      placemarks.forEach((item, index) => {
        const myPlacemark = new ymaps.Placemark(
          item.coords,
          {
            hintContent: item.hintContent,
            balloonContentHeader: item.balloonContentHeader,
            balloonContent: item.balloonContent,
            balloonContentFooter: item.balloonContentFooter,
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '../img/icons/placemark.svg',
            iconImageSize: [54, 60],
            iconImageOffset: [-26, -52],
          }
        );
        ymapDillers.geoObjects.add(myPlacemark);
      });

      // обрабатываем клик на кнопку
      content.addEventListener('click', (e) => {
        const isCoordBtn = e.target.closest('[data-coords]');
        if (isCoordBtn) {
          e.preventDefault();
          content.scrollIntoView({
            behavior: 'smooth',
          });
          ymapDillers.setCenter(e.target.dataset.coords.split(','));
        }
      });
    };

    ymaps.ready(init);
  }
};
