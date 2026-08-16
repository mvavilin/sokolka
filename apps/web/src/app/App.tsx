import { RouterProvider } from '@app';
// import { RouterProvider, SettingsProvider } from '@app';
// import { SettingsControls } from '@features/settings';

// const App = (): React.JSX.Element => (
//   <SettingsProvider>
//     <div className="fixed top-4 right-4 z-50 rounded-lg border bg-background p-4 shadow-md">
//       <SettingsControls />
//     </div>

//     <RouterProvider />
//   </SettingsProvider>
// );

const App = (): React.JSX.Element => (
  <>
    <RouterProvider />
  </>
);

export default App;
