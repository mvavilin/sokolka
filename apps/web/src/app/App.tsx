import { RouterProvider, SettingsProvider } from '@app';

const App = (): React.JSX.Element => (
  <SettingsProvider>
    <RouterProvider />
  </SettingsProvider>
);

export default App;
