import React, { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .post(`/logout`)
      .then((resp) => {
        localStorage.removeItem("token");

        push("/login");
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div>
      <h2>Your are Logged out</h2>
    </div>
  );
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
