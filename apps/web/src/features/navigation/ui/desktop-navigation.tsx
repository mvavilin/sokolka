import { NavigationItem, desktopNavigation } from '@features/navigation';

export default function DesktopNavigation(): React.JSX.Element {
  return (
    <nav className="hidden items-center justify-center gap-1 lg:flex">
      {desktopNavigation.map((item) => (
        <NavigationItem key={item.href} {...item} />
      ))}
    </nav>
  );
}
