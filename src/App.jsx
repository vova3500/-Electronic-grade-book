import React, { useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DatabaseOutlined,
  UploadOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, isCollapsed] = useState(false);

  const toggle = () => {
    isCollapsed(!collapsed);
  };
  console.log(Header);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/students">Студенты</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DatabaseOutlined />}>
            <Link to="/inputData">Ввод данных о предметах</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            <Link to="/subjects">Предметы</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UsergroupAddOutlined />}>
            <Link to="/subjects">Группы</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>
            <Link to="/controlType">Тип контроля</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UploadOutlined />}>
            <Link to="/уxit">Выход</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
