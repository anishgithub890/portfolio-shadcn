import * as z from 'zod';
import qs from 'query-string';
import axios from 'axios';
import { ArrowLeft, Loader } from 'lucide-react';
import { useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';

import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { CloseButton } from '../../close-button';
import { Input } from '@/components/ui/input';
import { ScreenshotButton } from '../screenshot-button';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  type: z.string().min(1),
  comment: z.string().min(1, {
    message: 'comment is required.',
  }),
});

type FeedbackFormValues = z.infer<typeof formSchema>;

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: feedbackType,
      comment: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: '/api/feedbacks',
      });
      await axios.post(url, values);

      toast('Feedback has been created', {
        description: 'thank you for your feedback',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft className="w-4 h-4 text-slate-900 font-bold" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <Image
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
            width={200}
            height={200}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-6">
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Comment
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    {...field}
                    className="bg-zinc-300/50 dark:bg-zinc-600/50 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 p-8 text-sm"
                    placeholder="Enter your feedback"
                  />
                </FormControl>
                <FormMessage className="text-rose-600" />
              </FormItem>
            )}
          />
          <footer className="flex gap-2 mt-2">
            <ScreenshotButton
              screenshot={screenshot}
              onScreenshotTook={setScreenshot}
            />
            <Button disabled={isLoading} variant="outline">
              {isSendingFeedback ? (
                <Loader className="animate-spin" />
              ) : (
                'Send feedback'
              )}
            </Button>
          </footer>
        </form>
      </Form>
    </>
  );
};