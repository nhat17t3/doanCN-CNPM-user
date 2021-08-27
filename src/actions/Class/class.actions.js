import axios from "../../helpers/axios";
import { classConstants } from "../constants";


export const getListClassByTutor= () => {
  return async (dispatch) => {
    dispatch({ type: classConstants.GET_ALL_CLASS_BY_TUTOR_REQUEST });
    const res = await axios.get(`/api/myClass`);
    
    if (res.status === 200) {
      const { classes } = res.data;
      dispatch({
        type: classConstants.GET_ALL_CLASS_BY_TUTOR_SUCCESS,
        payload: {
          listClassByTutor: classes,
        },
      });
    } else {
      dispatch({
        type: classConstants.GET_ALL_CLASS_BY_TUTOR_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};


export const getListClassByStudent= () => {
  return async (dispatch) => {
    dispatch({ type: classConstants.GET_ALL_CLASS_BY_STUDENT_REQUEST });
    const res = await axios.get(`/api/myClass`);
    
    if (res.status === 200) {
      const { classes } = res.data;
      dispatch({
        type: classConstants.GET_ALL_CLASS_BY_STUDENT_SUCCESS,
        payload: {
          listClassByStudent: classes,
        },
      });
    } else {
      dispatch({
        type: classConstants.GET_ALL_CLASS_BY_STUDENT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const finishClassByTutor= (myClass) => {
  return async (dispatch) => {
    dispatch({ type: classConstants.FINISH_CLASS_BY_TUTOR_REQUEST });
    const res = await axios.put(`/api/classes/${myClass.idClass}`);
    
    if (res.status === 200) {
      dispatch({
        type: classConstants.FINISH_CLASS_BY_TUTOR_SUCCESS
      });
      dispatch(getListClassByTutor());

    } else {
      dispatch({
        type: classConstants.FINISH_CLASS_BY_TUTOR_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};