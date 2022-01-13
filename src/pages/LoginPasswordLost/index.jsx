import React from 'react';

import { Wrapper, Form, Message } from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Error from '../../Components/Error';
import Head from '../../Components/Head';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { LOST_PASSWORD } from '../../api/api';

const LoginPasswordLost = () => {
  const login = useForm();

  const { loading, error, request } = useFetch();
  const [message, setMessage] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const currentUrl = window.location.href;

    const { url, options } = LOST_PASSWORD({
      login: login.value,
      url: currentUrl,
    });

    const { response, json } = await request(url, options);

    if (response.ok) {
      setMessage(json);
    }
  }

  return (
    <>
      <Head
        title="Perdeu sua senha?"
        description="Perdeu a senha? Nós vamos te ajudar!"
      />
      <Wrapper>
        <h1 className="title">Perdeu a senha?</h1>
        <Form onSubmit={handleSubmit}>
          <Input label="Usuário / Email" name="login" {...login} />
          {message && <Message>{message}</Message>}
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}

          <Error error={error} />
        </Form>
      </Wrapper>
    </>
  );
};

export default LoginPasswordLost;
