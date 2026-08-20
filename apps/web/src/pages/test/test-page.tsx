import { useTranslation } from 'react-i18next';

export default function TestPage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{t('app.title')}</h1>
        <p className="mt-2 text-muted-foreground">Vite + React + Tailwind + shadcn/ui работают</p>
      </div>
    </main>
  );
}
