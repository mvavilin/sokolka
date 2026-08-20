import { Container } from '@shared/ui/container';
import Logo from '@shared/ui/logo';

import { Navigation } from '@features/navigation';
import { HeaderActions } from '@widgets/header';

export default function Header(): React.JSX.Element {
  return (
    <header className="border-b">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <Navigation />

        <HeaderActions />
      </Container>
    </header>
  );
}
