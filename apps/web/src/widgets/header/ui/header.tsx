import { Container } from '@shared/ui/container';
import { Logo } from '@shared/ui/logo';

import { HeaderNav } from '@widgets/header';

export function Header(): React.JSX.Element {
  return (
    <header className="border-b">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <HeaderNav />
      </Container>
    </header>
  );
}
