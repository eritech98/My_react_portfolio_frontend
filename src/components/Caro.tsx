import React, { useState } from 'react';
import { Layout, Card, Tabs, List, Tooltip, Divider, BackTop, Modal, Spin } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import '../../node_modules/antd/dist/reset.css';

const { Content } = Layout;
const { TabPane } = Tabs;

const Caro: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const meteorologyProjects = [
    {
      id: 1,
      title: "Chico - Chat Application",
      description: "A real-time chat and voice communication platform with session recording and music playback.",
      image: "https://github.com/eritech98/Images_private/raw/main/Chico.PNG", // Thumbnail image
      
      details: "Chico is a dynamic real-time chat application that enables users to engage in text and voice conversations. Features include session recording, music integration, and secure authentication for private chats. Built using Node.js, EJS, WebSockets, and Express, it delivers a seamless and interactive communication experience.(Hosted on a free render server)",
      projectLink: "https://chico-audio.onrender.com/", // Link to the project
      features: [
        "Real-time text and voice communication",
        "Session recording for playback",
        "Music integration for shared listening",
        "Secure authentication for private chats",
      ],
    },
    {
      id: 2,
      title: 'ProEase Property Management App',
      description: 'A smart solution for landlords and landladies to manage their properties directly.',
      image: 'https://github.com/eritech98/Images_private/raw/main/ProEase.PNG',
     
      details: 'ProEase simplifies property management with automated rent collection, maintenance tracking, and financial reporting. Designed for efficiency and transparency, it empowers landlords with full control over their properties. The app is still in development.',
      projectLink: '(Running locally not deployed)',
      features: [
        "Automated rent collection",
        "Maintenance request tracking",
        "Financial reporting and analytics",
        "Tenant communication portal",
      ],
    },
    { id: 3, title: 'SkyHire Aircraft Rental Platform', 
      description: 'A streamlined solution for hiring private jets and aircraft with ease.', 
      image: 'https://github.com/eritech98/Images_private/raw/main/SkyHire.PNG', 
    
      details: 'SkyHire connects users with aircraft rental services, offering real-time availability, pricing, and booking options. Designed for efficiency and convenience, it simplifies the aircraft hiring process.', 
      projectLink: 'https://eritech98.github.io/test4/',
      features: [
        "Real-time aircraft availability",
        "Transparent pricing and booking",
        "Multiple aircraft options",
        "Seamless user experience"
      ]
    },
  ];

  const vaProjects = [
    {
  "id": 4,
  "title": "Erick's Developer Portfolio",
  "description": "A portfolio showcasing full-stack projects with live links, built using React and Node.js.",
  "image": "https://github.com/eritech98/Images_private/raw/main/react.PNG",
  "details": "This portfolio presents Erick's full-stack development projects, highlighting expertise in AI, weather applications, automation, and web platforms. It includes live project links, descriptions, and case studies. The site is built using React for the frontend and Node.js for the backend, ensuring a smooth user experience.",
  "projectLink": "https://erick.up.railway.app/",
  "features": [
    "Showcases multiple projects with live links",
    "Built using React and Node.js",
    "Includes project descriptions and case studies",
    "Professional and modern UI/UX",
    "Responsive design for all devices"
  ]
}
,
    {
  "id": 5,
  "title": "Student Coaching & Study Abroad Platform",
  "description": "A web platform designed to help students with coaching, mentorship, and studying abroad opportunities.",
  "image": "https://github.com/eritech98/Images_private/raw/main/client.PNG",
  "details": "This platform was developed for a client to assist students in academic coaching, career mentorship, and securing opportunities to study abroad. It provides personalized coaching sessions, study materials, and step-by-step guidance for international education applications. The platform simplifies the process of finding scholarships, visa applications, and admissions into top universities worldwide.(still in development)",
  "projectLink": "(Running locally not deployed)",
  "features": [
    "Personalized coaching for students",
    "Guidance for studying abroad and scholarships",
    "Step-by-step admission and visa process",
    "Resource hub with study materials",
    "One-on-one mentorship and career support"
   
  ]
}
,
    {
  "id": 6,
  "title": "Live Weather Radar & Forecast App",
  "description": "A weather application with a live radar map, GPS search, and a beautiful UI for real-time weather updates.",
  "image": "https://github.com/eritech98/Images_private/raw/main/weather.PNG",
  "details": "This weather app provides real-time weather updates with a live radar map powered by MapTiler. Users can search for any location worldwide using a GPS-based search or a manual search bar within the radar map. The application features a sleek, modern frontend with a sliding modal that displays the current and tomorrow’s forecast in an interactive and user-friendly way.(still in development)",
  "projectLink": "(Running locally not deployed)",
  "features": [
    "Live radar map with real-time weather data",
    "GPS search for automatic location detection",
    "Search bar for any location on the radar map",
    "Beautiful UI with sliding modal for forecasts",
    "Current and tomorrow's weather updates",
    "Worldwide location support using MapTiler maps"
  ]
}
,
  ];

  const softwareProjects = [
    
      { id: 7,
     title: 'Cosmo - Daily Astronomy Insights', 
      description: 'A visually stunning platform providing daily astronomy pictures with expert explanations.', 
      image: 'https://github.com/eritech98/Images_private/raw/main/cosmo.PNG', 
       
      details: 'Cosmo delivers breathtaking daily images from NASAs Astronomy Picture of the Day (APOD) with insightful explanations. It features a responsive design, an interactive starry background and embedded SpaceX videos to enhance the user experience.', 
      projectLink: 'https://erickolando.up.railway.app/',
      features: [
        "Daily updated astronomy picture with detailed explanation",
        "Responsive design for optimal viewing on all devices",
        "Interactive starry background with twinkling stars and shooting stars",
        "Embedded YouTube video featuring SpaceX content",
        "Random space facts to enhance user engagement",
        "Accessibility features for an inclusive user experience"
      ],
    },
    {
  id: 8,
  title: 'Erick Olando Portfolio',
  description: 'A professional portfolio showcasing Erick Olando\'s expertise in software development, meteorology, and AI applications.',
  image: 'https://github.com/eritech98/Images_private/raw/main/portfolio.PNG',
  
  details: 'Built with Bootstrap, HTML, CSS, JavaScript, and W3.CSS, this portfolio highlights Erick Olando\'s projects, including real-time weather applications, AI-driven tools, and a secure document management system with API integration.',
  projectLink: "https://eritechva.netlify.app/",
  features: [
    "Fully responsive design with Bootstrap and W3.CSS",
    "Secure document management system with authentication",
    "Interactive UI with smooth animations",
    "Portfolio of meteorology and software development projects",
  ],
}
,
    {
  "id": 9,
  "title": "Erick AI - Conversational AI Bot",
  "description": "Developed a text-based AI chatbot for natural language conversations, providing intelligent responses and engaging interactions.",
  "image": "https://github.com/eritech98/Images_private/raw/main/Chatai2.PNG",
  
  "details": "Erick AI is a conversational AI bot capable of engaging users in meaningful discussions, answering questions, and providing insights across various topics. Built with advanced NLP capabilities, it ensures smooth and context-aware interactions.Limited to 10 requests per IP after which a user waits for 3 days",
  "projectLink": "https://erickai.up.railway.app/",
  "features": [
    "Natural language conversation",
    "Context-aware responses",
    "Multi-topic discussions",
    "Customizable personality",
    "Real-time processing",
    "Rate limited to 10 requests per Ip",
    
    
  ]
}
,
  {
  "id": 10,
  "title": "WeatherPro - Advanced Weather Forecasting",
  "description": "Developed an AI-powered weather forecasting application that provides real-time weather updates, detailed forecasts, and professional insights for pilots, farmers, industries, and event organizers.",
  "image": "https://github.com/eritech98/Images_private/raw/main/Updated.PNG",
  
  "details": "WeatherPro delivers accurate weather updates for cities worldwide, including real-time conditions, hourly forecasts, and specialized weather insights for various industries. The application utilizes AI-driven analysis to assess weather impact on aviation, farming, military operations, and more. Users can access a 24-hour forecast, precipitation probabilities, and energy potential calculations for solar and wind power.",
  "projectLink": "https://erickweather.up.railway.app/",
  "features": [
    "Real-time weather updates",
    "24-hour and multi-day forecasts",
    "AI-powered weather impact analysis",
    "Aviation weather insights for pilots",
    "Farming and industrial condition analysis",
    "Energy potential assessments (wind & solar)",
    "Health impact reports (air quality, pollen levels)",
    "Sports and event planning weather conditions",
    "User-friendly interface with interactive features"
  ]
}
,  
  ];

  const allProjects = [...meteorologyProjects, ...vaProjects, ...softwareProjects];

  const showProjectModal = (project: any) => {
    setSelectedProject(project);
    setModalVisible(true);
    setLoading(true);
    // Simulating API call to fetch project details
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const renderProjects = (projects: any[]) => (
    <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
      dataSource={projects}
      renderItem={item => (
        <List.Item>
          <Card
            hoverable
            cover={<img alt={item.title} src={item.image} className="h-48 object-cover cursor-pointer" onClick={() => showProjectModal(item)} />}
            actions={[
              <Tooltip title="View Details">
                <ZoomInOutlined key="view" onClick={() => showProjectModal(item)} />
              </Tooltip>,
            ]}
          >
            <Card.Meta
              title={item.title}
              description={item.description}
            />
          </Card>
        </List.Item>
      )}
    />
  );

  return (
    <Layout className="min-h-screen">
      <Content className="py-8 px-4">
        <div className="container mx-auto">
          <section id="projects" className="mb-16 pt-12 pb-8">
            <h2 className="text-3xl font-bold text-center mb-12" style={{color:"#3498db",paddingTop:"21px"}}>Featured Projects</h2>
           
            <Tabs defaultActiveKey="1" centered>
              
              <TabPane tab=" Featured" key="2">
                {renderProjects(meteorologyProjects)}
              </TabPane>
              
              <TabPane tab="Recent Work" key="3">
                {renderProjects(softwareProjects)}
              </TabPane>
              
              <TabPane tab="Discover" key="4">
                {renderProjects(vaProjects)}
              </TabPane>
              <TabPane tab="All Projects" key="1">
                {renderProjects(allProjects)}
              </TabPane>
            </Tabs>
          </section>
        </div>
      </Content>

      <Modal
        title={selectedProject?.title}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
      >
        {loading ? (
          <div className="text-center">
            <Spin size="large" />
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center">
              
              <div className="w-full">
                <p className="text-gray-700 mb-4">{selectedProject?.details}</p>
                <Divider />
                <h3 className="text-lg font-semibold mb-2">Features:</h3>
                <ul className="list-disc pl-6">
                  {selectedProject?.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Divider />
                <h5 className="text-lg font-semibold mb-2">Project Link:</h5>
                <a
                  href={selectedProject?.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                >
                  {selectedProject?.projectLink}
                </a>
              </div>
            </div>
          </>
        )}
      </Modal>
      <BackTop />
    </Layout>
  );
};

export default Caro;