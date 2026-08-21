import { useTranslation } from 'react-i18next';

import { Popover, PopoverContent, PopoverTrigger } from '@shared/ui/popover';

import { FooterContacts } from '@widgets/footer';

export default function FooterAuthor(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-2 md:items-start">
      <span className="text-sm text-muted-foreground">{t('footer.author')}</span>

      <Popover>
        <PopoverTrigger className="text-sm font-medium underline-offset-4 hover:underline">
          {t('footer.authorName')}
        </PopoverTrigger>

        <PopoverContent className="w-48">
          <FooterContacts />
        </PopoverContent>
      </Popover>
    </div>
  );
}
