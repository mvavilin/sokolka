import { clsx } from 'clsx';

import type { PropsWithChildren } from 'react';

interface MainProps extends PropsWithChildren {
  className?: string;
}

export function Main({ children, className }: MainProps): React.JSX.Element {
  return <main className={clsx('flex-1', className)}>{children}</main>;
}
