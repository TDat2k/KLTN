import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Row, Col, Button } from "antd";

const steps = [
  { id: 1, title: "Discuss", color: "linear-gradient(to bottom, #a8eb12, #ffd700)" },
  { id: 2, title: "Planning", color: "#d3d3d3" },
  { id: 3, title: "Coding", color: "#d3d3d3" },
];

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "50px" }}>
      <Row gutter={[16, 16]} align="middle">
        <Col span={12}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>How We Work?</h1>
          <p style={{ color: "gray" }}>Let's discuss what projects you have in mind</p>
          <Button type="primary" style={{ background: "black", border: "none" }}>More</Button>
        </Col>
        <Col span={12}>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {steps.slice(1).map((step) => (
                <Card
                  key={step.id}
                  onMouseEnter={() => setActiveStep(step.id)}
                  style={{
                    width: 120,
                    height: 120,
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                    background: activeStep === step.id ? step.color : "#d3d3d3",
                    transition: "background 0.3s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <div>{step.title}</div>
                  <div style={{ fontSize: "30px", opacity: 0.7 }}>{`0${step.id}`}</div>
                </Card>
              ))}
            </div>
            <Card
              onMouseEnter={() => setActiveStep(1)}
              style={{
                width: 120,
                height: 160,
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
                background: activeStep === 1 ? steps[0].color : "#d3d3d3",
                transition: "background 0.3s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                marginLeft: "-20px",
              }}
            >
              <div>{steps[0].title}</div>
              <div style={{ fontSize: "30px", opacity: 0.7 }}>{`01`}</div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HowWeWork;
