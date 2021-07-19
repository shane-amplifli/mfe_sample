import React from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from './components/Signup';

const com1 = () => <div>abc</div>;
const com2 = <div>efg</div>;



const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
        <Signin />
          <Switch>
            <Route path="/one" component={com1}></Route>
            <Route path="/two" component={com1}></Route>
            {/* <Route path="/auth/signin" component={Signin} /> 
            <Route path="/auth/signup" component={Signup} /> */}
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
