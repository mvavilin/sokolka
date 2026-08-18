import { Menu } from 'lucide-react';

import { Button } from '@shared/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@shared/ui/sheet';

import { navigation, NavItem } from '@widgets/header';
import { useTranslation } from 'react-i18next';

export function MobileNav(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          render={<Button variant="ghost" size="icon" aria-label={t('mobileNav.openMenu')} />}
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>{t('mobileNav.navigation')}</SheetTitle>
          </SheetHeader>

          <nav className="mt-6 flex flex-col gap-2">
            {navigation.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
