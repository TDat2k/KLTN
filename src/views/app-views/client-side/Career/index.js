import React, { useState } from "react";
import { Card, Button, Row, Col, Modal, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import jobs from "./jobsData";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = (job) => {
    setSelectedJob(job);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedJob(null);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Career</h1>
      <Row gutter={[16, 16]} justify="center">
        {jobs.map((job) => (
          <Col key={job.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{ textAlign: "center", borderRadius: "10px", minHeight: "250px", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "20px" }}
            >
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: "40px" }}>{job.icon}</div>
                <h3>{job.title}</h3>
              </div>
              <div style={{ width: "100%" }}>
                <Button type="primary" block onClick={() => showModal(job)}>
                  Apply
                </Button>
                <Button type="link" block onClick={() => showModal(job)}>
                  See Detail
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedJob && (
        <Modal
          title={selectedJob.title}
          visible={modalVisible}
          onCancel={handleCancel}
          footer={null}
          width={1000}
        >
          <Row gutter={32}>
            <Col span={12}>
              <h3>Requirements:</h3>
              <p>{selectedJob.requirements}</p>
              <h3>Expertise:</h3>
              <p>{selectedJob.expertise}</p>
            </Col>
            <Col span={12}>
              <Card title="Submit Your Application" style={{ textAlign: "center" }}>
                <Input placeholder="Full Name" style={{ marginBottom: "10px" }} />
                <Input type="email" placeholder="Email" style={{ marginBottom: "10px" }} />
                <Input type="tel" placeholder="Phone" style={{ marginBottom: "10px" }} />
                <Upload>
                  <Button icon={<UploadOutlined />}>Upload Resume</Button>
                </Upload>
                <Button type="primary" block style={{ marginTop: "10px" }}>
                  Submit
                </Button>
              </Card>
            </Col>
          </Row>
        </Modal>
      )}
    </div>
  );
};

export default Career;
