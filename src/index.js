import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BodyContainer from './front/layout/BodyContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
// component
import Header from './front/layout/Header';
import HeaderComponent from './front/component/HeaderComponent';
import HandlingEvent from './front/component/HandlingEvent';
import ConditionRender from './front/component/ConditionRender';
import NumberList from './front/component/NumberList';
import FormComponent from './front/component/FormComponent';

import * as serviceWorker from './serviceWorker';

function DataInSideComponent(props){
  return props.inComponent;
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  
    <React.StrictMode>
      <Header />
      <BodyContainer data={ "Navbar"} />
      <HeaderComponent comEx={"Component Example"} />
      <DataInSideComponent inComponent="Inside Componet"/>
      <HandlingEvent />
      <ConditionRender isLoggedIn={false} />
      <NumberList number={numbers}/>
      <FormComponent />
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
   

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
