import React from 'react';
import { Route, Switch } from "react-router-dom";

import MenuTop from '../components/MenuTop'
import './LayoutBasic.scss'

export default function LayoutBasic(props) {
    const { routes } = props;

    return (
    <div className='contenido'>
      
     
      
      <LoadRoutes routes={routes} />

   
      <MenuTop/>
      
    </div>

    )
}


function LoadRoutes({ routes }) {
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