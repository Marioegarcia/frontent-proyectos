import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  notification,
  Table,
  Statistic,
  Row,
  Col,
} from "antd";

import { getCiudadApi, getClimaApi } from "../../api/clima";

import "./Clima.scss";

export default function Clima() {
  const [inputs, setInputs] = useState({
    ciudad: "",
  });
  const [lugares, setLugares] = useState();
  const [mostrar, setMostrar] = useState(false);
  const [temperatura, setTemperatura] = useState("");

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = () => {
    const { ciudad } = inputs;
    if (!ciudad) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      getCiudadApi(inputs).then((response) => {
        setLugares(response.message);
        setMostrar(true);
      });
    }
    resetForm();
  };

  const resetForm = () => {
    setInputs({
      ciudad: "",
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
      width: "5%",
    },
    {
      title: "Lugar",
      dataIndex: "place_name",
      key: "place_name",
    },
    {
      title: "Cooredenadas",
      dataIndex: "center",
      key: "center[1]",
      responsive: ["lg"],
    },
    {
      title: "Action",
      key: "operation",
      render: (item) => (
        <Button type="primary" onClick={() => seleccion(item)}>
          ver
        </Button>
      ),
    },
  ];
  const seleccion = (item) => {
    console.log(item);
    getClimaApi(item.center).then((response) => {
      console.log(response.message);
      setTemperatura(response.message);
    });
  };

  return (
    <>
      <div className="top">
        <Row justify="center">
          <Col>
            <div>
              <p>
                <a href="/clima">CLIMA APP</a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={12} offset={6}>
          <div className="lightSpeedIn">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onChange={changeForm}
            >
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa una busqueda!",
                  },
                ]}
              >
                <Input
                  placeholder="Ingresa una ciudad"
                  name="ciudad"
                  value={inputs.ciudad}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Buscar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>

      <Row justify="center">
        <Col>
          <Temp data={temperatura} mostrar={mostrar} />

          <Table
            dataSource={lugares}
            columns={columns}
            pagination="bottomCenter"
            size="small"
            style={{ visibility: mostrar ? "visible" : "hidden" }}
          />
        </Col>
      </Row>
    </>
  );
}

function Temp(props) {
  const temp = props.data;
  console.log(temp.timezone);
  if (temp) {
    return (
      <Row  gutter={16}>
        <Col span={24}>
          <Row gutter={[1,8]}>
            <Col span={8}>
              
                <Statistic
                  
                  title={`${temp.name}`}
                  value={temp.main.temp}
                  precision={1}
                  valueStyle={{ color: "#96bb7c" }}
                  suffix="°"
                />
             
              </Col>
            <Col span={8}>
              
                <Statistic
                  title={`maxima`}
                  value={temp.main.temp_max}
                  precision={1}
                  valueStyle={{ color: "#c64756" }}
                  suffix="°"
                />
             
            </Col>
            <Col span={8}>
              
                <Statistic
                  title={`minima`}
                  value={temp.main.temp_min}
                  precision={1}
                  valueStyle={{ color: "#228dff" }}
                  suffix="°"
                />
             
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  return null;
}
