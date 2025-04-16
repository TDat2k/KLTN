import React, { useState } from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Divider,
  Carousel,
  Input,
  Upload,
  message,
} from "antd";
import {
  CodeOutlined,
  BranchesOutlined,
  HighlightOutlined,
  MobileOutlined,
  DeploymentUnitOutlined,
  ProjectOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { jobData } from "./jobsData";
import "../client.css";

const { Title, Paragraph } = Typography;

const iconMap = {
  FE01: <CodeOutlined style={{ fontSize: 36 }} />,
  BE01: <BranchesOutlined style={{ fontSize: 36 }} />,
  UI01: <HighlightOutlined style={{ fontSize: 36 }} />,
  MO01: <MobileOutlined style={{ fontSize: 36 }} />,
  DO01: <DeploymentUnitOutlined style={{ fontSize: 36 }} />,
  PM01: <ProjectOutlined style={{ fontSize: 36 }} />,
};

const CareerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleShowDetail = (job) => {
    setIsModalOpen(true);
    setSelectedJob(job);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleSubmit = () => {
    message.success("Ứng tuyển thành công!");
    handleClose();
  };

  return (
    <div
      style={{
        padding: "60px 50px",
        textAlign: "center",
        background: "#f8f8f8",
      }}
    >
      <Title level={2} style={{ textAlign: "center", margin: 16 }}>
        Chính sách đãi ngộ tại D'company
      </Title>
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={8}>
          <Card
            style={{
              background: "linear-gradient(135deg, #2196f3, #1565c0)",
              color: "#fff",
              borderRadius: 16,
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 24,
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            bordered={false}
            bodyStyle={{ padding: 0 }}
            className="hover-card"
          >
            <div>
              <Title level={4} style={{ color: "#fff" }}>
                Lương & Thưởng
              </Title>
              <Paragraph style={{ color: "#fff" }}>
                D'company đảm bảo mức thu nhập cạnh tranh, gắn liền với hiệu
                suất và năng lực kỹ thuật của từng cá nhân.
              </Paragraph>
            </div>
            <img
              src="/images/salary.png"
              alt="salary"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            style={{
              background: "linear-gradient(135deg, #2196f3, #1565c0)",
              color: "#fff",
              borderRadius: 16,
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 24,
              textAlign: "center",
            }}
            bordered={false}
            bodyStyle={{ padding: 0 }}
            className="hover-card"
          >
            <div>
              <Title level={4} style={{ color: "#fff" }}>
                Đào tạo & Phát triển
              </Title>
              <Paragraph style={{ color: "#fff" }}>
                Định kỳ tổ chức đào tạo công nghệ mới, kỹ năng mềm và nâng cao
                nghiệp vụ để hỗ trợ nhân sự phát triển lâu dài.
              </Paragraph>
            </div>
            <img
              src="/images/training.png"
              alt="training"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            style={{
              background: "linear-gradient(135deg, #1976d2, #0d47a1)",
              color: "#fff",
              borderRadius: 16,
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 24,
              textAlign: "center",
            }}
            bordered={false}
            bodyStyle={{ padding: 0 }}
            className="hover-card"
          >
            <div>
              <Title level={4} style={{ color: "#fff" }}>
                Môi trường & Văn hoá
              </Title>
              <Paragraph style={{ color: "#fff" }}>
                Môi trường làm việc chuyên nghiệp, năng động, hỗ trợ nhau phát
                triển với tinh thần cùng tiến về phía trước.
              </Paragraph>
            </div>
            <img
              src="/images/teamwork.png"
              alt="team"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Card>
        </Col>
      </Row>

      <div style={{ margin: 40 }}>
        <Carousel autoplay>
          <div>
            <div
              style={{
                textAlign: "center",
                padding: "40px 20px",
                background: "#1890ff",
                borderRadius: 12,
              }}
            >
              <Title level={4}>
                Cùng chúng tôi xây dựng giải pháp chuyển đổi số cho hàng trăm
                doanh nghiệp
              </Title>
              <Paragraph>
                Tham gia đội ngũ D'company để phát triển các nền tảng công nghệ
                thực tiễn và hiện đại
              </Paragraph>
            </div>
          </div>
          <div>
            <div
              style={{
                textAlign: "center",
                padding: "40px 20px",
                background: "#fff",
                borderRadius: 12,
              }}
            >
              <Title level={4}>
                Không chỉ là công việc - mà là hành trình phát triển sự nghiệp
                của bạn
              </Title>
              <Paragraph>
                Chúng tôi đề cao sáng tạo, đóng góp và sự học hỏi không ngừng
              </Paragraph>
            </div>
          </div>
          <div>
            <div
              style={{
                textAlign: "center",
                padding: "40px 20px",
                background: "#fff",
                borderRadius: 12,
              }}
            >
              <Title level={4}>
                Làm việc cùng những người giỏi nhất để tạo ra sản phẩm tốt nhất
              </Title>
              <Paragraph>Chúng tôi đang chờ bạn tại D'company!</Paragraph>
            </div>
          </div>
        </Carousel>
      </div>

      <Title level={2} style={{ textAlign: "center", margin: 16 }}>
        Cơ hội nghề nghiệp tại D'company
      </Title>

      <Row gutter={[24, 24]}>
        {jobData.map((job) => (
          <Col key={job.code} xs={24} sm={12} md={8}>
            <Card
              style={{
                borderRadius: 12,
                height: "100%",
                padding: 24,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              bordered={false}
            >
              <div>
                {iconMap[job.code] || <CodeOutlined style={{ fontSize: 36 }} />}
              </div>
              <Paragraph strong style={{ fontSize: 16 }}>
                {job.name}
              </Paragraph>
              <div style={{ marginTop: "auto" }}>
                <Button
                  type="primary"
                  // block
                  style={{
                    background: "#444",
                    border: "none",
                    borderRadius: 20,
                    padding: "0 28px",
                    marginBottom: 8,
                  }}
                  onClick={() => handleShowDetail(job)}
                >
                  Apply
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal khi Apply */}
      <Modal
        title={`Ứng tuyển - ${selectedJob?.name}`}
        visible={isModalOpen}
        onCancel={handleClose}
        footer={null}
        width={1000}
      >
        {selectedJob && (
          <Row gutter={24}>
            {/* Job info */}
            <Col xs={24} md={12}>
              <Card title="Thông tin công việc" bordered={false}>
                <p>
                  <strong>Số lượng tuyển:</strong> {selectedJob.number}
                </p>
                <Divider />
                <p>
                  <strong>Mô tả công việc:</strong>
                </p>
                <Paragraph>{selectedJob.descriptions}</Paragraph>
                <p>
                  <strong>Kỹ năng yêu cầu:</strong>
                </p>
                <ul>
                  {selectedJob.tech_skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <p>
                  <strong>Đãi ngộ:</strong>
                </p>
                <ul>
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </Card>
            </Col>

            {/* Ứng viên */}
            <Col xs={24} md={12}>
              <Card title="Thông tin ứng viên" bordered={false}>
                <Input placeholder="Họ và tên" style={{ marginBottom: 12 }} />
                <Input placeholder="Email" style={{ marginBottom: 12 }} />
                <Input
                  placeholder="Số điện thoại"
                  style={{ marginBottom: 12 }}
                />
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Tải lên CV (.pdf)</Button>
                </Upload>
                <Button
                  type="primary"
                  block
                  style={{ marginTop: 16 }}
                  onClick={handleSubmit}
                >
                  Gửi hồ sơ
                </Button>
              </Card>
            </Col>
          </Row>
        )}
      </Modal>
    </div>
  );
};

export default CareerPage;
