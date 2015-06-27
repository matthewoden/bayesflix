'use strict';
import './app.css';

import React from 'react';
import NavigationBar from '../../components/navigationBar/';
import NavigationMenu from '../../components/navigationMenu/';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../../stores/index';

const redux = createRedux(stores);

import { RouteHandler } from 'react-router';

class App extends React.Component{
    render() {

        return (
          <div>
            <NavigationBar/>
            <NavigationMenu/>
            <Provider redux={redux}>
              {()=><RouteHandler/>}
            </Provider>
          </div>
        );
    }
}

export default App;
