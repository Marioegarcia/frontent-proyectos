import React, { useState, useEffect, useRef } from "react";
import socket from "../Socket";
import { Input, Row, Col, Form, Button } from "antd";

import './sala.scss'

const { TextArea } = Input;

export default function Sala({ nombre }) {
    const [form] = Form.useForm();
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);
    const divRef = useRef(null);
    const passwordInput = useRef(null);

    
 
    
  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  

  const submit = () => {
    socket.emit("mensaje", nombre, mensaje);
    resetForm();
    passwordInput.current.focus();
  };



  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  

  const resetForm = () =>{
    form.resetFields();
  }

  
   
  return (
    <>
      <div ref={divRef} className="chat">
        {mensajes.map((e, i) => (
            
            <p key={i}>
            <strong>{e.nombre}: </strong> <small>{e.mensaje}</small> 
            </p>            
        ))}
    
        </div> 

        
            <Form onFinish={submit} form={form}>
                <Form.Item 
                name="mensaje"
                value={mensaje}
                >

                <Input
                    onChange={(e) => setMensaje(e.target.value)}
                    addonBefore={nombre}
                    autofocus="autofocus"
                />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit">Enviar</Button>
                </Form.Item>
            </Form>
            
         
      
    </>
  );
}
