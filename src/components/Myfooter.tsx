import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Space, Divider, Input, Button, Form, message } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  CopyrightOutlined,
  MailOutlined
} from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

export default function Myfooter() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: '#001529',
    padding: '48px 50px 24px',
    color: 'rgba(255, 255, 255, 0.65)',
  };

  const sectionTitleStyle = {
    color: '#fff',
    marginBottom: '16px',
  };

  const linkStyle = {
    color: 'rgba(255, 255, 255, 0.65)',
    '&:hover': {
      color: '#fff',
    },
  };

  const iconStyle = {
    fontSize: '24px',
    color: 'rgba(255, 255, 255, 0.65)',
    '&:hover': {
      color: '#fff',
    },
  };

  const onFinish = (values: { email: string }) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Subscribed email:', values.email);
      message.success('Thank you for subscribing to the newsletter!');
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  return (
    <Footer style={footerStyle}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={sectionTitleStyle}>About Me</Title>
          <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
            I'm Erick Olando, a passionate web developer and designer. I create beautiful, functional, and user-friendly websites and applications.
          </Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={sectionTitleStyle}>Quick Links</Title>
          <Space direction="vertical">
            <Link href="#home" style={linkStyle}>Home</Link>
            <Link href="#about" style={linkStyle}>About</Link>
            <Link href="#projects" style={linkStyle}>Projects</Link>
            <Link href="https://medium.com/@olandoerick98" style={linkStyle}>Blog</Link>
            <Link href="#contact1" style={linkStyle}>Contact</Link>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={sectionTitleStyle}>Services</Title>
          <Space direction="vertical">
            <Link href="#" style={linkStyle}>Web Development</Link>
            <Link href="#" style={linkStyle}>UI/UX Design</Link>
            <Link href="#" style={linkStyle}>Mobile Apps</Link>
            <Link href="#" style={linkStyle}>Consulting</Link>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={sectionTitleStyle}>Newsletter</Title>
          <Text style={{ color: 'rgba(255, 255, 255, 0.65)', marginBottom: '16px', display: 'block' }}>
            Subscribe to my newsletter for the latest updates and articles.
          </Text>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input
                placeholder="Enter your email"
                suffix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.15)', margin: '24px 0' }} />
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={12}>
          <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
            <CopyrightOutlined /> {currentYear} Erick Olando. All rights reserved.
          </Text>
        </Col>
        <Col xs={24} sm={12}>
          <Row justify="end">
            <Space size="large">
              <Link href="https://github.com/eritech98" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" style={iconStyle}>
                <GithubOutlined />
              </Link>
              <Link href="https://www.linkedin.com/in/erick-olando-9a9148220" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" style={iconStyle}>
                <LinkedinOutlined />
              </Link>
              <Link href="https://x.com/erick_olando" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" style={iconStyle}>
                <TwitterOutlined />
              </Link>
              <Link href="https://www.instagram.com/ericky54/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" style={iconStyle}>
                <InstagramOutlined />
              </Link>
              <Link href="https://www.youtube.com/@erickolando153" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel" style={iconStyle}>
                <YoutubeOutlined />
              </Link>
            </Space>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
}