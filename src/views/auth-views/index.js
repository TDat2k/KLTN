import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig';

const Login = lazy(() => import('./authentication/login'));
const Login1 = lazy(() => import('./authentication/login-1'));
const Login2 = lazy(() => import('./authentication/login-2'));
const Register1 = lazy(() => import('./authentication/register-1'));
const Register2 = lazy(() => import('./authentication/register-2'));
const ForgotPassword = lazy(() => import('./authentication/forgot-password'));
const Error1 = lazy(() => import('./errors/error-page-1'));
const Error2 = lazy(() => import('./errors/error-page-2'));

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="page" />}>
      <Routes>
        <Route path={`${AUTH_PREFIX_PATH}/login`} element={<Login />} />
        <Route path={`${AUTH_PREFIX_PATH}/login-1`} element={<Login1 />} />
        <Route path={`${AUTH_PREFIX_PATH}/login-2`} element={<Login2 />} />
        <Route path={`${AUTH_PREFIX_PATH}/register-1`} element={<Register1 />} />
        <Route path={`${AUTH_PREFIX_PATH}/register-2`} element={<Register2 />} />
        <Route path={`${AUTH_PREFIX_PATH}/forgot-password`} element={<ForgotPassword />} />
        <Route path={`${AUTH_PREFIX_PATH}/error-1`} element={<Error1 />} />
        <Route path={`${AUTH_PREFIX_PATH}/error-2`} element={<Error2 />} />

        {/* Redirect nếu chỉ vào /auth → chuyển sang /auth/login */}
        <Route path={`${AUTH_PREFIX_PATH}`} element={<Navigate to={`${AUTH_PREFIX_PATH}/login`} replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
