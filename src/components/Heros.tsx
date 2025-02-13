import React, { useState } from 'react';
import { Card, Button, Modal, Typography, Row, Col, Timeline, Tooltip } from 'antd';
import { ClockCircleOutlined, TrophyOutlined, RocketOutlined, TeamOutlined, BookOutlined, CodeOutlined, SafetyCertificateOutlined, RobotOutlined } from '@ant-design/icons';
import "../../node_modules/antd/dist/reset.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const { Title, Paragraph } = Typography;

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

interface CardItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

const timelineData: TimelineItem[] = [
  {
  date: '2025',
  title: 'Udemy, The App Brewery',
  description: 'Advanced Fullstack Software Development, AI & Cloud Deployment',
  icon: <RocketOutlined style={{ fontSize: '24px' }} />,
  details: (
    <>
      <p>
        Currently undertaking an intensive Fullstack Software Development course, 
        mastering advanced web technologies, AI, and cloud infrastructure.
      </p>
      <ul>
        <li>Building interactive web applications with React and EJS.</li>
        <li>Designing optimized UIs using Tailwind CSS.</li>
        <li>Developing secure backend services with Node.js and Express.</li>
        <li>Deploying scalable applications on AWS.</li>
        <li>Implementing DevOps workflows for CI/CD automation.</li>
        <li>Training and fine-tuning AI models with Python and Hugging Face APIs.</li>
        <li>Integrating AI-driven solutions using NLP, computer vision, and deep learning models.</li>
      </ul>
      <p>
        In parallel, I am developing personal projects tackling real-world challenges in meteorology, 
        real estate, finance, and logistics. These projects integrate AI, Machine Learning, 
        geospatial data visualization, payment gateways, and cloud computing.
      </p>
      
    </>
  )
}


,
 {
  date: '13/9/2024',
  title: 'ALX Africa/Holberton',
  description: 'Completed a rigorous 12-month Software Engineering program',
  icon: <CodeOutlined style={{ fontSize: '24px' }} />,
  details: (
    <>
      <p>
        Successfully completed the ALX Software Engineering Program, a 
        comprehensive 12-month training focused on full-stack web 
        development. This program provided hands-on experience in building 
        scalable applications, problem-solving, and collaboration within 
        Agile teams.
      </p>
      <ul>
        <li>Developed full-stack applications using JavaScript, React, Node.js, and Express.</li>
        <li>Designed and managed relational databases with PostgreSQL.</li>
        <li>Built and integrated RESTful APIs for seamless communication between services.</li>
        <li>Implemented authentication and security best practices using JWT and OAuth.</li>
        <li>Deployed applications on cloud platforms such as Render and Railway.</li>
        <li>Worked with version control tools like Git and GitHub in collaborative projects.</li>
        <li>Enhanced problem-solving skills through coding challenges and real-world projects.</li>
      </ul>
      <p>
        🎓 <a href="https://intranet.alxswe.com/certificates/XHfhE32YNs" target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </p>
    </>
  )
}
,

 {
  date: '2023',
  title: 'SideHustle Frontend Development Internship',
  description: 'Intensive 2-month internship focused on modern web development.',
  icon: <TrophyOutlined style={{ fontSize: '24px' }} />,
  details: (
    <>
      <p>
        Completed a 3-month Frontend Development internship, gaining hands-on experience in 
        building responsive and interactive web applications.
      </p>
      <ul>
        <li>Developed web pages using HTML, CSS, and JavaScript.</li>
        <li>Styled applications with Bootstrap CSS and W3.CSS.</li>
        <li>Improved UI/UX skills through real-world projects.</li>
        <li>Collaborated with developers from Nigeria in a structured team environment.</li>
      </ul>
      <p>
        View my certification: 
        <a href="https://certificate.terrahq.co/135945AB3XNIDEN16" target="_blank">Certification Link</a>
      </p>
    </>
  )
}

];

