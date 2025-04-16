import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import HomePage from "./HomePage";
import Career from "./Career";
import Work from "./Work";
import Customers from "./Customers";
import Provision from "./Provision";

const ClientSide = () => {
  return (
    <>
      {/* <Suspense fallback={<Loading cover="content" />}> */}
      <Routes>
        {/* Redirect from root "/" to "/HomePage" */}
        <Route path="/" element={<Navigate to="/HomePage" replace />} />

        {/* Actual pages */}
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Provision" element={<Provision />} />

        {/* Optional fallback (404) */}
        {/* <Route path="*" element={<Navigate to="/HomePage" replace />} /> */}
      </Routes>
      {/* </Suspense> */}
    </>
  );
};

export default ClientSide;
