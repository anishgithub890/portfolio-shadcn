'use client';

interface FeedbackInfoProps {
  type?: string;
  comment?: string;
}

const AdminFeedbackInfo: React.FC<FeedbackInfoProps> = ({ type, comment }) => {
  return (
    <div className="col-span-8 flex flex-col gap-8">
      <div className="text-start font-semibold">
        <h2 className="text-2xl underline underline-offset-[7px] decoration-dashed">
          Feedback type is {type}
        </h2>
      </div>
      <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-md p-8 md:p-0">
        <div className="pt-6 md:p-8 space-y-4">
          <div className="text-md font-medium dark:text-white text-zinc-900">
            Feedback is: {comment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFeedbackInfo;
