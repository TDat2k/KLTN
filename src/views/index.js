import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import AppLayout from "layouts/app-layout";
import AuthLayout from "layouts/auth-layout";
import AppLocale from "lang";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "configs/AppConfig";
import useBodyClass from "hooks/useBodyClass";

//test
import ClientSide from "./client-views";

// Route interceptor cho các route cần xác thực
function ProtectedRoute({ isAuthenticated, children }) {
  const location = useLocation();
  if (!isAuthenticated) {
    return (
      <Navigate to={AUTH_PREFIX_PATH} state={{ from: location }} replace />
    );
  }
  return children;
}

const Views = (props) => {
  const { locale, token, direction } = props;
  const currentAppLocale = AppLocale[locale];

  useBodyClass(`dir-${direction}`);

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ConfigProvider locale={currentAppLocale.antd} direction={direction}>
        <Routes>
          {/* <Route path="/" element={<Navigate to={APP_PREFIX_PATH} replace />} />

          <Route
            path={`${AUTH_PREFIX_PATH}/*`}
            element={<AuthLayout direction={direction} />}
          />

          <Route
            path={`${APP_PREFIX_PATH}/*`}
            element={
              // <ProtectedRoute isAuthenticated={token}>
              <AppLayout direction={direction} />
              // </ProtectedRoute>
            }
          /> */}

          <Route path="/" element={<ClientSide />} />
        </Routes>
      </ConfigProvider>
    </IntlProvider>
  );
};

const mapStateToProps = ({ theme, auth }) => {
  const { locale, direction } = theme;
  const { token } = auth;
  return { locale, direction, token };
};

export default connect(mapStateToProps)(Views);
