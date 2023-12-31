import { useState } from 'react';
import { Check, Copy, Server } from 'lucide-react';
// import { toast } from 'react-hot-toast';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge, BadgeProps } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ApiAlertProps {
  title: string;
  description: string;
  variant: 'public' | 'admin';
}

const textMap: Record<ApiAlertProps['variant'], string> = {
  public: 'Public',
  admin: 'Admin',
};

const variantMap: Record<ApiAlertProps['variant'], BadgeProps['variant']> = {
  public: 'secondary',
  admin: 'destructive',
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = 'public',
}) => {
  const initialIcon = (
    <div className="flex flex-row gap-1">
      <Copy className="w-5 h-5 transition font-semibold pt-1" />
      <p className="h-6 w-6 text-zinc-900 dark:text-white font-semibold transition">
        Copy
      </p>
    </div>
  );
  const [buttonIcon, setButtonIcon] = useState(initialIcon);

  const onCopy = () => {
    setButtonIcon(
      <div className="flex flex-row gap-1">
        <Check className="w-5 h-5 transition font-bold pt-1" />
        <p className="h-6 w-6 text-zinc-900 dark:text-white font-bold transition">
          copied!
        </p>
      </div>
    );
    setTimeout(() => {
      setButtonIcon(initialIcon);
    }, 1000); // 👈 change icon back after 1 second

    navigator.clipboard.writeText(description);
    // toast('API Route copied to the clipboard');
    toast.success('API Route', {
      description: 'Copied to the clipboard',
      action: {
        label: 'Close',
        onClick: () => console.log('Undo'),
      },
    });
  };

  return (
    <>
      <Alert>
        <Server className="h-4 w-4" />
        <AlertTitle className="flex items-center gap-x-2">
          {title}
          <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
        </AlertTitle>
        <AlertDescription className="mt-4 flex items-center justify-between">
          <code className="relative break-all rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {description}
          </code>
          <Button className="pl-2" variant="outline" size="lg" onClick={onCopy}>
            {buttonIcon}
          </Button>
        </AlertDescription>
      </Alert>
    </>
  );
};
