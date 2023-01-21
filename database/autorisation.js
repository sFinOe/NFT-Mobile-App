import React, { useState, useEffect } from "react";
import axios from "axios";

export async function getUser(type, email, password) {
  return axios
    .post(`http://10.30.114.76:8383/${type}`, {
      email: email,
      password: password,
    })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.resolve(err);
    });
}
