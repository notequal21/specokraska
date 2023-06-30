import { Fancybox } from '@fancyapps/ui';

export const fancyboxCatalogItem = () => {
  if (document.querySelector('[data-fancybox]')) {
    Fancybox.bind('[data-fancybox]', {});
  }
};
