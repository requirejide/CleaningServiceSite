import { create } from "zustand";

const useToogle = create((set) => ({
  isOpen: false,
  setOpenTrue: () => set({ isOpen: true }),
  setOpenFalse: () => set({ isOpen: false }),

  isFixed: false,
  setFixedTrue: () => set({ isFixed: true }),
  setFixedFalse: () => set({ isFixed: false }),
}));
export default useToogle;
