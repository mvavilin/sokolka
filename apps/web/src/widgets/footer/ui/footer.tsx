import { Container } from '@shared/ui/container';
import Logo from '@shared/ui/logo';
import { ProjectLogo } from '@shared/ui/project-logo';

import { FooterAuthor, FooterCopyright, FooterNavigation } from '@widgets/footer';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t">
      <Container className="py-4 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <ProjectLogo />
          <Logo />
        </div>

        <FooterNavigation />

        <div className="flex justify-center md:justify-end">
          <FooterAuthor />
        </div>
      </Container>

      <FooterCopyright />
    </footer>
  );
}
