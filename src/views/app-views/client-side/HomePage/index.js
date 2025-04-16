import React from "react";
import { Button, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const jobList = [
  { id: 1, title: "Software Engineer", location: "Ho Chi Minh, Vietnam" },
  { id: 2, title: "Product Designer", location: "Hanoi, Vietnam" },
  { id: 3, title: "HR Manager", location: "Da Nang, Vietnam" },
];

const HomePage = () => {
  console.log("HomePage");
  return (
    <div style={{ padding: "40px" }}>
      {/* Banner Section */}
      <section
        style={{
          textAlign: "center",
          padding: "50px",
          background: "#f5f5f5",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Welcome to Our Company
        </h1>
        <p style={{ fontSize: "18px", color: "#666" }}>
          We are looking for talented candidates to join our team!
        </p>
        <Link to="/career">
          <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
            Explore Jobs
          </Button>
        </Link>
      </section>

      {/* About Us Section */}
      <section style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", color: "#555" }}>
          We are a leading company in the tech industry, committed to innovation
          and excellence. Join us to build a great future together!
        </p>
      </section>

      {/* Job Listing Section */}
      <section style={{ marginTop: "50px" }}>
        <h2>Latest Job Openings</h2>
        <Row gutter={[16, 16]}>
          {jobList.map((job) => (
            <Col key={job.id} xs={24} sm={12} md={8}>
              <Card title={job.title} bordered={false}>
                <p>{job.location}</p>
                <Link to={`/jobs/${job.id}`}>
                  <Button type="link">View Details</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
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
        <p>Be a part of our growing company. Apply now and shape your future.</p>
        <Link to="/apply">
          <Button type="primary" size="large">
            Apply Now
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
