import { Container } from '@shared/ui/container';
import { Header } from '@widgets/header';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <main>
        <Container className="flex min-h-[60vh] items-center justify-center py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">404</h1>

            <h1 className="mt-4 text-2xl font-semibold">{t('pages.notFound.title')}</h1>

            <p className="mt-2 text-muted-foreground">{t('pages.description.title')}</p>
          </div>
        </Container>
      </main>
    </>
  );
}
