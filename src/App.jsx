import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import Aside from "./components/Aside";
import Content from "./components/Content";

import { loadingUsers } from "./redux/actions/users";
import { loadingGroups } from "./redux/actions/groups";
import { loadingDiscipline } from "./redux/actions/disciplines";

import { Layout, Spin } from "antd";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadingUsers());
    dispatch(loadingGroups());
    dispatch(loadingDiscipline());
  }, []);

  const [collapsed, isCollapsed] = useState(false);

  const toggle = () => {
    isCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Aside collapsed={collapsed} />
      <Layout className="site-layout">
        <Header toggle={toggle} collapsed={collapsed} />
        <Content />
      </Layout>
    </Layout>
  );
}

export default App;
