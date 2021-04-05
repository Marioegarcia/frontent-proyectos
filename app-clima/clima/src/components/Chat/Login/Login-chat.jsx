import React, { useState } from "react";
import { Form, Input, Button, Tabs } from 'antd';
 import Sala from '../Sala';
import "./login.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const { TabPane } = Tabs;


export default function Login() {
  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);


  const registrar = () => {
    if (nombre !== "") {
      setRegistrado(true);
    }
  };

  if (!registrado) {
    return (

      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={registrar}
      className="contenedor"
      
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    );
  }

  if (registrado) {
    return (
        <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Sala" key="1">
          <Sala nombre={nombre}/>
        </TabPane>
      </Tabs>
    );
  }
}
