import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './components/auth/LoginPage/LoginPage';
import RequireAuth from './components/auth/RequireAuth';
import NewAdvertPage from './components/adverts/NewAdvertPage/NewAdvertPage';
import AdvertPage from './components/adverts/AdvertPage/AdvertPage';
import AdvertsPage from './components/adverts/AdvertsPage/AdvertsPage';
import Layout from './components/layout/Layout';
import NotFoundPage from './components/layout/notFound';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adverts" element={<Layout />}>
            <Route index element={<AdvertsPage />} />
            <Route path=":advertId" element={<AdvertPage />} />
            <Route
              path="/adverts/new"
              element={
                <RequireAuth>
                  <NewAdvertPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="/" element={<Navigate to="/adverts" />} />
          <Route path="/404" element={<RequireAuth><Layout /></RequireAuth>}>
           <Route index element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    </div>
  );
}

export default App;
