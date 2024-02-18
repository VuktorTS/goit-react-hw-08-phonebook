import Home from 'components/Home/Home';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestictedRoute from 'components/RestictedRoute/RestictedRoute';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { refreshThunk } from 'redux/auth/thunk';

const Layout = lazy(() => import('./components/Layout/Layout'));
const ContactsPage = lazy(() => import('./page/ContactsPage'));
const RegistrationPage = lazy(() => import('./page/RegistrationPage'));
const LogInPage = lazy(() => import('./page/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestictedRoute>
                  <LogInPage />
                </RestictedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestictedRoute>
                  <RegistrationPage />
                </RestictedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>

        <ToastContainer autoClose={2000} />
      </Suspense>
    </>
  );
};
