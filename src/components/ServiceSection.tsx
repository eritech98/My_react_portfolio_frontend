//import React, { useState } from "react";
//import {
//    Layout,
//    Typography,
//    Card,
//    Carousel,
//    Row,
//    Col,
//    Button,
//    Avatar,
//    Tooltip
//} from "antd";
//import {
//    ArrowRightOutlined,
//    BulbOutlined,
//    GlobalOutlined,
//    CodeOutlined
//} from "@ant-design/icons";
//
//const { Content } = Layout;
//const { Title, Paragraph } = Typography;
//
//interface Service {
//    title: string;
//    description: string;
//    icon: React.ReactNode;
//}
//
//interface Testimonial {
//    name: string;
//    position: string;
//    content: string;
//    avatar: string;
//}
//
//const services: Service[] = [
//    {
//        title: "Digital Strategy",
//        description: "Comprehensive digital transformation and growth strategies",
//        icon: <BulbOutlined className="text-4xl text-primary" />
//    },
//    {
//        title: "Brand Development",
//        description: "Creating and evolving brands for the digital age",
//        icon: <GlobalOutlined className="text-4xl text-primary" />
//    },
//    {
//        title: "Technical Solutions",
//        description: "Cutting-edge development and technical implementation",
//        icon: <CodeOutlined className="text-4xl text-primary" />
//    }
//];
//
//const testimonials: Testimonial[] = [
//    {
//        name: "Sarah Johnson",
//        position: "CEO, TechVision Inc",
//        content: "Their strategic approach transformed our digital presence completely.",
//        avatar: "/placeholder.svg?height=100&width=100"
//    },
//    {
//        name: "Michael Chen",
//        position: "Marketing Director, Global Brands",
//        content: "Exceptional creativity combined with solid business acumen.",
//        avatar: "/placeholder.svg?height=100&width=100"
//    },
//    {
//        name: "Emma Williams",
//        position: "Founder, StartUp Success",
//        content: "The results exceeded our expectations in every way.",
//        avatar: "/assets/OIP.svg"
//    }
//];
//
//function ServiceSection() {
//    return (
//        <section className="py-20">
//            <div className="container mx-auto px-4">
//                <Title level={2} className="text-center mb-16">
//                    My Services
//                    <br/>
//                    <br/>
//                </Title>
//                <Row gutter={[32, 32]}>
//                    {services.map((service, index) => (
//                        <Col xs={24} md={8} key={index}>
//                            <Card
//                                hoverable
//                                className="text-center h-full shadow-lg transition-all duration-300 hover:shadow-xl"
//                                actions={[
//                                    <Tooltip title="Explore service details">
//                                        <Button type="link" icon={<ArrowRightOutlined />}>
//                                            Learn More
//                                        </Button>
//                                    </Tooltip>
//                                ]}
//                            >
//                                <div className="py-8">
//                                    {service.icon}
//                                    <Title level={3} className="mt-6 mb-4">
//                                        {service.title}
//                                    </Title>
//                                    <Paragraph className="text-gray-600">{service.description}</Paragraph>
//                                </div>
//                            </Card>
//                        </Col>
//                    ))}
//                </Row>
//            </div>
//        </section>
//    );
//}
//
//export default ServiceSection;