import { useTranslation } from 'react-i18next';

import { Container } from '@shared/ui/container';

import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

export default function HomePage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Container className="py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{t('pages.home.title')}</h1>

            <p className="mt-2 text-muted-foreground">
              Vite + React + Tailwind + shadcn/ui работают
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
