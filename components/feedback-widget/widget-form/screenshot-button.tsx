import { useState } from 'react';
import { Camera, Trash } from 'lucide-react';
import html2canvas from 'html2canvas';

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
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-700 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash className="text-zinc-900 hover:text-zinc-700 transition" />
      </button>
    );
  }

  return (
    <button>
      {isTakingScreenshot ? (
        <p className="text-rose-500 font-serif">Loading...</p>
      ) : (
        <Camera className="h-6 w-6" />
      )}
    </button>
  );
};
