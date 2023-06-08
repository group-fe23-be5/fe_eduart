const initialState = {
    name: "",
    email: "",
    password: ""
  };

  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
        };
      case 'REGISTER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
    
export default signupReducer