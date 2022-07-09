import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Bars } from "react-loader-spinner";

import "./App.css";
const HomeView = lazy(() => import("../views/HomeView"));
const TableView = lazy(() => import("../views/TableView"));
const MapView = lazy(() => import("../views/MapView"));
const NotFound = lazy(() => import("../views/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense>
          <Routes fallback={<Bars color="#00BFFF" height={80} width={80} />}>
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
