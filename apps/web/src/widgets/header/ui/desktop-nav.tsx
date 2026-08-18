import { navigation, NavItem } from '@widgets/header';

export function DesktopNav(): React.JSX.Element {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navigation.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
    </nav>
  );
}
