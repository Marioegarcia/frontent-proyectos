import React from "react";
import { List, Layout } from "antd";

import "./Home.scss";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Clima",
    slug: "/clima",
  },
  {
    title: "Chat",
    slug: "/chat",
  },
  {
    title: "Login",
    slug: "/login",
  },
  {
    title: "CRUD",
    slug: "/crud",
  },
];

const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <div className="site-layout-content">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              xxl: 1,
            }}
            dataSource={data}
            renderItem={(item) => (
              <Link to={item.slug}>
                <List.Item>
                  <div className="container">
                    <div className="zoomInDown">
                      {/* <Card bordered={false} >
                 {item.title}
             </Card> */}

                      <header>
                        <h1 data-text={item.title}>{item.title}</h1>
                      </header>
                    </div>
                  </div>
                </List.Item>
              </Link>
            )}
          />
        </div>
      </Content>
    </Layout>
  );
}
