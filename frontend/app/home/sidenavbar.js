"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Make sure to import from the correct path
import styled from "styled-components";
import {
  UserOutlined,
  HomeOutlined,
  TagOutlined,
  LineChartOutlined,
  BellOutlined,
  UploadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const SidebarContainer = styled.div`
  background-color: #3a3f51;
  height: 100vh;
  width: 250px;
  position: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
`;

const SearchBar = styled.input`
  width: 80%;
  padding: 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 16px; /* Larger font size for better visibility */
`;

const NavItem = styled.div`
  width: 100%;
  max-width: 80%;
  padding: 12px;
  margin-bottom: 18px;
  background-color: ${(props) => (props.active ? "#5e6472" : "#4a5066")};
  transition: background-color 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start; 
  border-radius: 8px;

  &:hover {
    background-color: #5e6472;
  }

  svg {
    margin-right: 12px;
    font-size: 20px;
  }

  span {
    font-size: 16px;
    color: #ffffff;
  }
`;

function SideNavbar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
    { path: "/profile", label: "Profile", icon: <UserOutlined /> },
    { path: "/home", label: "Overview", icon: <HomeOutlined /> },
    { path: "/home/annotation", label: "Annotate", icon: <TagOutlined /> },
    { path: "/home/insights", label: "Insights", icon: <LineChartOutlined /> },
    { path: "/home/notifications", label: "Notifications", icon: <BellOutlined /> },
    { path: "/home/upload", label: "Upload", icon: <UploadOutlined /> },
    { path: "/login", label: "Logout", icon: <LogoutOutlined /> },
  ];

  return (
    <SidebarContainer>
      <SearchBar
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {navItems
        .filter((item) =>
          item.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => (
          <NavItem
            key={item.path}
            active={router.pathname === item.path}
            onClick={() => router.push(item.path)}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavItem>
        ))}
    </SidebarContainer>
  );
}

export default SideNavbar;