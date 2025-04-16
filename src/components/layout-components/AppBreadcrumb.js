import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import navigationConfig from "configs/NavigationConfig";
import IntlMessage from "components/util-components/IntlMessage";

// Build breadcrumb data from navigation config
let breadcrumbData = {
  "/app": <IntlMessage id="home" />,
};

const assignBreadcrumb = (obj) => {
  if (obj.path) {
    breadcrumbData[obj.path] = <IntlMessage id={obj.title} />;
  }
};

navigationConfig.forEach((elm) => {
  assignBreadcrumb(elm);
  if (elm.submenu) {
    elm.submenu.forEach((sub) => {
      assignBreadcrumb(sub);
      if (sub.submenu) {
        sub.submenu.forEach((child) => {
          assignBreadcrumb(child);
        });
      }
    });
  }
});

const AppBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const buildBreadcrumb = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbData[url] || url}</Link>
      </Breadcrumb.Item>
    );
  });

  return <Breadcrumb>{buildBreadcrumb}</Breadcrumb>;
};

export default AppBreadcrumb;
