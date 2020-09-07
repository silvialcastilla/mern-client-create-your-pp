import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { Content } = Layout;
  return (
    <Layout>
      <h2>Menu...</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
      </Layout>
    </Layout>
  );
}

function LoadRoutes(props) {
  const { routes } = props;
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
