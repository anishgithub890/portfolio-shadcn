'use client';

interface HeadingProps {
  title: string;
  description: string;
  center?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  center,
}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-neutral-700">
        {title}
      </h2>
      <p className="text-sm font-light text-muted-foreground text-zinc-500 dark:text-neutral-500">
        {description}
      </p>
    </div>
  );
};
