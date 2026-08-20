import { useTranslation } from 'react-i18next';

import { Container } from '@shared/ui/container';
import { Header } from '@widgets/header';

export default function AboutPage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <main>
        <Container className="py-8">
          <h1 className="text-3xl font-bold">{t('pages.about.title')}</h1>
        </Container>
      </main>
    </>
  );
}
