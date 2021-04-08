import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadastrarExame from './pages/CadastrarExame';
import CadastrarMedico from './pages/CadastrarMedico';
import CadastrarPaciente from './pages/CadastrarPaciente';
import Configuracoes from './pages/Configuracoes';
import Inicio from './pages/Inicio';
import ListarExames from './pages/ListarExames';
import ListarMedicos from './pages/ListarMedicos';
import ListarPacientes from './pages/ListarPaciente';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SolicitarExame from './pages/SolicitarExame';
import { GlobalStyle } from './style/global';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Inicio} />
        <Route path="/inicio" component={Inicio} />
        <Route path="/login" component={Login} />
        <Route path="/cadastrar-medico" component={CadastrarMedico} />
        <Route path="/listar-medicos" component={ListarMedicos} />
        <Route path="/cadastrar-paciente" component={CadastrarPaciente} />
        <Route path="/listar-pacientes" component={ListarPacientes} />
        <Route path="/solicitar-exame" component={SolicitarExame} />
        <Route path="/cadastrar-exame" component={CadastrarExame} />
        <Route path="/listar-exames" component={ListarExames} />
        <Route path="/configuracoes" component={Configuracoes} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
