import React, { useState } from 'react';
import { FeedbackSuccessStep } from './steps/feedback-success-step';
import { FeedbackTypeStep } from './steps/feedback-type-step';
import { FeedbackContentStep } from './steps/feedback-content-step';

export const feedbackTypes = {
  PROBLEM: {
    title: 'Problem',
    image: {
      source: 'images/bug.svg',
      alt: 'image for problem',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: 'images/idea.svg',
      alt: 'image for idea',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: 'images/thought.svg',
      alt: 'image for outro',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-slate-50 text-slate-600 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackRestartRequested={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
    </div>
  );
}
