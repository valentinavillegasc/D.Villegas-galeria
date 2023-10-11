import axios from "axios";
import {
  GET_COLECCIONES,
  GET_COLECCION_BY_NAME,
  GET_COLECCION_BY_ID,
  GET_COLIBRIES,
  GET_COLIBRI_BY_NAME,
  GET_COLIBRI_BY_ID,
  CLEAN_DETAIL,
} from "./action-types";
const LINK_API = process.env;

//! Actions COLECCIONES

export const getColecciones = () => {
  return async function (dispatch) {
    try {
      const colecciones = await axios.get(`http://localhost:3001/colecciones`);
      dispatch({ type: GET_COLECCIONES, payload: colecciones.data });
    } catch (error) {
      console.error("Error al obtener colecciones:", error);
    }
  };
};

export const getColeccionesById = (id) => {
  return async function (dispatch) {
    const coleccion = await axios.get(`${LINK_API}/colecciones/${id}`);
    dispatch({ type: GET_COLECCION_BY_ID, payload: coleccion.data });
  };
};

export const getColeccionByName = (name) => {
  return async function (dispatch) {
    const coleccion = await axios.get(`${LINK_API}/colecciones?name=${name}`);
    dispatch({ type: GET_COLECCION_BY_NAME, payload: coleccion.data });
  };
};

//! Actions COLIBRIES

export const getColibries = () => {
  return async function (dispatch) {
    const colecciones = await axios.get(`${LINK_API}/colibries`);
    dispatch({ type: GET_COLIBRIES, payload: colecciones.data });
  };
};

export const getColibriesById = (id) => {
  return async function (dispatch) {
    const coleccion = await axios.get(`${LINK_API}/colibries/${id}`);
    dispatch({ type: GET_COLIBRI_BY_ID, payload: coleccion.data });
  };
};

export const getColibriesByName = (name) => {
  return async function (dispatch) {
    const coleccion = await axios.get(`${LINK_API}/colibries?name=${name}`);
    dispatch({ type: GET_COLIBRI_BY_NAME, payload: coleccion.data });
  };
};

//! Adicionales
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