const cardData: CardItem[] = [
  {
  date: "Education",
  title: "Academic Journey",
  description: "A timeline of my education from high school to university.",
  icon: <BookOutlined style={{ fontSize: "24px" }} />,
  details: (
    <ul style={{ lineHeight: "2", marginTop: "10px" }}>
      <li>
        <strong>2014 - 2017:</strong> <span style={{ fontStyle: "italic", marginRight: "5px" }}>Maranda High School</span>  
        <br />
        Completed my Kenya Certificate of Secondary Education (KCSE), excelling in Mathematics, Physics, and Geography.
      </li>
      <li>
        <strong>2018 - 2022:</strong> <span style={{ fontStyle: "italic", marginRight: "5px" }}>University of Nairobi – Bachelor of Science in Meteorology</span>  
        <br />
        Graduated with <strong>Second Class Upper Honors</strong>.  
        🏆 Awarded the <strong>Dr. Joseph R. Mukabana MBS Award</strong> for Best Research Student.
      </li>
      <li>
        <strong>2023 - 2024:</strong> <span style={{ fontStyle: "italic", marginRight: "5px" }}>ALX Africa – Software Engineering Program</span>  
        <br />
        Completed a 12-month intensive course focused on full-stack development, cloud computing, and system architecture.
      </li>
      <li>
        <strong>Scholarship Award:</strong>  
        Received a postgraduate scholarship for advanced studies in Meteorology.
      </li>
    </ul>
  )
}

,
  {
  date: "Personal Development",
  title: "Machine Learning Specialization",
  description: "Completed a specialization course in Machine Learning and AI.",
  icon: <RobotOutlined style={{ fontSize: "24px" }} />,
  details: (
    <>
      <p>
        This specialization provided in-depth knowledge of machine learning algorithms, deep learning, and their real-world applications.
      </p>
      <ul>
        <li>
          <strong>Supervised & Unsupervised Learning:</strong> Explored linear regression, decision trees, clustering, and dimensionality reduction techniques.
        </li>
        <li>
          <strong>Deep Learning & Neural Networks:</strong> Worked with TensorFlow and Keras to build, train, and optimize neural networks for image and text processing.
        </li>
        <li>
          <strong>Natural Language Processing (NLP):</strong> Implemented text classification, sentiment analysis, and named entity recognition using transformers and recurrent neural networks (RNNs).
        </li>
        <li>
          <strong>Real-World Applications:</strong> Applied ML models to projects such as weather prediction, financial forecasting, and chatbot development.
        </li>
      </ul>
    </>
  )
}
,
  {
  date: "Licenses & Certifications",
  title: "Professional Certifications",
  description: "Recognized certifications in software engineering, meteorology, cybersecurity, and leadership.",
  icon: <SafetyCertificateOutlined style={{ fontSize: "24px" }} />,
  details: (
    <ul style={{ lineHeight: "2", marginTop: "10px" }}>
      
      <li>
        <strong>Udemy</strong> - App Brewery  
        <br />
        <span style={{ fontStyle: "italic", marginRight: "5px" }}>Issued Sep 2024</span>  
        <a href="" target="_blank" rel="noopener noreferrer">View Credential</a>
      </li>
      <li>
        <strong>Software Engineering Certification</strong> – African Leadership Experience  
        <br />
        <span style={{ fontStyle: "italic", marginRight: "5px" }}>Issued Sep 2024</span>  
        <a href="https://intranet.alxswe.com/certificates/XHfhE32YNs" target="_blank" rel="noopener noreferrer">View Credential</a>
      </li>
      <li>
        <strong>Frontend Web Development</strong> – Side Hustle  
        <br />
        <span style={{ fontStyle: "italic", marginRight: "5px" }}>Issued Mar 2023</span> | <strong>Credential ID:</strong> SH-IT-0441712  
        <br />
        <a href="https://certificate.terrahq.co/135945AB3XNIDEN16?trk=public_profile_see-credential" target="_blank" rel="noopener noreferrer">View Credential</a>
      </li>
      <li>
        <strong>Introduction to Cybersecurity</strong> – Cisco  
        <br />
        <span style={{ fontStyle: "italic", marginRight: "5px" }}>Issued Jul 2024</span>  
        <a href="https://www.credly.com/badges/b9c3804c-6923-47b0-8ca5-4a05e22ca674/linked_in_profile?trk=public_profile_see-credential" target="_blank" rel="noopener noreferrer">View Credential</a>
      </li>
      <li>
        <strong>Satellite Meteorology, Oceanography, and Climatology (SatMOC)</strong> – American Meteorological Society  
        <br />
        <span style={{ fontStyle: "italic", marginRight: "5px" }}>Issued Jul 2024</span>  
        <a href="" target="_blank" rel="noopener noreferrer">View Credential</a>
      </li>
       <li>
        <strong>Global Youth Climate Summit</strong> – GYCL  
        <br />
        <span style={{ fontStyle: "italic", marginRight: "5px" }}>Issued May 2023</span>  
        <a href="" target="_blank" rel="noopener noreferrer">View Credential</a>
      </li>
      <li>
        <strong>McKinsey Forward Program</strong> – McKinsey & Company  
        <br />
        <span style={{ fontStyle: "italic", marginRight: "5px" }}>Issued May 2023</span>  
        <a href="https://www.credly.com/badges/cb59fcaa-5100-4ddc-a1bc-2e06f2bc5a93/linked_in_profile?trk=public_profile_see-credential" target="_blank" rel="noopener noreferrer">View Credential</a>
      </li>
      
      <li>
        <strong>ALX Virtual Assistant Course (Honors)</strong> – ALX Africa  
        <br />
        <span style={{ fontStyle: "italic", marginRight: "5px" }}>Issued Oct 2022</span> | <strong>Credential ID:</strong> cer-3929257b-c100-485e-8c73-b1cb3c6d  
        <br />
        <a href="https://www.virtualbadge.io/certificate-validator?credential=cer-3929257b-c100-485e-8c73-b1cb3c6d&trk=public_profile_see-credential" target="_blank" rel="noopener noreferrer">View Credential</a>
      </li>
    </ul>
  )
}
,
  {
  date: "Work Experience",
  title: "Professional Experience",
  description: "A timeline of my experience in software development, meteorology, and virtual assistance.",
  icon: <TeamOutlined style={{ fontSize: "24px" }} />,
  details: (
    <>
      <ul>
        <li>
          <strong>Sep 2024 - Present:</strong> <span style={{ fontStyle: "italic" }}>Freelance Software Developer</span> —  
          Designing and developing web applications, specializing in React, Node.js, PostgreSQL, and API integrations.  
          <strong>Key projects:</strong> Custom software solutions, cloud-based services, and performance optimization.
        </li>
        <li>
          <strong>Jun 2023 - Sep 2024:</strong> <span style={{ fontStyle: "italic" }}>Software Engineer Trainee, ALX Africa</span> —  
          Completed an intensive full-stack development program, focusing on front-end and back-end technologies.  
          <strong>Key projects:</strong> SkyHire (a web app for adventure plane and balloon rentals) and a secure authentication system.
        </li>
        <li>
          <strong>Mar 2023 - Apr 2023:</strong> <span style={{ fontStyle: "italic" }}>Frontend Web Development Intern, Side Hustle</span> —  
          Built interactive React and JavaScript applications, focusing on UI/UX design and performance optimization.
        </li>
        <li>
          <strong>Oct 2022 - Jan 2023:</strong> <span style={{ fontStyle: "italic" }}>Meteorological Intern, Jomo Kenyatta International Airport</span> —  
          Conducted aviation meteorology observations and provided weather reports for air traffic safety.
        </li>
        <li>
          <strong>May 2021 - Aug 2021:</strong> <span style={{ fontStyle: "italic" }}>Meteorological Attaché, Eldoret International Airport</span> —  
          Assisted in weather forecasting, aviation meteorology, and real-time data transmission to air traffic control.
        </li>
        <li>
          <strong>Sep 2022 - Present:</strong> <span style={{ fontStyle: "italic" }}>Fellow at The Room</span> —  
          Part of a global talent network, collaborating with professionals across Africa in various projects.
        </li>
        <li>
          <strong>Mar 2023 - Jan 2024:</strong> <span style={{ fontStyle: "italic" }}>Virtual Assistant (Self-Employed)</span> —  
          Provided remote administrative support (data entry, scheduling, email management, research) to clients worldwide.
        </li>
      </ul>
    </>
  )
}
,
];

