import { classConstants } from "../../actions/constants";

const initState = {
  listClassByTutor: [],
  listClassByStudent: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case classConstants.GET_ALL_CLASS_BY_TUTOR_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case classConstants.GET_ALL_CLASS_BY_TUTOR_SUCCESS:
      state = {
        ...state,
        loading: false,
        listClassByTutor: action.payload.listClassByTutor,
      };
      break;
    case classConstants.GET_ALL_CLASS_BY_TUTOR_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

      case classConstants.GET_ALL_CLASS_BY_STUDENT_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case classConstants.GET_ALL_CLASS_BY_STUDENT_SUCCESS:
        state = {
          ...state,
          loading: false,
          listClassByStudent: action.payload.listClassByStudent,
        };
        break;
      case classConstants.GET_ALL_CLASS_BY_STUDENT_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;

        case classConstants.FINISH_CLASS_BY_TUTOR_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case classConstants.FINISH_CLASS_BY_TUTOR_SUCCESS:
        state = {
          ...state,
          loading: false,
        };
        break;
      case classConstants.FINISH_CLASS_BY_TUTOR_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;
  }
  return state;
};
