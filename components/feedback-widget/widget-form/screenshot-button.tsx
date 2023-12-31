// 'use client';

import html2canvas from 'html2canvas';
import { Camera, Loader, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-slate-700 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash2 className="w-4 h-4 text-red-500 hover:text-red-600 transition" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-slate-200 rounded-md border-transparent hover:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? (
        <p className="text-rose-500 font-semibold">
          <Loader className="animate-spin" />
        </p>
      ) : (
        <Camera className="h-6 w-6" />
      )}
    </button>
  );
};
