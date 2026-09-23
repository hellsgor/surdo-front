'use client';

import clsx from 'clsx';
import {
  Modal as AriaModal,
  Dialog,
  ModalOverlay,
} from 'react-aria-components';

import { Button, Icon } from '@/components/ui';

import styles from './Modal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  isDismissable?: boolean;
  hasOverlay?: boolean;
  ariaLabel: string;
  showCloseButton?: boolean;
};

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  isDismissable = true,
  hasOverlay = true,
  ariaLabel,
  showCloseButton = isDismissable,
}: Props) {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={(open) => !open && onClose()}
      isDismissable={isDismissable}
      className={hasOverlay ? styles.overlay : styles.overlayHidden}
    >
      <AriaModal className={clsx(styles.modal, className)}>
        <Dialog aria-label={ariaLabel} className={styles.dialog}>
          {showCloseButton && (
            <Button
              variant="neutral"
              shape="round"
              size="sm"
              aria-label="Закрыть"
              className={styles.closeButton}
              onClick={onClose}
            >
              <Icon name="close" size="20" />
            </Button>
          )}
          {children}
        </Dialog>
      </AriaModal>
    </ModalOverlay>
  );
}
