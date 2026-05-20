'use client';

import type { Dimple } from '@/types/components/Dimple';

import { Lightbox } from '@/components/core/Lightbox/Lightbox';

type Props = {
  dimples: Dimple[];
  open: boolean;
  onClose: () => void;
};

export function DimplesLightbox({ dimples, open, onClose }: Props) {
  const slides = dimples.map((d) => ({
    src: d.image?.desktop ?? d.image?.mobile ?? '',
    alt: d.image?.alt ?? d.title ?? '',
    thumbnail: d.image?.mobile ?? d.image?.desktop ?? '',
    title: d.title ?? undefined,
  }));

  return <Lightbox slides={slides} open={open} onClose={onClose} />;
}
