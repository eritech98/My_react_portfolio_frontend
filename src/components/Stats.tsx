import React, { useState, useEffect, useRef } from 'react';
import { Card, Statistic, Progress, Row, Col, Tooltip, Typography, Carousel } from 'antd';
import { CodeOutlined, ProjectOutlined, ClockCircleOutlined, GithubOutlined, BranchesOutlined, UserOutlined, ToolOutlined, TeamOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import "../../node_modules/antd/dist/reset.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const { Title, Paragraph } = Typography;

interface StatItem {
  title: string;
  value: number;
  prefix: React.ReactNode;
  color: string;
  suffix?: string;
  tooltip: string;
  trend?: 'up' | 'down';
  trendPercentage?: number;
}

const stats: StatItem[] = [
  {
    title: 'Years of Experience',
    value: 2,
    prefix: <ClockCircleOutlined />,
    color: '#1890ff',
    suffix: '+',
    tooltip: 'Years of professional development experience',
    trend: 'up',
    trendPercentage: 20
  },
  {
    title: 'Projects Completed',
    value: 30,
    prefix: <ProjectOutlined />,
    color: '#52c41a',
    suffix: '+',
    tooltip: 'Successfully delivered projects',
    trend: 'up',
    trendPercentage: 15
  },
  {
    title: 'GitHub Contributions',
    value: 1500,
    prefix: <GithubOutlined />,
    color: '#722ed1',
    suffix: '+',
    tooltip: 'GitHub Contributions (Across Private & Public Repositories) in the last year',
    trend: 'up',
    trendPercentage: 25
  },
  {
    title: 'Technologies Mastered',
    value: 10,
    prefix: <CodeOutlined />,
    color: '#faad14',
    tooltip: 'Programming languages and frameworks proficiently used',
    trend: 'up',
    trendPercentage: 10
  },
  {
    title: 'Code Repositories',
    value: 45,
    prefix: <BranchesOutlined />,
    color: '#eb2f96',
    tooltip: 'Public and private repositories maintained',
    trend: 'up',
    trendPercentage: 30
  },
  {
    title: 'Client Satisfaction',
    value: 98,
    prefix: <UserOutlined />,
    color: '#13c2c2',
    suffix: '%',
    tooltip: 'Percentage of satisfied clients',
    trend: 'up',
    trendPercentage: 5
  },
  {
    title: 'Tools Utilized',
    value: 20,
    prefix: <ToolOutlined />,
    color: '#fa8c16',
    tooltip: 'Development and productivity tools regularly used',
    trend: 'up',
    trendPercentage: 18
  },
  {
    title: 'Team Collaborations',
    value: 8,
    prefix: <TeamOutlined />,
    color: '#a0d911',
    tooltip: 'Cross-functional teams worked with',
    trend: 'up',
    trendPercentage: 12
  }
];

const Stats: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 50);
            if (newCounts[index] > stat.value) newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const renderStatCard = (stat: StatItem, index: number) => (
    <Tooltip title={stat.tooltip}>
      <Card
        ref={(el) => (cardRefs.current[index] = el)}
        className="stat-card"
      >
        <Statistic
          title={stat.title}
          value={counts[index]}
          prefix={stat.prefix}
          suffix={stat.suffix}
          valueStyle={{ color: stat.color }}
        />
        <Progress
          percent={Math.round((counts[index] / stat.value) * 100)}
          showInfo={false}
          strokeColor={stat.color}
          className="stat-progress"
        />
        {stat.trend && (
          <div className="trend-indicator">
            {stat.trend === 'up' ? <ArrowUpOutlined style={{ color: '#52c41a' }} /> : <ArrowDownOutlined style={{ color: '#f5222d' }} />}
            <span style={{ marginLeft: '5px', color: stat.trend === 'up' ? '#52c41a' : '#f5222d' }}>
              {stat.trendPercentage}%
            </span>
          </div>
        )}
      </Card>
    </Tooltip>
  );

  return (
    <div className="full-width-background">
      <div className="portfolio-highlights">
        <Title level={2} className="text-center mb-4" style={{color:"#3498db"}}>Portfolio Highlights</Title>
        <Paragraph className="text-center mb-5">
          A snapshot of my professional achievements and skills
        </Paragraph>
        <Row gutter={[16, 16]} className="desktop-view">
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              {renderStatCard(stat, index)}
            </Col>
          ))}
        </Row>
        <div className="mobile-view">
          <Carousel
            afterChange={setActiveIndex}
            dotPosition="bottom"
            className="stat-carousel"
          >
            {stats.map((stat, index) => (
              <div key={index}>
                {renderStatCard(stat, index)}
              </div>
            ))}
          </Carousel>
          <div className="carousel-indicator">
            {activeIndex + 1} / {stats.length}
          </div>
        </div>
        <style jsx>{`
          .full-width-background {
            background-color: #f0f2f5; /* Light gray background */
            width: 100%;
            padding: 2rem 0;
          }
          .portfolio-highlights {
            max-width: 1200px;
            margin: 0 auto;
            overflow: hidden;
          }
          .desktop-view {
            display: flex;
          }
          .mobile-view {
            display: none;
          }
          :global(.stat-card) {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1.5rem; /* Increased padding */
            padding-bottom: 2rem; /* Added padding to the bottom */
            background-color: #fff; /* White background for cards */
            border-radius: 8px; /* Rounded corners */
            opacity: 0; /* Start with invisible cards */
            transform: translateY(20px); /* Start slightly below */
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          :global(.stat-card.visible) {
            opacity: 1; /* Fade in */
            transform: translateY(0); /* Move to original position */
          }
          :global(.ant-statistic-title) {
            font-size: 1rem;
            margin-bottom: 0.5rem !important;
            color: #555; /* Darker text for better readability */
          }
          :global(.ant-statistic-content) {
            font-size: 1.5rem !important;
            color: #333; /* Darker text for better readability */
          }
          :global(.stat-progress) {
            margin-top: 1rem;
          }
          :global(.trend-indicator) {
            margin-top: 0.5rem;
            font-size: 0.9rem;
          }
          :global(.stat-carousel .slick-slide) {
            padding: 0 10px;
          }
          .carousel-indicator {
            text-align: center;
            margin-top: 1rem;
            font-size: 0.9rem;
            color: #8c8c8c;
          }
          @media (max-width: 768px) {
            .desktop-view {
              display: none;
            }
            .mobile-view {
              display: block;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Stats;