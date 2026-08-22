import { clsx } from 'clsx';

import type { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

export function Layout({ children, className }: LayoutProps): React.JSX.Element {
  return <div className={clsx('flex min-h-screen flex-col', className)}>{children}</div>;
}
