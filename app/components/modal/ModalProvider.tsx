"use client";
import React, {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

const ModalContext = createContext({
  isModalOpen: false,
  setIsModalOpen: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

interface ModalContextProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
