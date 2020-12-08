import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const Header = ({ toggle, collapsed }) => {
  return (
    <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })}
    </Layout.Header>
  );
};

export default Header;
