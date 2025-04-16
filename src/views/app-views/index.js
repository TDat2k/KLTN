import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const ClientSide = lazy(() => import('./client-side'));

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Routes>
        <Route path={`${APP_PREFIX_PATH}/client-side/*`} element={<ClientSide />} />
        <Route path={`${APP_PREFIX_PATH}`} element={<Navigate to={`${APP_PREFIX_PATH}/client-side/*`} replace />} />
      </Routes>
    </Suspense>
  );
};

export default React.memo(AppViews);
