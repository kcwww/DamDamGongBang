import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  data: any;
  openModal: (data: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  data: null,
  openModal: (data) => set({ isOpen: true, data }),
  closeModal: () => set({ isOpen: false, data: null }),
}));
