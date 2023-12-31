import Image from 'next/image';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../close-button';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Leave your feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-slate-200 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <Image
                src={value.image.source}
                alt={value.image.alt}
                width={50}
                height={50}
              />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
