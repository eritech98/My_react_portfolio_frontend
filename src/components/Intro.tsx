import React, { forwardRef, useState } from "react";
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
  Timeline,
  Collapse,
  Tooltip,
  ConfigProvider
} from "antd";
import {
  TrophyOutlined,
  ThunderboltOutlined,
  StarOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const gradientBackground = {
  background: "#3498db",
  color: "orange",
  padding: "80px 0",
  minHeight: "100vh", // Adjusted to fit the screen
  display: "flex",
  alignItems: "center"
};

const cardStyle = {
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "10px",
  backdropFilter: "blur(10px)",
  border: "none",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
};

const whiteText = { color: "white" };

const Intro = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState("1");

  const workflowSteps = [
    {
      title: "1. Discovering Your Needs",
      company: "Discovery",
      color: "#3498db", // Single color for consistency
      description:
        "Start with an in-depth, friendly conversation to understand your goals and vision. Listen closely to your ideas, ensuring every detail is understood."
    },
    {
      title: "2. Tailored Planning",
      company: "Planning",
      color: "#3498db",
      description:
        "Create a customized plan that aligns with your objectives and preferences. Share milestones, timelines, and an open line for feedback."
    },
    {
      title: "3. Collaborative Execution",
      company: "Execution",
      color: "#3498db",
      description:
        "Execute with care, providing regular updates and ensuring your input is incorporated. Adapt as needed to ensure the project remains aligned with your goals."
    },
    {
      title: "4. Final Delivery and Support",
      company: "Delivery",
      color: "#3498db",
      description:
        "Deliver the final product with clear instructions, ensuring it's easy for you to use. Offer ongoing support and be available for any future needs or adjustments."
    }
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3498db",
          borderRadius: 8
        }
      }}>
      <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
        <Content>
          {/* First Section */}
          <div id = "home" style={gradientBackground}>
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
                          <Title level={2} style={{ ...whiteText, marginTop: "16px", marginBottom: 0 }}>
                            Erick Olando
                          </Title>
                          <Text style={{ ...whiteText, opacity: 0.8 }}>Full Stack Developer | Meteorologist</Text>
                        </div>
                        <Row gutter={16}>
                          <Col span={8}>
                            <Statistic
                              title={<span style={{ ...whiteText, opacity: 0.8 }}>Projects</span>}
                              value={"42+"}
                              prefix={<TrophyOutlined />}
                              valueStyle={whiteText}
                            />
                          </Col>
                          <Col span={8}>
                            <Statistic
                              title={<span style={{ ...whiteText, opacity: 0.8 }}>Experience</span>}
                              value={2}
                              suffix="years"
                              prefix={<ClockCircleOutlined />}
                              valueStyle={whiteText}
                            />
                          </Col>
                          <Col span={8}>
                            <Statistic
                              title={<span style={{ ...whiteText, opacity: 0.8 }}>Rating</span>}
                              value={4.4}
                              prefix={<StarOutlined />}
                              valueStyle={whiteText}
                            />
                          </Col>
                        </Row>
                      </Space>
                    </Card>
                  </Badge.Ribbon>
                </Col>
                <Col xs={24} md={12}>
                  <Space direction="vertical" size="large" style={{ width: "100%" }}>
                    <Title level={1} style={{ ...whiteText, margin: 0, fontSize: 16px }}>
                      Crafting Digital Excellence
                    </Title>
                    <Paragraph style={{ ...whiteText, opacity: 0.8, fontSize: "18px" }}>
                      Transforming ideas into exceptional digital experiences with cutting-edge technology and
                      innovative solutions.
                    </Paragraph>
                    <Space>
                      <a
                        href="https://drive.google.com/file/d/1SGvrFJyi5GpU2iV599zBsgCXpYBQ8Cyb/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button
                          type="default"
                          size="large"
                          icon={<ThunderboltOutlined />}
                          style={{
                            backgroundColor: "#f0f2f5", // Soft white background
                            color: "#333", // Dark text color
                            borderColor: "#d9d9d9", // Light border color
                            borderRadius: "4px", // Rounded corners
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
                            transition: "all 0.3s ease", // Smooth transition for hover effects
                            "&:hover": {
                              backgroundColor: "#e6e9eb", // Slightly darker background on hover
                              color: "#000", // Darker text color on hover
                              borderColor: "#adb5bd", // Darker border color on hover
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" // Slightly stronger shadow on hover
                            }
                          }}>
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
                            borderRadius: "4px", // Rounded corners
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
                            transition: "all 0.3s ease" // Smooth transition for hover effects
                          }}
                          icon={<HeartOutlined />}>
                          Get in Touch
                        </Button>
                      </a>
                    </Space>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>

          {/* About Me Section */}
          <p ref={ref}></p>
          <div id = "about" style={{ maxWidth: "1200px", margin: "64px auto", padding: "0 20px" }}>
            <Card style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <Title level={2} style={{ textAlign: "center", marginBottom: "32px", color: "#3498db" }}>
                About Me
              </Title>
              <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                size="large"
                centered
                style={{ marginBottom: "48px" }}>
                {/* My Story Tab */}
                <TabPane tab="My Story" key="1">
                  <Row gutter={[24, 24]} align="middle">
                    <Col xs={24} md={12}>
                      <Paragraph style={{ fontSize: "14px" }}>
                        I'm a passionate full-stack developer and meteorologist, blending tech and science to create
                        smart, data-driven solutions. With experience in weather forecasting, AI, and software
                        development, I build tools that make complex data accessible.
                      </Paragraph>
                      <Paragraph style={{ fontSize: "14px" }}>
                        My journey spans meteorology at JKIA and Eldoret International Airport to full-stack development
                        through ALX. Beyond weather applications, I build all kinds of digital solutions—from AI-driven
                        tools to secure web platforms—designed to solve real-world problems.
                      </Paragraph>
                    </Col>
                    <Col xs={24} md={12}>
                      <Card style={{ background: "linear-gradient(135deg, #e0f7fa, #e8eaf6)" }}>
                        <Title level={4}>Core Values</Title>
                        <ul style={{ paddingLeft: "20px" }}>
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
                  <Row gutter={[24, 24]} style={{ padding: "0 16px" }}>
                    {[
                      {
                        name: "JavaScript/TypeScript",
                        level: 90,
                        badge:
                          "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"
                      },
                      {
                        name: "React",
                        level: 85,
                        badge: "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"
                      },
                      {
                        name: "Node.js",
                        level: 88,
                        badge: "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white"
                      },
                      {
                        name: "Python",
                        level: 80,
                        badge: "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"
                      },
                      {
                        name: "PostgreSQL",
                        level: 92,
                        badge:
                          "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white"
                      },
                      {
                        name: "AWS",
                        level: 72,
                        badge: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white"
                      },
                      {
                        name: "EJS",
                        level: 97,
                        badge: "https://img.shields.io/badge/EJS-8BC34A?style=flat&logo=javascript&logoColor=white"
                      },
                      {
                        name: "Git",
                        level: 95,
                        badge: "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"
                      },
                      {
                        name: "REST APIs",
                        level: 90,
                        badge: "https://img.shields.io/badge/REST-02569B?style=flat&logo=rest&logoColor=white"
                      }
                    ].map((skill, index) => (
                      <Col xs={24} sm={12} md={8} key={index}>
                        <Card
                          hoverable
                          style={{
                            height: "100%",
                            transition: "all 0.3s",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            border: "1px solid #f0f0f0"
                          }}
                          bodyStyle={{ padding: "20px" }}>
                          <Tooltip title={`${skill.level}% proficiency`}>
                            <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                              <Text strong style={{ fontSize: "16px" }}>
                                {skill.name}
                              </Text>
                              <img src={skill.badge} alt={skill.name} style={{ height: "20px" }} />
                            </div>
                            <Progress
                              percent={skill.level}
                              status="active"
                              strokeColor={{
                                "0%": "#3498db",
                                "100%": "#2ecc71"
                              }}
                              strokeWidth={8}
                              showInfo={false}
                            />
                            <div style={{ marginTop: "8px", textAlign: "right" }}>
                              <Text type="secondary" style={{ fontSize: "12px" }}>
                                {skill.level}% proficiency
                              </Text>
                            </div>
                          </Tooltip>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>

                {/* Services Section */}
                <TabPane tab="Services" key="4">
                  <div>
                    {" "}
                    {/* Attach the ref to the Services section */}
                    <Row gutter={[24, 24]}>
                      {[
                        {
                          title: "Web Development",
                          icon: <RocketOutlined style={{ fontSize: "32px", color: "#3498db" }} />,
                          description: "Modern and responsive web applications tailored to your needs.",
                          quote: ""
                        },
                        {
                          title: "Mobile Apps",
                          icon: <ThunderboltOutlined style={{ fontSize: "32px", color: "#9b59b6" }} />,
                          description: "Native and cross-platform mobile solutions for iOS and Android.",
                          quote: ""
                        },
                        {
                          title: "UI/UX Design",
                          icon: <StarOutlined style={{ fontSize: "32px", color: "#2ecc71" }} />,
                          description: "Intuitive and beautiful user interfaces that enhance user experience.",
                          quote: ""
                        },
                        {
                          title: "Consulting",
                          icon: <CheckCircleOutlined style={{ fontSize: "32px", color: "#e67e22" }} />,
                          description: "Technical guidance and solutions architecture for your projects.",
                          quote: ""
                        }
                      ].map((service, index) => (
                        <Col xs={24} sm={12} key={index}>
                          <Card
                            hoverable
                            style={{ textAlign: "center", transition: "all 0.3s" }}
                            actions={[
                              <text type="link" key="learn-more" style={{ color: "blue" }}>
                                {service.quote}
                              </text>
                            ]}>
                            {service.icon}
                            <Title level={4} style={{ marginTop: "16px" }}>
                              {service.title}
                            </Title>
                            <Text type="secondary">{service.description}</Text>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </TabPane>

                {/* Workflow Tab */}
                <TabPane tab="Workflow" key="3">
                  <Row gutter={[16, 16]}>
                    {workflowSteps.map((step, index) => (
                      <Col xs={24} sm={12} md={6} key={index}>
                        <Card
                          hoverable
                          style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            opacity: 0,
                            animation: `fadeIn 0.5s ease ${index * 0.2}s forwards`
                          }}>
                          <div>
                            <Title level={4} style={{ color: step.color }}>
                              {step.title}
                            </Title>
                            <Text type="secondary">{step.company}</Text>
                          </div>
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

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </ConfigProvider>
  );
});

export default Intro;
