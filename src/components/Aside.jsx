import React from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DatabaseOutlined,
  UploadOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Aside = ({ collapsed }) => {
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="dark" mode="inline">
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
          <Link to="/groups">Группы</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          <Link to="/controlType">Тип контроля</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<UploadOutlined />}>
          <Link to="/еxit">Выход</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Aside;
