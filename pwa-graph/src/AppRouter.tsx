import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./AppRouter.css";

function DynamicLoader(props: any) {
  const LazyComponent = React.lazy(
    () => import(`./charts/${props.component}/${props.component}`)
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

function NavigationLink() {
  return (
    <nav>
      <ul className="horizontal-list">
        <li>
          <Link to="/d3">D3.js</Link>
        </li>
        <li>
          <Link to="/chart">Chart.js</Link>
        </li>
        <li>
          <Link to="/google">Google Chart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavigationLink />
      <Routes>
        <Route path="/" element={<Navigate replace to="/d3" />} />
        <Route path="/d3" element={<DynamicLoader component="d3js" />} />
        <Route path="/chart" element={<DynamicLoader component="chartjs" />} />
        <Route path="/google" element={<DynamicLoader component="google" />} />
      </Routes>
    </BrowserRouter>
  );
}
