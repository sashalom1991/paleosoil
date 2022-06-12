import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
const HomeView = lazy(() => import("../views/HomeView"));
const TableView = lazy(() => import("../views/TableView"));
const MapView = lazy(() => import("../views/MapView"));
const NotFound = lazy(() => import("../views/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense>
          <Routes fallback={<div>Завантаження...</div>}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeView />} />
              <Route path="/table" element={<TableView />} />
              <Route path="/map" element={<MapView />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
