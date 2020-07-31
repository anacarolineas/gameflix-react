import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo() {
  return (
    <div>
      Página de Cadastro de Vídeo
    </div>

  );
}

//BroserRouter apresenta as rotas dos navegadores
//Switch: como se fosse um if, adicionar cada rota referente a página
//Route, especifica o path (caminho) e o componente
ReactDOM.render(
  <BrowserRouter>
  <Switch> 
    <Route path="/cadastro/video" component={CadastroVideo}/>
    <Route path="/" component={App} exact/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

