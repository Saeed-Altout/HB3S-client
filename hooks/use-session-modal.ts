import { create } from "zustand";

interface UseSessionModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSessionModal = create<UseSessionModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
