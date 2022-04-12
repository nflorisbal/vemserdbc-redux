import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { handleLogin } from '../../store/actions/auth';

const Login = ({ auth, dispatch }) => {
  const formik = useFormik({
    initialValues: {
      usuario: '', // usuario
      senha: '', // senha
    },
    onSubmit: (values) => {
      handleLogin(values, dispatch);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="usuario">Usuario</label>
      <input
        name="usuario"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.usuario}
      />
      <label htmlFor="senha">Senha</label>
      <input
        name="senha"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.senha}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Login);
