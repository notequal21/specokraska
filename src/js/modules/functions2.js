import JustValidate from 'just-validate';

export const sparesExpand = () => {
  if (document.querySelector('.spares-content__item-links')) {
    const links = document.querySelectorAll('.spares-content__item-links');
    const maxItems = 5;

    links.forEach((linkItem) => {
      const expandLi = document.createElement('li');
      const expandDiv = document.createElement('div');
      expandDiv.classList.add('spares-expand-btn');
      expandDiv.innerText = 'Свернуть/Развернуть';
      expandLi.append(expandDiv);

      const lists = linkItem.querySelectorAll(`li`);

      if (lists.length >= maxItems) {
        let isExpand = true;

        const expandOver = () => {
          lists.forEach((item, index) => {
            if (index >= maxItems) {
              item.style.display = 'none';
              linkItem.append(expandLi);
            }
          });
        };

        expandLi.addEventListener('click', () => {
          if (isExpand) {
            isExpand = false;
            lists.forEach((item) => {
              item.style.display = 'block';
            });
          } else {
            isExpand = true;
            expandOver();
          }
        });

        expandOver();
      }
    });
  }
};

export const bankPhotoSelectCounter = () => {
  if (document.querySelector('#bank-photo-selected')) {
    const selectedSpan = document.querySelector('#bank-photo-selected');
    const clearBtn = document.querySelector('#bank-photo-clear-btn');
    const selectedAllSpan = document.querySelector('#bank-photo-selected-all');
    const items = document.querySelectorAll('.photobank-content__item');
    let selectedItemsCount = 0;

    const updateSelectedItems = (count) => {
      let selectedItemsCount = count;
      selectedSpan.innerText = selectedItemsCount;
    };

    selectedAllSpan.innerText = items.length;
    updateSelectedItems(0);

    const clearSelectedItems = () => {
      updateSelectedItems(0);

      items.forEach((item) => {
        item.querySelector('input').checked = false;
      });
    };

    const toggleSelectItem = () => {
      const elements = Array.from(items);
      const inputArr = elements.map(
        (item) => item.querySelector('input').checked
      );
      const checkedArr = inputArr.filter((item) => item === true);

      updateSelectedItems(checkedArr.length);
    };

    clearBtn.addEventListener('click', clearSelectedItems);

    items.forEach((item) => {
      item.addEventListener('click', toggleSelectItem);
    });
  }
};

export const modalCrm = () => {
  if (document.querySelector('._modal-crm')) {
    const openBtn = document.querySelectorAll('._modal-crm-open-btn');
    const modal = document.querySelector('._modal-crm');
    const modalBg = document.querySelector('._modal-crm__bg');
    const closeBtn = document.querySelector('._modal-crm__close');
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

export const validateModalCrm = () => {
  if (document.querySelector('._modal-crm')) {
    const validateCallback = new JustValidate('._modal-crm');
    validateCallback
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
