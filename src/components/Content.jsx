import React from "react";
import { Route } from "react-router-dom";

import Students from "./Pages/Students";
import Subjects from "./Pages/Subjects";
import InputData from "./Pages/InputData";
import Groups from "./Pages/Groups";
import ControlType from "./Pages/ControlType";
import ErrorBoundary from "./ErrorBoundary";

import { Layout } from "antd";

const Content = () => {
  return (
    <>
      <Layout.Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <Route exact path={"/students"} component={Students} />
        <Route
          exact
          path={"/subjects"}
          render={() => (
            <ErrorBoundary>
              <Subjects />
            </ErrorBoundary>
          )}
        />
        <Route
          exact
          path={"/inputData"}
          render={() => (
            <ErrorBoundary>
              <InputData />
            </ErrorBoundary>
          )}
        />
        <Route
          exact
          path={"/groups"}
          render={() => (
            <ErrorBoundary>
              <Groups />
            </ErrorBoundary>
          )}
        />
        <Route
          exact
          path={"/controlType"}
          render={() => (
            <ErrorBoundary>
              <ControlType />
            </ErrorBoundary>
          )}
        />
      </Layout.Content>
    </>
  );
};

export default Content;
