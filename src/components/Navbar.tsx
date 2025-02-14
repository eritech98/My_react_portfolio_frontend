"use client"

import { useState, useEffect, useRef } from "react";
import { Layout, Menu, Button, Drawer, Tooltip, ConfigProvider, Popover } from "antd";
import {
  MenuOutlined,
  CodeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  TeamOutlined,
  CloudOutlined,
} from "@ant-design/icons";

// Import your components
import Intro from "./Intro";
import Caro from "./Caro";
import Heros from "./Heros";
import Stats from "./Stats";
import Testimonial from "./TestimonialComponent";
import Contact from "./Contact";
import Myfooter from "./Myfooter";

const { Header } = Layout;

export default function PortfolioNavbar() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuPopoverVisible, setMenuPopoverVisible] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const navbarRef = useRef(null);

  // Refs for scrolling to sections
  const introRef = useRef(null);
  const caroRef = useRef(null);
  const herosRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (navbarRef.current) {
        setIsOverflowing(navbarRef.current.scrollWidth > navbarRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuPopoverVisible(false);
    onClose();
  };

  const mainMenuItems = [
    { key: "intro", label: "Home", ref: introRef },
    { key: "services", label: "About me", ref: servicesRef },
    { key: "caro", label: "Projects", ref: caroRef },
    { key: "heros", label: "Experience", ref: herosRef },
    { key: "stats", label: "Stats", ref: statsRef },
    { key: "testimonial", label: "Testimonials", ref: testimonialRef },
    { key: "contact", label: "My Contact", ref: contactRef },
  ];

  const socialMenuItems = [
    {
      key: "github",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub Icon"
          width="20"
          height="20"
        />
      ),
      label: "GitHub",
      link: "https://github.com/eritech98",
    },
    {
      key: "linkedin",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
          alt="LinkedIn Icon"
          width="18"
          height="18"
        />
      ),
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/erick-olando-9a9148220",
    },
    {
      key: "twitter",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
          alt="X Logo"
          width="18"
          height="18"
        />
      ),
      label: "Twitter",
      link: "https://x.com/erick_olando",
    },
    {
      key: "medium",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Medium_logo_Monogram.svg"
          alt="Medium Logo"
          width="18"
          height="18"
        />
      ),
      label: "Medium",
      link: "https://medium.com/@olandoerick98",
    },
    {
      key: "instagram",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          width="18"
          height="18"
        />
      ),
      label: "Instagram",
      link: "https://www.instagram.com/ericky54/",
    },
    {
      key: "youtube",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
          alt="YouTube Icon"
          width="24"
          height="24"
        />
      ),
      label: "YouTube",
      link: "https://www.youtube.com/@erickolando153",
    },
  ];

  const mobileMenuItems = [
    ...mainMenuItems.map((item) => ({
      key: item.key,
      label: item.label,
      onClick: () => scrollToSection(item.ref),
    })),
    { type: "divider" },
    ...socialMenuItems.map((item) => ({
      key: item.key,
      label: item.label,
      icon: item.icon,
      onClick: () => window.open(item.link, "_blank"),
    })),
  ];

  const headerStyle = {
    background: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    padding: "0 15px",
    height: "auto",
    lineHeight: "1.5",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 15px",
    width: "100%",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "nowrap",
    gap: "20px",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1890ff",
    transition: "color 0.3s",
    textDecoration: "none",
  };

  const menuStyle = {
    border: "none",
    background: "none",
    display: "flex",
    justifyContent: "center",
  };

  const menuItemStyle = {
    color: "rgba(0, 0, 0, 0.85)",
    transition: "all 0.3s",
    padding: "0 15px",
    "&:hover": {
      color: "#1890ff",
    },
  };

  const iconButtonStyle = {
    border: "none",
    padding: "0 8px",
    marginLeft: "8px",
    transition: "all 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };

  const menuPopoverContent = (
    <Menu mode="vertical" style={{ border: "none" }}>
      <Menu.Item key="projects" icon={<CodeOutlined />} onClick={() => scrollToSection(caroRef)}>
        Projects
      </Menu.Item>
      <Menu.Item key="experience" icon={<LaptopOutlined />} onClick={() => scrollToSection(herosRef)}>
        Experience
      </Menu.Item>
      <Menu.Item key="portfolio" icon={<ProfileOutlined />} onClick={() => scrollToSection(statsRef)}>
        Portfolio Highlights
      </Menu.Item>
      <Menu.Item key="skills" icon={<TeamOutlined />} onClick={() => scrollToSection(testimonialRef)}>
        Skills
      </Menu.Item>
      <Menu.Item key="testimonials" icon={<CloudOutlined />} onClick={() => scrollToSection(contactRef)}>
        Testimonials
      </Menu.Item>
    </Menu>
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
          colorBgContainer: "#ffffff",
          colorText: "rgba(0, 0, 0, 0.85)",
          components: {
            Menu: {
              horizontalItemSelectedColor: "inherit",
              horizontalItemHoverColor: "inherit",
              horizontalItemSelectedBg: "transparent",
            },
          },
        },
      }}
    >
      <Header style={headerStyle}>
        <div style={containerStyle}>
          <nav style={navStyle} ref={navbarRef}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <a href="#" style={logoStyle}>
                Erick.O
              </a>
            </div>
            {!isMobile && !isOverflowing && (
              <>
                <Menu
                  mode="horizontal"
                  style={{ ...menuStyle, flex: 1, justifyContent: "center" }}
                  selectable={false}
                  overflowedIndicator={<MenuOutlined />}
                  disabledOverflow
                >
                  {mainMenuItems.map((item) => (
                    <Menu.Item key={item.key} onClick={() => scrollToSection(item.ref)} style={menuItemStyle}>
                      {item.label}
                    </Menu.Item>
                  ))}
                </Menu>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {socialMenuItems.map((item) => (
                    <Tooltip key={item.key} title={item.label}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={iconButtonStyle}>
                        <Button icon={item.icon} type="text" />
                      </a>
                    </Tooltip>
                  ))}
                </div>
              </>
            )}
            {(isMobile || isOverflowing) && (
              <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} style={{ color: "inherit" }} />
            )}
          </nav>
        </div>
        <Drawer title="Menu" placement="right" onClose={onClose} open={visible} width={300} bodyStyle={{ padding: 0 }}>
          <Menu
            mode="vertical"
            items={mobileMenuItems}
            style={{ border: "none" }}
          />
        </Drawer>
      </Header>
      <div style={{ height: "64px" }} />
      <main>
        <div ref={introRef}>
          <Intro ref={servicesRef} />
        </div>
        <div ref={caroRef}>
          <Caro />
        </div>
        <div ref={herosRef}>
          <Heros />
        </div>
        <div ref={statsRef}>
          <br />
          <br />
          <Stats />
        </div>
        <div ref={testimonialRef}>
          <Testimonial />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Myfooter />
      </main>
    </ConfigProvider>
  );
}
