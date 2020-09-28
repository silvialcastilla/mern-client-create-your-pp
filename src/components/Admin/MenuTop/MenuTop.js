import React from "react";
import { logout } from "../../../api/auth";
import { Button } from "antd";
import {
  MenuFoldOutlined,
  PoweroffOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import SilviaLogo from "../../../assets/img/png/logo.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const logoutUser = () => {
    logout();
    window.location.reload();
  };
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={SilviaLogo}
          alt="Silvia López"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right" onClick={logoutUser}>
        <Button type="link">
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
