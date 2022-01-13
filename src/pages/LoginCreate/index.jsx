import React from 'react';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { USER_POST } from '../../api/api';
import { UserContext } from '../../contexts/UserContext';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Error from '../../Components/Error';
import Head from '../../Components/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { loading, error, request } = useFetch();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const validatedUsername = username.validate();
    const validatedEmail = email.validate();
    const validatedPassword = password.validate();

    if (validatedUsername && validatedEmail && validatedPassword) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });

      const { response } = await request(url, options);

      if (response.ok) {
        await userLogin({ username: username.value, password: password.value });
      }
    }
  }

  return (
    <>
      <Head title="Criar Conta" description="Crie sua conta!" />
      <section className="animeLeft">
        <h1 className="title">Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <Input type="text" label="Usuário" name="username" {...username} />
          <Input type="email " label="E-mail" name="email" {...email} />
          <Input type="password" label="Senha" name="password" {...password} />
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
        </form>
        <Error error={error} />
      </section>
    </>
  );
};

export default LoginCreate;
