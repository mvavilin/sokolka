import { Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { LanguageSettingsSelect, ThemeSettingsSelect } from '@features/settings';

import { Button } from '@shared/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@shared/ui/sheet';

import { mobileNavigation, NavigationItem } from '@features/navigation';

export default function MobileNavigation(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="xl:hidden">
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

          <div className="flex flex-col gap-8">
            <nav className="flex flex-col gap-2">
              {mobileNavigation.map((item) => (
                <NavigationItem key={item.href} {...item} />
              ))}
            </nav>

            <div className="flex flex-col gap-2 px-3">
              <ThemeSettingsSelect />
              <LanguageSettingsSelect />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
