import './dsbj.scss';

export { register, boot, focusTrap, queryNew } from './js/core';
export { initAccordion } from './js/accordion';
export { initModal } from './js/modal';
export { initTab } from './js/tab';
export { initHeader } from './js/header';
export { initNavigation } from './js/navigation';
export { initConsent } from './js/consent';
export { initToggle } from './js/toggle';
export { initDatepicker } from './js/datepicker';
export { initTable } from './js/table';
export { toast, initToast } from './js/toast';
export { initDropdown } from './js/dropdown';
export { initMarquee } from './js/marquee';
export { initGallery } from './js/gallery';

import { boot } from './js/core';
import './js/accordion';
import './js/modal';
import './js/tab';
import './js/header';
import './js/navigation';
import './js/consent';
import './js/toggle';
import './js/datepicker';
import './js/table';
import './js/toast';
import './js/dropdown';
import './js/marquee';
import './js/gallery';

export function initDSBJ(): void {
  boot();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDSBJ);
  } else {
    initDSBJ();
  }
}
