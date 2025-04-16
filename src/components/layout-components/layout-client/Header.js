import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Row, Col, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Header } = Layout;

const menuItems = [
  { key: "/HomePage", label: "Trang chủ" },
  { key: "/Work", label: "Dự án" },
  { key: "/Provision", label: "Dịch vụ" },
  { key: "/Customers", label: "Khách hàng" },
  { key: "/Team", label: "Đội ngũ" },
  { key: "/Career", label: "Tuyển dụng" },
  { key: "/Contact", label: "Liên hệ" },
];

const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 860);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 860);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (e) => {
    navigate(e.key);
  };

  const dropdownMenu = (
    <Menu onClick={handleClick} selectedKeys={[currentPath]}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Header
      className="custom-header"
      style={{ padding: "0 20px", backgroundColor: "#fff" }}
    >
      <Row align="middle" justify="space-between">
        <Col flex="auto">
          {isMobile ? (
            <Dropdown overlay={dropdownMenu} trigger={["click"]}>
              <Button icon={<MenuOutlined />} shape="circle" size="large" />
            </Dropdown>
          ) : (
            <Menu
              onClick={handleClick}
              selectedKeys={[currentPath]}
              mode="horizontal"
              className="nav-menu"
            >
              {menuItems.map((item) => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
              ))}
            </Menu>
          )}
        </Col>
        <Col>
          <Button type="primary" shape="round">
            Đăng nhập
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderNav;
