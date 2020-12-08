import React from "react";
import { Route } from "react-router-dom";

import Students from "./Pages/Students";
import Subjects from "./Pages/Subjects";
import InputData from "./Pages/InputData";
import Groups from "./Pages/Groups";
import ControlType from "./Pages/ControlType";

import { Layout } from "antd";

const Content = () => {
  return (
    <Layout.Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Route exact path={"/students"} component={Students} />
      <Route exact path={"/subjects"} component={Subjects} />
      <Route exact path={"/inputData"} component={InputData} />
      <Route exact path={"/groups"} component={Groups} />
      <Route exact path={"/controlType"} component={ControlType} />
    </Layout.Content>
  );
};

export default Content;
