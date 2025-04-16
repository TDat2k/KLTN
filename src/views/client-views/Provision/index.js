import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import {
  AppstoreOutlined,
  CodeOutlined,
  CloudServerOutlined,
  MobileOutlined,
  SafetyOutlined,
  ShareAltOutlined,
  HighlightOutlined,
  SolutionOutlined,
  BarChartOutlined,
  ShoppingCartOutlined,
  CloudUploadOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ServicesPage = () => {
  const services = [
    {
      icon: <AppstoreOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Giải pháp ERP doanh nghiệp",
      description:
        "Xây dựng hệ thống ERP tùy chỉnh cho doanh nghiệp, hỗ trợ toàn bộ quy trình quản lý từ nhân sự, tài chính, sản xuất đến bán hàng.",
    },
    {
      icon: <CodeOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Phát triển phần mềm theo yêu cầu",
      description:
        "Tư vấn, thiết kế và lập trình ứng dụng web và hệ thống backend đáp ứng quy trình vận hành riêng của từng doanh nghiệp.",
    },
    {
      icon: <MobileOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Phát triển ứng dụng mobile",
      description:
        "Xây dựng app nội bộ hoặc khách hàng trên nền tảng iOS/Android giúp doanh nghiệp tiếp cận người dùng một cách hiệu quả.",
    },
    {
      icon: <CloudServerOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Tư vấn & triển khai chuyển đổi số",
      description:
        "Phân tích hệ thống hiện tại và lập kế hoạch số hóa toàn diện để nâng cao hiệu quả quản lý và khả năng cạnh tranh.",
    },
    {
      icon: <SafetyOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Bảo mật hệ thống & dữ liệu",
      description:
        "Triển khai các giải pháp an toàn thông tin, bảo vệ hệ thống và dữ liệu khỏi tấn công mạng, mất mát thông tin.",
    },
    {
      icon: <ShareAltOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Tích hợp hệ thống",
      description:
        "Kết nối các hệ thống phần mềm cũ, phần mềm bên thứ ba vào hệ thống trung tâm ERP giúp quản lý tập trung, thống nhất.",
    },
    {
      icon: <HighlightOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Thiết kế UX/UI chuyên nghiệp",
      description:
        "Tạo giao diện đẹp mắt, tối ưu trải nghiệm người dùng trên cả desktop và mobile giúp tăng tỷ lệ chuyển đổi.",
    },
    {
      icon: <SolutionOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Tư vấn chiến lược số hóa toàn diện",
      description:
        "Định hướng và thiết kế lộ trình chuyển đổi số phù hợp với đặc thù từng doanh nghiệp.",
    },
    {
      icon: <BarChartOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Phân tích dữ liệu & báo cáo BI",
      description:
        "Xây dựng hệ thống phân tích trực quan, theo dõi chỉ số kinh doanh, hiệu suất theo thời gian thực.",
    },
    {
      icon: <ShoppingCartOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Tích hợp thanh toán & TMĐT",
      description:
        "Kết nối hệ thống với các nền tảng thanh toán và sàn thương mại điện tử phổ biến tại Việt Nam.",
    },
    {
      icon: <CloudUploadOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Chuyển đổi lên Cloud",
      description:
        "Tư vấn, triển khai và tối ưu chi phí chuyển hệ thống từ server truyền thống lên cloud như AWS, GCP.",
    },
    {
      icon: <ReadOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Đào tạo & chuyển giao hệ thống",
      description:
        "Hướng dẫn sử dụng chi tiết và đồng hành hỗ trợ người dùng vận hành hệ thống hiệu quả.",
    },
  ];

  return (
    <div>
      {/* Dịch vụ chi tiết */}
      <div style={{ padding: "60px 50px", textAlign: "center" }}>
        <Title level={3} style={{ marginBottom: 40 }}>
          Dịch vụ của chúng tôi
        </Title>
        <Row gutter={[32, 32]} justify="center">
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                bordered={false}
                style={{
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  minHeight: 280,
                }}
              >
                <div style={{ marginBottom: 16 }}>{service.icon}</div>
                <Title level={5}>{service.title}</Title>
                <Paragraph style={{ color: "#555" }}>
                  {service.description}
                </Paragraph>
                <a
                  href="#contact"
                  style={{ color: "#1890ff", fontWeight: 500 }}
                >
                  Xem chi tiết
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div
        style={{
          background: "url('/images/tech-banner.jpg') center/cover no-repeat",
          padding: "100px 20px",
          textAlign: "center",
          color: "#fff",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Title level={3} style={{ color: "#fff" }}>
            Bạn đang muốn tìm kiếm giải pháp công nghệ?
          </Title>
          <Paragraph style={{ fontSize: 16, color: "#eee" }}>
            Liên hệ với chúng tôi: <strong>012.3344.566</strong>
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{
              borderRadius: 10,
            }}
          >
            Liên hệ với chúng tôi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
