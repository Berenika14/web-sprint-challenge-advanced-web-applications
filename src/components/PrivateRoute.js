import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(localStorage.getItem("token"));
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute
