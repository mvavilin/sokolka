import { useTranslation } from 'react-i18next';

import { Container } from '@shared/ui/container';
import { Header } from '@widgets/header';

export default function HomePage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <main>
        <Container className="py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{t('pages.home.title')}</h1>

            <p className="mt-2 text-muted-foreground">
              Vite + React + Tailwind + shadcn/ui работают
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
