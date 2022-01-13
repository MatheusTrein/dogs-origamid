import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import useForm from '../../hooks/useForm';

import { Form, Div } from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Error from '../../Components/Error';
import Head from '../../Components/Head';

const Login = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const validateUsername = username.validate();
    const validatePassword = password.validate();

    if (validateUsername && validatePassword) {
      await userLogin({ username: username.value, password: password.value });
    }
  }

  return (
    <>
      <Head title="Login" description="Faça seu LogIn" />
      <section className="animeLeft">
        <h1 className="title">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Input type="text" label="Usuário" name="username" {...username} />
          <Input
            type="password"
            label="Password"
            name="password"
            {...password}
          />
          {loading ? (
            <Button disabled>Autenticando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error error={error} />
        </Form>
        <Link to="/login/perdeu">Perdeu a senha?</Link>
        <Div>
          <h2>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className="buttonForm" to="/login/criar">
            Cadastro
          </Link>
        </Div>
      </section>
    </>
  );
};

export default Login;
