import { DesktopNav, MobileNav } from '@widgets/header';

export function HeaderNav(): React.JSX.Element {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
