// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { AppRoutes } from '@app';

const RouterProvider = (): React.JSX.Element => (
  <>
    {/* <BrowserRouter basename="/sokolka"> */}
    <HashRouter>
      <AppRoutes />
    </HashRouter>
    {/* </BrowserRouter> */}
  </>
);

export default RouterProvider;
