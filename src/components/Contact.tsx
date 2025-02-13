import React, { useState } from 'react';
import {
  Layout,
  Typography,
  Form,
  Input,
  Button,
  message,
  Row,
  Col,
  Card,
  Space,
  Tooltip
} from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(values)
});

      if (response.ok) {
        message.success('Thank you for your message! I\'ll get back to you soon.');
        form.resetFields();
      } else {
        message.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      message.error('An error occurred. Please try again later.');
    }
    setLoading(false);
  };

  const contactInfo = [
    { icon: <MailOutlined />, text: 'Olandoerick98@gmail.com', href: 'mailto:Olandoerick98@gmail.com' },
    { icon: <PhoneOutlined />, text: '+254710897101', href: 'tel:+254710897101' },
    { icon: <EnvironmentOutlined />, text: 'Nairobi, Kenya', href: '' }
  ];

  const socialLinks = [
    { icon: <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub Icon"
                width="20"
                height="20"
            /> , href: 'https://github.com/eritech98', ariaLabel: 'GitHub Profile' },
    { icon: <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn Icon"
                width="18"
                height="18"
            />, href: 'https://linkedin.com/in/johndoe', ariaLabel: 'LinkedIn Profile' },
    { icon: <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                    alt="X Logo"
                    width="18"
                    height="18"
                />, href: 'https://twitter.com/johndoe', ariaLabel: 'Twitter Profile' }
  ];

  return (
    <Layout>
      <Content id="contact1" style={{ padding: '50px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <Title id="section1" level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#3498db' }}>Get in Touch</Title>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card
              title="Contact Information"
              style={{ height: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {contactInfo.map((item, index) => (
                  <Space key={index} align="center">
                    {React.cloneElement(item.icon, { style: { color: '#3498db', fontSize: '18px' } })}
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: '#555' }}>
                      {item.text}
                    </a>
                  </Space>
                ))}
                <Paragraph style={{ color: '#666' }}>
                  Feel free to reach out if you have any questions or just want to connect!
                </Paragraph>
                <Space size="large">
                  {socialLinks.map((link, index) => (
                    <Tooltip key={index} title={link.ariaLabel}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                      >
                        {React.cloneElement(link.icon, { style: { fontSize: '24px', color: '#3498db' } })}
                      </a>
                    </Tooltip>
                  ))}
                </Space>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title="Send Me a Message"
              style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input style={{ borderRadius: '4px' }} />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input style={{ borderRadius: '4px' }} />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea rows={4} style={{ borderRadius: '4px' }} />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    style={{ borderRadius: '4px', backgroundColor: '#3498db', borderColor: '#3498db' }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
