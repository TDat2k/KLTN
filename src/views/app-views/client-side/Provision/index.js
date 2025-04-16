import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const services = [
  {
    id: 1,
    title: "Mobile Application",
    description:
      "Building mobile applications is never easy. P2P lending app? Logistic App? E-Commerce App? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us.",
    image: "mobile-app.jpg",
  },
  {
    id: 2,
    title: "Web Application",
    description:
      "We specialize in developing high-performance web applications tailored to your business needs. Whether it's an enterprise platform, e-commerce solution, or custom SaaS product, we deliver efficient and scalable web solutions that ensure a seamless user experience.",
    image: "web-app.jpg",
  },
];

const Provision = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div style={{ padding: "50px" }}>
      <Row gutter={32} align="middle">
        {/* Left Card */}
        <Col span={16}>
          <Card
            style={{
              backgroundImage: `url(${selectedService.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "20px",
              transition: "background 0.5s ease-in-out",
            }}
          >
            <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
              {selectedService.title}
            </h1>
            <p style={{ fontSize: "16px" }}>{selectedService.description}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <LeftOutlined
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={() => setSelectedService(services[0])}
              />
              <RightOutlined
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={() => setSelectedService(services[1])}
              />
            </div>
          </Card>
        </Col>

        {/* Right Card */}
        <Col span={8}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>What We Do?</h1>
          {services.map((service) => (
            <p
              key={service.id}
              onClick={() => setSelectedService(service)}
              style={{
                fontSize: "20px",
                cursor: "pointer",
                fontWeight:
                  selectedService.id === service.id ? "bold" : "normal",
                color: selectedService.id === service.id ? "black" : "gray",
                transition: "color 0.3s ease-in-out",
              }}
            >
              - {service.title}
            </p>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Provision;