const Heros: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | CardItem | null>(null);

  const showModal = (item: TimelineItem | CardItem) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="container my-5">
      <Title level={2} className="text-center mb-4" style={{ color: "#3498db" }}>My Professional Journey</Title>
      <br />
      <br />
      <Row gutter={[16, 16]} className="mb-4">
        {/* Timeline Section (Tree) */}
        <Col xs={24} lg={12}>
          <Timeline mode="alternate">
            {timelineData.map((item, index) => (
              <Timeline.Item
                key={index}
                dot={
                  <Tooltip title={item.date}>
                    {item.icon}
                  </Tooltip>
                }
                color="#3498db"
              >
                <Card
                  hoverable
                  className="mb-3"
                  onClick={() => showModal(item)}
                >
                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </Card>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>

        {/* Cards Section */}
        <Col xs={24} lg={12}>
          <Row gutter={[16, 16]}>
            {cardData.map((item, index) => (
              <Col xs={24} sm={12} key={index}>
                <Card
                  hoverable
                  className="h-100"
                  onClick={() => showModal(item)}
                  cover={
                    <div className="text-center py-3 text-white" style={{ backgroundColor: "#3498db" }}>
                      {item.icon}
                      <Title level={4} className="text-white mb-0 mt-2">{item.date}</Title>
                    </div>
                  }
                >
                  <Card.Meta
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Modal for Details */}
      <Modal
        title={selectedItem?.title}
        visible={modalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <p><strong>Date:</strong> {selectedItem?.date}</p>
        <p>{selectedItem?.details}</p>
      </Modal>

      {/* Global Styles */}
      <style jsx global>{`
      
        .ant-card-cover {
          border-bottom: 1px solid #f0f0f0;
        }
        .ant-card-meta-title {
          margin-bottom: 8px !important;
        }
        .ant-timeline-item-content {
          cursor: pointer;
        }
        .ant-timeline-item-head {
          background-color: #1890ff;
        }
        .ant-timeline-item-tail {
          border-left: 2px solid #1890ff;
        }
        @media (max-width: 575px) {
          .ant-card {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Heros;