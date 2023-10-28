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
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
