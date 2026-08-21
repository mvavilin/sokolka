import { useTranslation } from 'react-i18next';

export default function FooterCopyright(): React.JSX.Element {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t py-4 text-center text-sm text-muted-foreground">
      © {currentYear} {t('footer.copyright')}
    </div>
  );
}
