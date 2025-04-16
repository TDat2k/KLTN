import React from "react";
import { Layout, Grid } from "antd";
import ClientSide from "views/client-views";
import HeaderNav from "components/layout-components/layout-client/Header";

const { Content } = Layout;
const { useBreakpoint } = Grid;

export const ClientLayout = ({ children }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderNav isMobile={isMobile} />

      <Content style={{  background: "#fff" }}>
        <ClientSide />
      </Content>

      {/* <Footer /> */}
    </Layout>
  );
};

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, locale } = theme;
  return { navCollapsed, navType, locale };
};

export default ClientLayout;
