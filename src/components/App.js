import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
// import { authOperations } from '../redux/auth';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';
import './App.css';
// lazy-loading pages:
const LoginView = lazy(() => import('../views/LoginView'));
const NewObjectAddView = lazy(() => import('../views/NewObjectAddView'));
const HomeView = lazy(() => import('../views/HomeView'));
const TableView = lazy(() => import('../views/TableView'));
const MapView = lazy(() => import('../views/MapView'));
const NotFound = lazy(() => import('../views/NotFound'));

function App() {
  // const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  // useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);
  return (
    <div className="App">
      {!isFetchingCurrentUser ? (
        <Suspense>
          <Routes fallback={<Bars color="#00BFFF" height={80} width={80} />}>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />
              <Route
                path="table"
                element={
                  <PublicRoute>
                    <TableView />
                  </PublicRoute>
                }
              />
              <Route
                path="map"
                element={
                  <PublicRoute>
                    <MapView />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="add"
                element={
                  <PrivateRoute>
                    <NewObjectAddView />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      ) : (
        <Bars />
      )}
    </div>
  );
}

export default App;
