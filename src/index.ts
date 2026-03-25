import './dsbj.scss';

export { register, boot, focusTrap, queryNew } from './js/core';

import { initAccordion } from './js/accordion';
import { initModal } from './js/modal';
import { initTab } from './js/tab';
import { initHeader } from './js/header';
import { initNavigation } from './js/navigation';
import { initConsent } from './js/consent';
import { initToggle } from './js/toggle';
import { initDatepicker } from './js/datepicker';
import { initTable } from './js/table';
import { toast, initToast } from './js/toast';
import { initDropdown } from './js/dropdown';
import { initMarquee } from './js/marquee';
import { initGallery } from './js/gallery';
import { initTreeview } from './js/treeview';

export {
  initAccordion, initModal, initTab, initHeader, initNavigation,
  initConsent, initToggle, initDatepicker, initTable,
  toast, initToast, initDropdown, initMarquee, initGallery, initTreeview,
};

export function initDSBJ(): void {
  initAccordion();
  initModal();
  initTab();
  initHeader();
  initNavigation();
  initConsent();
  initToggle();
  initDatepicker();
  initTable();
  initToast();
  initDropdown();
  initMarquee();
  initGallery();
  initTreeview();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDSBJ);
  } else {
    initDSBJ();
  }
}
