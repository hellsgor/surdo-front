'use client';

import { useState } from 'react';

import { DimplesLightbox } from '../DimplesLightbox/DimplesLightbox';
import { Button } from '@/components/ui';
import type { Dimple } from '@/types/components/Dimple';
import type { Link } from '@/types/primitives/Link';

export function AboutButton({
  button,
  dimples,
  className,
}: {
  button: Link;
  dimples: Dimple[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        href={button.href}
        leftText={button.leftText}
        rightText={button.rightText}
        variant="secondary"
        className={className}
        onClick={() => setOpen(true)}
      >
        {button.label}
      </Button>

      <DimplesLightbox
        dimples={dimples}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
