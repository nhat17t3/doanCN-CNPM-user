import axios from "../../helpers/axios";
import { notifyConstants } from "../constants";

export const getNotifyByTutor = () => {
  return async (dispatch) => {
    dispatch({ type: notifyConstants.GET_NOTIFY_BY_TUTOR_REQUEST });
    const res = await axios.get(`/api/notifications`);
    
    if (res.status === 200) {
      const { notificatons } = res.data;
      dispatch({
        type: notifyConstants.GET_NOTIFY_BY_TUTOR_SUCCESS,
        payload: {
          listNotifyByTutor: notificatons,
        },
      });
    } else {
      dispatch({
        type: notifyConstants.GET_NOTIFY_BY_TUTOR_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getNotifyByStudent = () => {
  return async (dispatch) => {
    dispatch({ type: notifyConstants.GET_NOTIFY_BY_STUDENT_REQUEST });
    const res = await axios.get(`/api/notifications`);
    
    if (res.status === 200) {
      const { notificatons } = res.data;
      dispatch({
        type: notifyConstants.GET_NOTIFY_BY_STUDENT_SUCCESS,
        payload: {
          listNotifyByStudent: notificatons,
        },
      });
    } else {
      dispatch({
        type: notifyConstants.GET_NOTIFY_BY_STUDENT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

