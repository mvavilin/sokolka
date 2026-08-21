import { ExternalLink } from 'lucide-react';

import { contacts } from '@widgets/footer';

export default function FooterContacts(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      {contacts.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <img src={icon} alt="" className="size-4" aria-hidden="true" />

          <span>{label}</span>

          <ExternalLink className="size-3 text-muted-foreground" />
        </a>
      ))}
    </div>
  );
}
