"use client";
import { createContext, useState, useContext } from "react";

type MenuContextType = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}