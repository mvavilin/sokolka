export function NotFoundPage(): React.JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <span className="text-8xl font-bold">404</span>

      <h1 className="mt-4 text-2xl font-semibold">Страница не найдена</h1>

      <p className="mt-2 text-muted-foreground">
        Возможно, страница была удалена или адрес указан неверно.
      </p>
    </main>
  );
}
