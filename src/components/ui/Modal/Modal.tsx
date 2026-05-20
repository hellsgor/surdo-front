'use client';

import {
  Dialog,
  Modal as AriaModal,
  ModalOverlay,
} from 'react-aria-components';
import clsx from 'clsx';

import styles from './Modal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  isDismissable?: boolean;
  hasOverlay?: boolean;
};

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  isDismissable = true,
  hasOverlay = true,
}: Props) {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={(open) => !open && onClose()}
      isDismissable={isDismissable}
      className={hasOverlay ? styles.overlay : styles.overlayHidden}
    >
      <AriaModal className={clsx(styles.modal, className)}>
        <Dialog>{children}</Dialog>
      </AriaModal>
    </ModalOverlay>
  );
}
