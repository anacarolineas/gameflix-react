import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição inicial',
    cor: '#000',
  }
  //abrindo o array -> console.log(nomeDaCategoria) -> array [nome, função]
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, //nome: ''/valor
    })
  }

  function handlerChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

      }}>
        {/*State, altera componente dinamicamente sem refresh na página, contador por exemplo */}
        <div>
          <label>Nome da Categoria:
        <input type="text" value={values.nome}
              name="nome"
              onChange={handlerChange} />
          </label>
        </div>

        <div>
          <label>Descrição:
        <textarea type="text"
              value={values.descricao}
              name="descricao"
              onChange={handlerChange}
            />
          </label>
        </div>

        <div>
          <label>Cor:
        <input type="color"
              value={values.cor}
              name="color"
              onChange={handlerChange}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault >

  );
}

export default CadastroCategoria;