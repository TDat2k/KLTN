import React from "react";
import { Button, Card, Row, Col, Carousel, Typography, List } from "antd";
import { Link } from "react-router-dom";
import {
  DeploymentUnitOutlined,
  CustomerServiceOutlined,
  MobileOutlined,
  ArrowRightOutlined,
  AppstoreOutlined,
  CodeOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";
import "../client.css";

const { Title, Paragraph, Text } = Typography;

const contentStyle = {
  height: "400px",
  color: "#fff",
  // lineHeight: "400px",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
};

const textWrapperStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#fff",
};

const HomePage = () => {
  const reasons = [
    {
      icon: (
        <DeploymentUnitOutlined style={{ fontSize: 40, color: "#1890ff" }} />
      ),
      title: "Tập trung vào quy trình và hiệu suất",
      description:
        "Tối ưu hóa toàn bộ chuỗi quy trình doanh nghiệp với hệ thống ERP linh hoạt, giúp bạn tăng hiệu suất làm việc và tiết kiệm chi phí.",
    },
    {
      icon: (
        <CustomerServiceOutlined style={{ fontSize: 40, color: "#1890ff" }} />
      ),
      title: "Đồng hành và hỗ trợ tận tâm",
      description:
        "Đội ngũ kỹ sư và chuyên gia của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn trong suốt hành trình chuyển đổi số.",
    },
    {
      icon: <MobileOutlined style={{ fontSize: 40, color: "#1890ff" }} />,
      title: "Đa nền tảng – Web và Mobile",
      description:
        "Hệ thống được xây dựng để tương thích cả trên trình duyệt và ứng dụng di động, phù hợp với nhu cầu linh hoạt của doanh nghiệp hiện đại.",
    },
  ];

  const services = [
    {
      icon: <AppstoreOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Xây dựng hệ thống ERP",
      description:
        "Phát triển các hệ thống ERP tuỳ biến phù hợp với quy trình vận hành của doanh nghiệp, từ quản lý nhân sự, bán hàng đến sản xuất.",
    },
    {
      icon: <CodeOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Phát triển phần mềm theo yêu cầu",
      description:
        "Thiết kế và lập trình ứng dụng web, app mobile theo nhu cầu riêng biệt, đáp ứng đặc thù ngành nghề của doanh nghiệp.",
    },
    {
      icon: <CloudServerOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Tư vấn & triển khai chuyển đổi số",
      description:
        "Phân tích hệ thống hiện tại, tư vấn giải pháp và triển khai hạ tầng số hoá giúp doanh nghiệp vận hành linh hoạt và hiệu quả hơn.",
    },
    {
      icon: <MobileOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
      title: "Phát triển App Mobile doanh nghiệp",
      description:
        "Xây dựng ứng dụng di động phục vụ hoạt động nội bộ hoặc khách hàng, tích hợp chặt chẽ với hệ thống ERP và dữ liệu doanh nghiệp.",
    },
  ];

  return (
    <>
      <div>
        <Carousel effect="fade">
          {/* Slide 1: Slogan */}
          <div>
            <div
              style={{
                ...contentStyle,
                backgroundImage: "url(/images/slide1.jpg)", // bạn thay bằng link ảnh thực tế
              }}
            >
              <div style={overlayStyle} />
              <div style={textWrapperStyle}>
                <h1
                  className="carousel-fade-down"
                  style={{ fontSize: 36, fontWeight: "bold", color: "#fff" }}
                >
                  Giải pháp phần mềm - Linh hoạt, Bền vững, Hiệu quả
                </h1>
              </div>
            </div>
          </div>

          {/* Slide 2: Sản phẩm */}
          <div>
            <div
              style={{
                ...contentStyle,
                backgroundImage: "url(/images/slide2.jpg)",
              }}
            >
              <div style={overlayStyle} />
              <div style={textWrapperStyle}>
                <h1 style={{ fontSize: 36, fontWeight: "bold" }}>
                  Khám phá các giải pháp & sản phẩm của chúng tôi
                </h1>
                <Link to="/Provision">
                  <Button
                    type="primary"
                    size="small"
                    icon={<ArrowRightOutlined />}
                  >
                    Xem sản phẩm
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 3: Tuyển dụng */}
          <div>
            <div
              style={{
                ...contentStyle,
                backgroundImage: "url(/images/slide3.jpg)",
              }}
            >
              <div style={overlayStyle} />
              <div style={textWrapperStyle}>
                <h1 style={{ fontSize: 36, fontWeight: "bold" }}>
                  Cơ hội nghề nghiệp cùng chúng tôi
                </h1>
                <Link to="/Career">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                  >
                    Ứng tuyển ngay
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 4: Giới thiệu công ty */}
          <div>
            <div
              style={{
                ...contentStyle,
                backgroundImage: "url(/images/slide4.jpg)",
              }}
            >
              <div style={overlayStyle} />
              <div style={textWrapperStyle}>
                <h1 style={{ fontSize: 36, fontWeight: "bold" }}>
                  Về chúng tôi
                </h1>
                <p style={{ fontSize: 18, maxWidth: 600, margin: "0 auto" }}>
                  Chúng tôi là đội ngũ đam mê công nghệ, luôn không ngừng sáng
                  tạo để mang đến giá trị cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div style={{ padding: "40px" }}>
        {/* About Us Section */}
        <section style={{ marginTop: "40px", textAlign: "center" }}>
          <div
            style={{
              padding: "60px 50px",
              backgroundColor: "#ffffff",
              textAlign: "center",
            }}
          >
            <Title level={3} style={{ marginBottom: 40 }}>
              Tại sao nên chọn chúng tôi?
            </Title>
            <Row gutter={[32, 32]} justify="center">
              {reasons.map((item, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    bordered={false}
                    style={{ textAlign: "center", minHeight: 250 }}
                  >
                    <div style={{ marginBottom: 16 }}>{item.icon}</div>
                    <Title level={5}>{item.title}</Title>
                    <Paragraph style={{ color: "#555" }}>
                      {item.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          {/* PHẦN GIỚI THIỆU CÔNG TY */}
          <div style={{ padding: "80px 50px", backgroundColor: "#f9f9f9" }}>
            <Row align="middle" gutter={64}>
              <Col xs={24} md={14}>
                <Text type="secondary" style={{ fontSize: 16 }}>
                  Welcome to D'company
                </Text>
                <Title style={{ marginTop: 8 }}>
                  Giải pháp chuyển đổi số dành cho doanh nghiệp hiện đại
                </Title>
                <Paragraph style={{ fontSize: 16, color: "#555" }}>
                  D'company là công ty công nghệ hàng đầu chuyên cung cấp các
                  giải pháp chuyển đổi số toàn diện cho doanh nghiệp vừa và nhỏ
                  cũng như các tập đoàn lớn. Chúng tôi xây dựng hệ thống ERP
                  trên cả nền tảng web và mobile để tối ưu hoá quy trình kinh
                  doanh, giúp doanh nghiệp tăng tốc phát triển trong thời đại
                  số.
                </Paragraph>
                <List
                  dataSource={[
                    "Giải pháp ERP toàn diện cho doanh nghiệp SMEs và tập đoàn",
                    "Tùy biến linh hoạt theo nhu cầu nghiệp vụ thực tế",
                    "Tương thích trên cả nền tảng Website và Mobile",
                    "Đội ngũ kỹ thuật giàu kinh nghiệm và tận tâm",
                  ]}
                  renderItem={(item) => (
                    <List.Item style={{ padding: "4px 0" }}>• {item}</List.Item>
                  )}
                />
              </Col>

              <Col xs={24} md={10}>
                <img
                  src="/images/hero-image.jpg"
                  alt="Digital Transformation"
                  style={{ width: "100%", borderRadius: 8 }}
                />
              </Col>
            </Row>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ marginTop: "40px" }}>
          <div
            style={{
              padding: "60px 50px",
              backgroundColor: "#ffffff",
              textAlign: "center",
            }}
          >
            <Title level={3} style={{ marginBottom: 40 }}>
              Dịch vụ của chúng tôi
            </Title>
            <Row gutter={[32, 32]} justify="center">
              {services.map((service, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Card
                    bordered={false}
                    style={{
                      borderRadius: 12,
                      padding: 24,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      minHeight: 260,
                    }}
                  >
                    <div style={{ marginBottom: 16 }}>{service.icon}</div>
                    <Title level={5}>{service.title}</Title>
                    <Paragraph style={{ color: "#555" }}>
                      {service.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Call to Action */}
        <section
          style={{
            marginTop: "50px",
            textAlign: "center",
            padding: "30px",
            background: "#E3F2FD",
            borderRadius: "10px",
          }}
        >
          <h2>Join Us Today!</h2>
          <p>
            Be a part of our growing company. Apply now and shape your future.
          </p>
          <Link to="/Career">
            <Button type="primary" size="large">
              Apply Now
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default HomePage;
