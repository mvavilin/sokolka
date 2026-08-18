import { Navigate, Route, Routes } from 'react-router-dom';

import {
  AboutPage,
  AttractionsPage,
  GalleryPage,
  HistoryPage,
  HomePage,
  NotFoundPage,
  SettingsPage,
} from '@pages';

const AppRoutes = (): React.JSX.Element => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/history" element={<HistoryPage />} />
    <Route path="/attractions" element={<AttractionsPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/settings" element={<SettingsPage />} />

    <Route path="/404" element={<NotFoundPage />} />
    <Route path="*" element={<Navigate to="/404" replace />} />
  </Routes>
);

export default AppRoutes;
