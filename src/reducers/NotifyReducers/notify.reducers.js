import { notifyConstants } from "../../actions/constants";

const initState = {
  listNotifyByTutor: [],
  listNotifyByStudent: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case notifyConstants.GET_NOTIFY_BY_TUTOR_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case notifyConstants.GET_NOTIFY_BY_TUTOR_SUCCESS:
      state = {
        ...state,
        loading: false,
        listNotifyByTutor: action.payload.listNotifyByTutor,
      };
      break;
    case notifyConstants.GET_NOTIFY_BY_TUTOR_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

      case notifyConstants.GET_NOTIFY_BY_STUDENT_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case notifyConstants.GET_NOTIFY_BY_STUDENT_SUCCESS:
        state = {
          ...state,
          loading: false,
          listNotifyByStudent: action.payload.listNotifyByStudent,
        };
        break;
      case notifyConstants.GET_NOTIFY_BY_STUDENT_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;
      
  }
  return state;
};