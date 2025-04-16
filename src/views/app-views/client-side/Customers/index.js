import React from "react";
import { Row, Col, Tooltip, Typography } from "antd";

const { Title, Paragraph } = Typography;

const customers = [
  { name: "Mandiri Sekuritas", image: "mandiri.png", project: "Financial Platform", duration: "2021 - 2022" },
  { name: "Amartha", image: "amartha.png", project: "Microfinance App", duration: "2020 - Present" },
  { name: "Paxel", image: "paxel.png", project: "Logistics Solution", duration: "2019 - Present" },
  { name: "Cisco", image: "cisco.png", project: "Networking Infrastructure", duration: "2022 - Present" },
  { name: "Wahyoo", image: "wahyoo.png", project: "F&B Management System", duration: "2020 - 2021" },
  { name: "Legoas", image: "legoas.png", project: "E-commerce Integration", duration: "2018 - 2020" },
  { name: "Lubna", image: "lubna.png", project: "Investment Platform", duration: "2021 - Present" },
  { name: "Riliv", image: "riliv.png", project: "Mental Health App", duration: "2019 - Present" },
  { name: "Universitas Airlangga", image: "unair.png", project: "E-learning System", duration: "2021 - 2022" },
];

const Customers = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Title level={2}>Our Customers are our biggest fans</Title>
      <Paragraph>
        We have helped startups around the globe as well as Fortune 500 companies
      </Paragraph>
      <Row gutter={[16, 16]}>
        {customers.map((customer) => (
          <Col key={customer.name} xs={12} sm={8} md={6} lg={4} style={{ textAlign: "center" }}>
            <Tooltip title={`${customer.name}\n${customer.project}\nDuration: ${customer.duration}`}>
              <img src={customer.image} alt={customer.name} style={{ width: "80px", filter: "grayscale(100%)", transition: "filter 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%)"}
                onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"}
              />
            </Tooltip>
          </Col>
        ))}
      </Row>
      <Paragraph style={{ color: "#a8eb12", cursor: "pointer", marginTop: "20px" }}>See All</Paragraph>
    </div>
  );
};

export default Customers;
