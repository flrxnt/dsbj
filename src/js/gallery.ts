import { register, focusTrap } from './core';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

function initSingleGallery(wrapper: HTMLElement): void {
  const items = Array.from(wrapper.querySelectorAll<HTMLElement>('.bj-gallery__item'));
  if (!items.length) return;

  const galleryData: GalleryItem[] = items.map((item) => {
    const img = item.querySelector<HTMLImageElement>('.bj-gallery__img');
    const caption = item.querySelector<HTMLElement>('.bj-gallery__caption');
    return {
      src: img?.getAttribute('data-bj-gallery-src') || img?.src || '',
      alt: img?.alt || '',
      caption: caption?.textContent?.trim() || img?.alt || '',
    };
  });

  let currentIndex = 0;
  let lightbox: HTMLElement | null = null;
  let openerElement: HTMLElement | null = null;

  function createLightbox(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'bj-lightbox';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Visionneuse d\'images');

    el.innerHTML = `
      <span class="bj-lightbox__counter"></span>
      <button class="bj-lightbox__close" aria-label="Fermer" data-bj-lightbox-close><i class="ri-close-line" aria-hidden="true"></i></button>
      <button class="bj-lightbox__nav bj-lightbox__nav--prev" aria-label="Image précédente" data-bj-lightbox-prev><i class="ri-arrow-left-s-line" aria-hidden="true"></i></button>
      <div class="bj-lightbox__content">
        <img class="bj-lightbox__img" src="" alt="" />
        <p class="bj-lightbox__caption"></p>
      </div>
      <button class="bj-lightbox__nav bj-lightbox__nav--next" aria-label="Image suivante" data-bj-lightbox-next><i class="ri-arrow-right-s-line" aria-hidden="true"></i></button>
    `;

    document.body.appendChild(el);

    el.querySelector('[data-bj-lightbox-close]')!.addEventListener('click', close);
    el.querySelector('[data-bj-lightbox-prev]')!.addEventListener('click', prev);
    el.querySelector('[data-bj-lightbox-next]')!.addEventListener('click', next);

    el.addEventListener('click', (e) => {
      if (e.target === el) close();
    });

    return el;
  }

  function render(): void {
    if (!lightbox) return;
    const data = galleryData[currentIndex];
    const img = lightbox.querySelector<HTMLImageElement>('.bj-lightbox__img')!;
    const caption = lightbox.querySelector<HTMLElement>('.bj-lightbox__caption')!;
    const counter = lightbox.querySelector<HTMLElement>('.bj-lightbox__counter')!;

    img.src = data.src;
    img.alt = data.alt;
    caption.textContent = data.caption;
    counter.textContent = `${currentIndex + 1} / ${galleryData.length}`;

    // Preload adjacent images
    [-1, 1].forEach((offset) => {
      const idx = currentIndex + offset;
      if (idx >= 0 && idx < galleryData.length) {
        const preload = new Image();
        preload.src = galleryData[idx].src;
      }
    });
  }

  function open(index: number): void {
    currentIndex = index;

    if (!lightbox) lightbox = createLightbox();
    lightbox.setAttribute('data-bj-expanded', '');
    document.body.classList.add('bj-modal-open');
    render();
    focusTrap.trap(lightbox);

    wrapper.dispatchEvent(new CustomEvent('bj:gallery:open', {
      detail: { index: currentIndex },
      bubbles: true,
    }));
  }

  function close(): void {
    if (!lightbox) return;
    lightbox.removeAttribute('data-bj-expanded');
    document.body.classList.remove('bj-modal-open');
    focusTrap.release(lightbox);
    openerElement?.focus();

    wrapper.dispatchEvent(new CustomEvent('bj:gallery:close', {
      detail: { index: currentIndex },
      bubbles: true,
    }));
  }

  function prev(): void {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : galleryData.length - 1;
    render();
    wrapper.dispatchEvent(new CustomEvent('bj:gallery:navigate', {
      detail: { index: currentIndex },
      bubbles: true,
    }));
  }

  function next(): void {
    currentIndex = currentIndex < galleryData.length - 1 ? currentIndex + 1 : 0;
    render();
    wrapper.dispatchEvent(new CustomEvent('bj:gallery:navigate', {
      detail: { index: currentIndex },
      bubbles: true,
    }));
  }

  // Bind gallery items
  items.forEach((item, idx) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Voir l'image ${idx + 1}`);

    item.addEventListener('click', () => {
      openerElement = item;
      open(idx);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openerElement = item;
        open(idx);
      }
    });
  });

  // Keyboard navigation in lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.hasAttribute('data-bj-expanded')) return;

    switch (e.key) {
      case 'Escape':
        close();
        break;
      case 'ArrowLeft':
        prev();
        break;
      case 'ArrowRight':
        next();
        break;
    }
  });
}

export function initGallery(): void {
  document.querySelectorAll<HTMLElement>('[data-bj-gallery]').forEach(initSingleGallery);
}

register('gallery', initGallery);
