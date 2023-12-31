import { Popover } from '@headlessui/react';
import { X } from 'lucide-react';

export const CloseButton = () => {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-white hover:text-white"
      title="Close feedback form"
    >
      <X className="w-4 h-4" />
    </Popover.Button>
  );
};
