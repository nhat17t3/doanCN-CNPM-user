import { billConstants } from "../../actions/constants";

const initState = {
  listBill: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case billConstants.GET_BILL_BY_TUTOR_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case billConstants.GET_BILL_BY_TUTOR_SUCCESS:
      state = {
        ...state,
        loading: false,
        listBill: action.payload.listBill,
      };
      break;
    case billConstants.GET_BILL_BY_TUTOR_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

      case billConstants.PAY_BY_TUTOR_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case billConstants.PAY_BY_TUTOR_SUCCESS:
        state = {
          ...state,
          loading: false,
        };
        break;
      case billConstants.PAY_BY_TUTOR_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;

      
      
  }
  return state;
};