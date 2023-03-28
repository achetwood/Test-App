import { Route, Routes } from 'react-router-dom';
import ClientsList from 'pages/clientList/PatientList';

export const routePaths = {
  home: '/',
} as const;

export function IndexRoutes() {
  return (
    <Routes>
      <Route path={routePaths.home} element={<ClientsList />} />
    </Routes>
  );
}
