'use client';

import { Popover } from '@headlessui/react';
import { BsChatDots } from 'react-icons/bs';

import { WidgetForm } from './widget-form';

export const Widget = () => {
  return (
    <Popover className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-green-300 outline-none rounded-full px-3 h-12 text-slate-700 flex items-center group">
        <BsChatDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear text-slate-700">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
