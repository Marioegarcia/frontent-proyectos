import React, { useState } from "react";
import { Drawer, Button, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./MenuTop.scss";

export default function MenuTop() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="circular-menu circular-menu-left ">
        <Button shape="circle" type="primary" onClick={showDrawer} size="large">
          <MenuOutlined />
        </Button>
      </div>

      <Drawer
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={5}>
            <Link to="/" onClick={()=>setVisible(false)} >
              <div>HOME</div>
            </Link>
          </Col>
          <Col className="gutter-row" span={5}>
            <Link to="/clima"  onClick={()=>setVisible(false)} >
              <div>CLIMA</div>
            </Link>
          </Col>
          <Col className="gutter-row" span={5}>
            <Link to="/crud"  onClick={()=>setVisible(false)}>
              <div>CRUD</div>
            </Link>
          </Col>
          <Col className="gutter-row" span={5}>
            <Link to="/login"  onClick={()=>setVisible(false)}>
              <div>LOGIN</div>
            </Link>
          </Col>
          <Col className="gutter-row" span={4.8}>
            <Link to="/chat"  onClick={()=>setVisible(false)} >
              <div>CHAT</div>
            </Link>
          </Col>
        </Row>
      </Drawer>
    </>
  );
}
