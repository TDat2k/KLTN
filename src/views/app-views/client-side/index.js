import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const HomePage = lazy(() => import("./HomePage"));
const Career = lazy(() => import("./Career"));
const Work = lazy(() => import("./Work"));
const Customers = lazy(() => import("./Customers"));
const Provision = lazy(() => import("./Provision"));

const ClientSide = () => {
  const match = useMatch("/app/client-side/*");

  const baseUrl = match?.pathnameBase || "/app/client-side";

  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Routes>
        <Route path="/" element={<Navigate to="HomePage" replace />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Career" element={<Career />} />
        <Route path="Work" element={<Work />} />
        <Route path="Customers" element={<Customers />} />
        <Route path="Provision" element={<Provision />} />
      </Routes>
    </Suspense>
  );
};

export default ClientSide;
