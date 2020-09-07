import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo.png";

import "./SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPanel } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img
            src={Logo}
            className="sign-in__content-logo-img"
            alt="Silvia López"
          />
        </h1>
      </Content>
    </Layout>
  );
}
