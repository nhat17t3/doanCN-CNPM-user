import axios from "../../helpers/axios";
import { billConstants } from "../constants";
import { toast } from "react-toastify";

export const getListBillByTutor = () => {
  return async (dispatch) => {
    dispatch({ type: billConstants.GET_BILL_BY_TUTOR_REQUEST });
    const res = await axios.get(`/api/bill`);

    if (res.status === 200) {
      const { bills } = res.data;
      dispatch({
        type: billConstants.GET_BILL_BY_TUTOR_SUCCESS,
        payload: {
          listBill: bills,
        },
      });
    } else {
      dispatch({
        type: billConstants.GET_BILL_BY_TUTOR_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const payByTutor = (form) => {
  return async (dispatch) => {
    dispatch({ type: billConstants.PAY_BY_TUTOR_REQUEST });
    const res = await axios.put(`/api/pay`,form);

    if (res.status === 200) {
      dispatch({
        type: billConstants.PAY_BY_TUTOR_SUCCESS,
      });
      dispatch(getListBillByTutor());
    } else {
      dispatch({
        type: billConstants.PAY_BY_TUTOR_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
