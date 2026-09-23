'use client';

import { createContext, useContext, useState } from 'react';

import { Modal } from './Modal';

type OpenModalOptions = {
  showCloseButton?: boolean;
};

type ModalContextValue = {
  isOpen: boolean;
  openModal: (
    content: React.ReactNode,
    ariaLabel: string,
    options?: OpenModalOptions,
  ) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [ariaLabel, setAriaLabel] = useState('');
  const [showCloseButton, setShowCloseButton] = useState<boolean | undefined>(
    undefined,
  );

  const openModal = (
    newContent: React.ReactNode,
    newAriaLabel: string,
    options?: OpenModalOptions,
  ) => {
    setContent(newContent);
    setAriaLabel(newAriaLabel);
    setShowCloseButton(options?.showCloseButton);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        ariaLabel={ariaLabel}
        showCloseButton={showCloseButton}
      >
        {content}
      </Modal>
    </ModalContext>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}
