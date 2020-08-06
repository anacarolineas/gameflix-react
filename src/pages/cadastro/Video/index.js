import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import ButtonClear from '../../../components/ButtonClear';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import styled from 'styled-components';
import TableVideos from '../../../components/TableVideos';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Novo Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!1!');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Link do vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Escolha uma categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <TableVideos />

        <Button type="submit">
          Cadastrar
        </Button>

        <ButtonClear type="submit">
          Limpar
        </ButtonClear>

      </form>

      <br />
      <br />
      
      <StyledLink>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
      </Link></StyledLink>

    </PageDefault>
  );
}

export default CadastroVideo;