import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Section, DivImg, DivForm } from './styles';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PHOTO_POST } from '../../api/api';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Error from '../../Components/Error';
import Container from '../../Components/Container';
import Head from '../../Components/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = React.useState({});

  function handleImgChange({ target }) {
    try {
      const preview = URL.createObjectURL(target.files[0]);
      const raw = target.files[0];
      const tempImg = new Image();
      tempImg.src = preview;
      tempImg.onload = () => {
        const { width } = tempImg;
        const { height } = tempImg;

        setImg({
          preview,
          raw,
          width,
          height,
        });
      };
    } catch (err) {
      setImg({});
    }
  }

  const { request, loading, error } = useFetch();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const validateNome = nome.validate();
    const validatePeso = peso.validate();
    const validateIdade = idade.validate();

    if (validateNome && validatePeso && validateIdade) {
      const body = new FormData();
      body.append('nome', nome.value);
      body.append('peso', peso.value);
      body.append('idade', idade.value);
      body.append('img', img.raw);

      const token = JSON.parse(window.localStorage.getItem('token'));
      const { url, options } = PHOTO_POST({ token, body });
      const { response } = await request(url, options);

      if (response.ok) {
        navigate('/conta');
      }
    }
  }

  return (
    <>
      <Head
        title="Poste sua foto"
        description="Compartilhe sua foto com os outros usuários"
      />
      <Container>
        <Section img={img.preview}>
          <DivForm>
            <Form>
              <Input label="Nome" type="text" name="nome" {...nome} />
              <Input label="Peso" type="number" name="peso" {...peso} />
              <Input label="Idade" type="number" name="idade" {...idade} />
              <input
                className="inputFile"
                type="file"
                name="img"
                onChange={handleImgChange}
              />
              {loading ? (
                <Button disabled>Carregando...</Button>
              ) : (
                <Button onClick={handleSubmit}>Enviar</Button>
              )}
              <Error error={error} />
            </Form>
          </DivForm>
          {img && img.preview && (
            <DivImg
              style={{
                backgroundImage: `url(${img.preview})`,
                backgroundPosition:
                  img.height > img.width ? 'center top' : 'center',
              }}
            />
          )}
        </Section>
      </Container>
    </>
  );
};

export default UserPhotoPost;
