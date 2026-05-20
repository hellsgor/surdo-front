'use client';

import YarlLightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import type { Slide } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { Icon } from '@/components/ui';

import styles from './Lightbox.module.scss';

type Props = {
  slides: Slide[];
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ slides, open, onClose }: Props) {
  return (
    <YarlLightbox
      open={open}
      close={onClose}
      slides={slides}
      plugins={[Captions, Thumbnails]}
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
