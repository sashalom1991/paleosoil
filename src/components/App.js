import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
// import { authOperations } from '../redux/auth';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';
import './App.css';
import Fallback from './Fallback/Fallback';

// lazy-loading pages:
const LoginView = lazy(() => import('../views/LoginView'));
const NewObjectAddView = lazy(() => import('../views/NewObjectAddView'));
const HomeView = lazy(() => import('../views/HomeView'));
const StatisticsView = lazy(() => import('../views/StatisticsView'));
const TableView = lazy(() => import('../views/TableView'));
const MapView = lazy(() => import('../views/MapView'));
const NotFound = lazy(() => import('../views/NotFound'));

function App() {
  // const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  // useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);

  return (
    <div className="App">
      {!isFetchingCurrentUser && (
        <Suspense fallback={<Fallback />}>
          <Routes>
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
                path="/table"
                element={
                  <PublicRoute>
                    <TableView />
                  </PublicRoute>
                }
              />
              <Route
                path="/analytic"
                element={
                  <PublicRoute>
                    <StatisticsView />
                  </PublicRoute>
                }
              />
              <Route
                path="/map"
                element={
                  <PublicRoute>
                    <MapView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/add"
                element={
                  <PrivateRoute>
                    <NewObjectAddView />
                  </PrivateRoute>
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

export default App;
