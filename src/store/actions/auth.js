import { apiAuth } from '../../api';

export const handleLogin = async (values, dispatch) => {
  try {
    const { data } = await apiAuth.post('/auth', values);
    console.log(data);
    const logged = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
    };
    dispatch(logged);
  } catch (error) {
    console.log(error);
  }
};
