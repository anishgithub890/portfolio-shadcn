import { create } from 'zustand';

import { SafeProject } from '@/app/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: SafeProject;
  onOpen: (data: SafeProject) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: SafeProject) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
