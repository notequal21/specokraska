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
