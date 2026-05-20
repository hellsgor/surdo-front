'use client';

import { createContext, useContext, useState } from 'react';

import { Modal } from './Modal';

type ModalContextValue = {
  isOpen: boolean;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (newContent: React.ReactNode) => {
    setContent(newContent);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal}>
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
