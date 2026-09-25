'use client';

import { useEffect } from 'react';

import YarlLightbox from 'yet-another-react-lightbox';
import type { Slide } from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import { Icon } from '@/components/ui';

import styles from './Lightbox.module.scss';

type Props = {
  slides: Slide[];
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ slides, open, onClose }: Props) {
  // Дефолтный noScroll библиотеки ставит на body height:100%+overflow:hidden.
  // В связке с global.scss (html{height:100%}, body{min-height:100%}) это схлопывает
  // скроллируемую высоту документа до одного экрана и сбрасывает scrollY в 0 —
  // после закрытия страница оказывается наверху. Блокируем скролл на html вместо
  // этого, не трогая height: scrollbar-gutter: stable уже держит место под скроллбар.
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const previousOverflowY = html.style.overflowY;
    html.style.overflowY = 'hidden';

    return () => {
      html.style.overflowY = previousOverflowY;
    };
  }, [open]);

  return (
    <YarlLightbox
      open={open}
      close={onClose}
      slides={slides}
      plugins={[Captions, Thumbnails]}
      noScroll={{ disabled: true }}
      thumbnails={{ vignette: false }}
      className={styles.lightbox}
      styles={{
        root: {
          '--yarl__color_backdrop': 'rgb(0 0 0 / 50%)',
          '--yarl__slide_captions_container_background': 'transparent',
          '--yarl__button_filter': 'none',
          '--yarl__thumbnails_container_background_color': 'rgb(0 0 0 / 50%)',
          '--yarl__thumbnails_thumbnail_background': 'rgb(0 0 0 / 50%)',
          '--yarl__thumbnails_thumbnail_border_color': 'transparent',
          '--yarl__thumbnails_thumbnail_active_border_color': 'var(--accent)',
        },
      }}
      render={{
        iconClose: () => <Icon name="close" size={24} />,
        iconNext: () => <Icon name="chevron-right" size={24} />,
        iconPrev: () => (
          <span style={{ transform: 'rotate(180deg)', display: 'flex' }}>
            <Icon name="chevron-right" size={24} />
          </span>
        ),
      }}
    />
  );
}
