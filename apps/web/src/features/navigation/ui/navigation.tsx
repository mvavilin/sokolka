import { DesktopNavigation, MobileNavigation } from '@features/navigation';

export default function Navigation(): React.JSX.Element {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
}
