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
    const selectedAllSpan = document.querySelector('#bank-photo-selected-all');
    const items = document.querySelectorAll('.photobank-content__item');
    let selectedItemsCount = 0;

    const updateSelectedItems = (count) => {
      let selectedItemsCount = count;
      selectedSpan.innerText = selectedItemsCount;
    };

    selectedAllSpan.innerText = items.length;
    updateSelectedItems(0);

    const toggleSelectItem = () => {
      const elements = Array.from(items);
      const inputArr = elements.map(
        (item) => item.querySelector('input').checked
      );
      const checkedArr = inputArr.filter((item) => item === true);

      updateSelectedItems(checkedArr.length);
    };

    items.forEach((item) => {
      item.addEventListener('click', toggleSelectItem);
    });
  }
};
