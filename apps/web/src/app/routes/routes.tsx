import { Routes, Route, Navigate } from 'react-router-dom';
import { TestPage, NotFoundPage } from '@pages';

const AppRoutes = (): React.JSX.Element => (
  <>
    <Routes>
      <Route path="/" element={<TestPage />} />

      <Route path="/404" element={<NotFoundPage />} />

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </>
);

export default AppRoutes;
