import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { PreviewSlider } from '@/widgets/preview-slider';
import { Main } from '@shared/ui/main';
import { Layout } from '@shared/ui/layout';

export default function HomePage(): React.JSX.Element {
  return (
    <Layout>
      <Header />

      <Main>
        <PreviewSlider />
      </Main>

      <Footer />
    </Layout>
  );
}
