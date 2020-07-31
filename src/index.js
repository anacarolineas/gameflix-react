import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//Desafio, colocar algo na página 404
const Pagina404 = () => (<div>Página 404</div>);

//BroserRouter apresenta as rotas dos navegadores
//Switch: como se fosse um if, adicionar cada rota referente a página
//Route, especifica o path (caminho) e o componente
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Pagina404} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

