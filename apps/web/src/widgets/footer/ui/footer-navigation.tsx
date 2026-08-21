import { mobileNavigation, NavigationItem } from '@features/navigation';

export default function FooterNavigation(): React.JSX.Element {
  return (
    <nav className="mx-auto flex w-fit flex-col justify-center gap-2">
      {mobileNavigation.map((item) => (
        <NavigationItem key={item.href} {...item} />
      ))}
    </nav>
  );
}
