"use client"

import { forwardRef, useState } from "react"
import {
  Layout,
  Typography,
  Card,
  Avatar,
  Row,
  Col,
  Button,
  Space,
  Badge,
  Statistic,
  Tabs,
  Progress,
  Tooltip,
  ConfigProvider,
} from "antd"
import {
  TrophyOutlined,
  ThunderboltOutlined,
  StarOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  RocketOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons"

const { Content } = Layout
const { Title, Paragraph, Text } = Typography
const { TabPane } = Tabs

const gradientBackground = {
  background: "linear-gradient(135deg, #3498db, #2c3e50)",
  color: "#fff",
  padding: "80px 0",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}

const cardStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  backdropFilter: "blur(10px)",
  border: "none",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}

const whiteText = {
  color: "#fff",
}

const Intro = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState("1")

  const workflowSteps = [
    {
      title: "1. Discovering Your Needs",
      company: "Discovery",
      color: "#3498db",
      description: "In-depth conversation to understand your goals and vision.",
    },
    {
      title: "2. Tailored Planning",
      company: "Planning",
      color: "#3498db",
      description: "Customized plan aligning with your objectives and preferences.",
    },
    {
      title: "3. Collaborative Execution",
      company: "Execution",
      color: "#3498db",
      description: "Regular updates and adaptations to ensure project alignment.",
    },
    {
      title: "4. Final Delivery and Support",
      company: "Delivery",
      color: "#3498db",
      description: "Clear instructions and ongoing support for your product.",
    },
  ]

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3498db",
          borderRadius: 8,
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
        <Content>
          <div id="home" style={gradientBackground}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} md={12}>
                  <Badge.Ribbon text="Available for hire" color="green">
                    <Card style={cardStyle}>
                      <Space direction="vertical" size="large" style={{ width: "100%" }}>
                        <div style={{ textAlign: "center" }}>
                          <Avatar
                            size={160}
                            src="https://media.licdn.com/dms/image/v2/C4D03AQG0wC5q35zRyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660397567354?e=2147483647&v=beta&t=kpOo3cYS9Tq67lgtRq7Q9MAGpLyy8ZzobtNIVSlHmc8"
                            style={{ border: "4px solid white", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                          />
                          <Title level={2} style={{ color: "#fff", marginTop: "16px", marginBottom: 0 }}>
                            Erick Olando
                          </Title>
                          <Text style={{ color: "#fff", opacity: 0.8 }}>Full Stack Developer | Meteorologist</Text>
                        </div>
                        <Row gutter={16}>
                          <Col span={8}>
                            <Statistic
                              title={<span style={{ color: "#fff", opacity: 0.8 }}>Projects</span>}
                              value={"42+"}
                              prefix={<TrophyOutlined />}
                              valueStyle={{ color: "#fff" }}
                            />
                          </Col>
                          <Col span={8}>
                            <Statistic
                              title={<span style={{ color: "#fff", opacity: 0.8 }}>Experience</span>}
                              value={2}
                              suffix="years"
                              prefix={<ClockCircleOutlined />}
                              valueStyle={{ color: "#fff" }}
                            />
                          </Col>
                          <Col span={8}>
                            <Statistic
                              title={<span style={{ color: "#fff", opacity: 0.8 }}>Rating</span>}
                              value={4.4}
                              prefix={<StarOutlined />}
                              valueStyle={{ color: "#fff" }}
                            />
                          </Col>
                        </Row>
                      </Space>
                    </Card>
                  </Badge.Ribbon>
                </Col>
                <Col xs={24} md={12}>
                  <Space direction="vertical" size="large" style={{ width: "100%" }}>
                    <div style={{ textAlign: { xs: "center", sm: "left" } }}>
                      <Title
                        level={1}
                        style={{ ...whiteText, margin: 0, fontSize: { xs: "24px", sm: "32px", md: "36px" } }}
                      >
                        Crafting Digital Excellence
                      </Title>
                      <Paragraph
                        style={{ ...whiteText, opacity: 0.8, fontSize: { xs: "14px", sm: "16px", md: "17px" } }}
                      >
                        Transforming ideas into exceptional digital experiences with cutting-edge technology and
                        innovative solutions.
                      </Paragraph>
                    </div>
                    <div style={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                      <Space>
                        <a
                          href="https://drive.google.com/file/d/1SGvrFJyi5GpU2iV599zBsgCXpYBQ8Cyb/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            type="default"
                            size="large"
                            icon={<ThunderboltOutlined />}
                            style={{
                              backgroundColor: "#f0f2f5",
                              color: "#333",
                              borderColor: "#d9d9d9",
                              borderRadius: "4px",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: "#e6e9eb",
                                color: "#000",
                                borderColor: "#adb5bd",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                              },
                            }}
                          >
                            Download CV
                          </Button>
                        </a>
                        <a href="#section1">
                          <Button
                            size="large"
                            ghost
                            style={{
                              borderColor: "white",
                              color: "white",
                              borderRadius: "4px",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                              transition: "all 0.3s ease",
                            }}
                            icon={<HeartOutlined />}
                          >
                            Get in Touch
                          </Button>
                        </a>
                      </Space>
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>

          <div id="about" style={{ maxWidth: "1200px", margin: "64px auto", padding: "0 20px" }}>
            <Card style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <Title level={2} style={{ textAlign: "center", marginBottom: "32px", color: "#3498db" }}>
                About Me
              </Title>
              <Tabs activeKey={activeTab} onChange={setActiveTab} size="large" centered>
                <TabPane tab="My Story" key="1">
                  <Row gutter={[24, 24]} align="middle">
                    <Col xs={24} md={12}>
                      <Paragraph>
                        As a passionate full-stack developer and meteorologist, I blend technology and science to create
                        smart, data-driven solutions. My experience spans from weather forecasting at major airports to
                        developing AI-driven tools and secure web platforms.
                      </Paragraph>
                      <Paragraph>
                        My journey through ALX's full-stack development program has equipped me with the skills to build
                        digital solutions that solve real-world problems, making complex data accessible and actionable.
                      </Paragraph>
                    </Col>
                    <Col xs={24} md={12}>
                      <Card style={{ background: "linear-gradient(135deg, #e0f7fa, #e8eaf6)" }}>
                        <Title level={4}>Core Values</Title>
                        <ul>
                          <li>Continuous Learning</li>
                          <li>User-Centric Design</li>
                          <li>Code Quality</li>
                          <li>Collaboration</li>
                          <li>Innovation</li>
                        </ul>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Technical Skills" key="2">
                  <Row gutter={[24, 24]}>
                    {[
                      { name: "JavaScript/TypeScript", level: 90 },
                      { name: "React", level: 85 },
                      { name: "Node.js", level: 88 },
                      { name: "Python", level: 80 },
                      { name: "PostgreSQL", level: 92 },
                      { name: "AWS", level: 72 },
                      { name: "EJS", level: 97 },
                      { name: "Git", level: 95 },
                      { name: "REST APIs", level: 90 },
                    ].map((skill, index) => (
                      <Col xs={24} sm={12} md={8} key={index}>
                        <Tooltip title={`${skill.level}% proficiency`}>
                          <Card>
                            <Text strong>{skill.name}</Text>
                            <Progress percent={skill.level} status="active" showInfo={false} />
                          </Card>
                        </Tooltip>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
                <TabPane tab="Services" key="3">
                  <Row gutter={[24, 24]}>
                    {[
                      {
                        title: "Web Development",
                        icon: <RocketOutlined style={{ fontSize: "32px", color: "#3498db" }} />,
                        description: "Modern and responsive web applications tailored to your needs.",
                      },
                      {
                        title: "Mobile Apps",
                        icon: <ThunderboltOutlined style={{ fontSize: "32px", color: "#9b59b6" }} />,
                        description: "Native and cross-platform mobile solutions for iOS and Android.",
                      },
                      {
                        title: "UI/UX Design",
                        icon: <StarOutlined style={{ fontSize: "32px", color: "#2ecc71" }} />,
                        description: "Intuitive and beautiful user interfaces that enhance user experience.",
                      },
                      {
                        title: "Consulting",
                        icon: <CheckCircleOutlined style={{ fontSize: "32px", color: "#e67e22" }} />,
                        description: "Technical guidance and solutions architecture for your projects.",
                      },
                    ].map((service, index) => (
                      <Col xs={24} sm={12} key={index}>
                        <Card hoverable style={{ textAlign: "center", height: "100%" }}>
                          {service.icon}
                          <Title level={4} style={{ marginTop: "16px" }}>
                            {service.title}
                          </Title>
                          <Text type="secondary">{service.description}</Text>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
                <TabPane tab="Workflow" key="4">
                  <Row gutter={[16, 16]}>
                    {workflowSteps.map((step, index) => (
                      <Col xs={24} sm={12} md={6} key={index}>
                        <Card hoverable style={{ height: "100%" }}>
                          <Title level={4} style={{ color: step.color }}>
                            {step.title}
                          </Title>
                          <Text type="secondary">{step.company}</Text>
                          <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "Read more" }}>
                            {step.description}
                          </Paragraph>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
              </Tabs>
            </Card>
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  )
})

export default Intro

