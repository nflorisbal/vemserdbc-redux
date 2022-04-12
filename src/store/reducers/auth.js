const INITIAL_STATE = {
  auth: {
    token: '',
    auth: false,
    loading: true,
    error: false,
  },
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_LOGIN') {
    return {
      auth: {
        ...state,
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error,
      },
    };
  }

  return state;
};

export default authReducer;
