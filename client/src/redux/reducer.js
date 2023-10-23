import {
  GET_COLECCIONES,
  GET_COLECCION_BY_NAME,
  GET_COLECCION_BY_ID,
  GET_COLIBRIES,
  GET_COLIBRI_BY_NAME,
  GET_COLIBRI_BY_ID,
  CLEAN_DETAIL,
} from "./action-types";

const initialState = {
  allColecciones: [],
  colecciones: [],
  coleccionId: [],
  allColibries: [],
  colibries: [],
  colibriDetail: [],
  colibri: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //Colecciones
    case GET_COLECCIONES:
      return { ...state, allColecciones: action.payload };
    case GET_COLECCION_BY_ID:
      return { ...state, coleccionId: action.payload };
    case GET_COLECCION_BY_NAME:
      return { ...state, colecciones: action.payload };
    //Colibries
    case GET_COLIBRIES:
      return { ...state, allColibries: action.payload };
    case GET_COLIBRI_BY_NAME:
      return { ...state, colibries: action.payload };
    case GET_COLIBRI_BY_ID:
      return { ...state, colibriDetail: action.payload };
    case CLEAN_DETAIL:
      return { ...state, colibriDetail: {} };
    default:
      return { ...state };
  }
};

export default reducer;
