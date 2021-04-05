import { basePath, apiVersion } from "./config";


export function getCiudadApi(ciudad) {
  
  const url = `${basePath}/${apiVersion}/clima`;
  const params = {
    method: "POST",
    body: JSON.stringify(ciudad),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
    
      return { ok: true, message: result.message };
    })
    .catch(err => {
      return { ok: false, message: err.message };
    });
}

export function getClimaApi(data) {
  
  const url = `${basePath}/${apiVersion}/temperatura`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return { ok: true, message: result.message };
    })
    .catch(err => {
      return { ok: false, message: err.message };
    });
}


export function signUpApi(data) {
    const url = `${basePath}/${apiVersion}/sign-up`;
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.user) {
          return { ok: true, message: "Usuario creado correctamente" };
        }
        return { ok: false, message: result.message };
      })
      .catch(err => {
        return { ok: false, message: err.message };
      });
  }
  