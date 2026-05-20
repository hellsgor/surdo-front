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
};

export function Modal({ isOpen, onClose, children, className }: Props) {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={(open) => !open && onClose()}
      isDismissable
      className={styles.overlay}
    >
      <AriaModal className={clsx(styles.modal, className)}>
        <Dialog>{children}</Dialog>
      </AriaModal>
    </ModalOverlay>
  );
}
