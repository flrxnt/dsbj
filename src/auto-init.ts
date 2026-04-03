import './dsbj.scss';
import { initDSBJ } from './index';

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDSBJ);
  } else {
    initDSBJ();
  }
}
