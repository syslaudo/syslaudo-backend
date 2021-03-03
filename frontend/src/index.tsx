import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CadastrarMedico from './pages/CadastrarMedico';
import CadastrarPaciente from './pages/CadastrarPaciente';
import Configuracoes from './pages/Configuracoes';
import Inicio from './pages/Inicio';
import ListarExames from './pages/ListarExames';
import ListarMedicos from './pages/ListarMedicos';
import ListarPacientes from './pages/ListarPaciente';
import PageNotFound from './pages/PageNotFound';
import Perfil from './pages/Perfil';
import SolicitarExame from './pages/SolicitarExame';
import { GlobalStyle } from './style/base';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
      <Body>
        <Switch>
          <Route path="/" exact={true} component={Inicio} />
          <Route path="/cadastrar-medico" component={CadastrarMedico} />
          <Route path="/listar-medicos" component={ListarMedicos} />
          <Route path="/cadastrar-paciente" component={CadastrarPaciente} />
          <Route path="/listar-pacientes" component={ListarPacientes} />
          <Route path="/solicitar-exame" component={SolicitarExame} />
          <Route path="/listar-exames" component={ListarExames} />
          <Route path="/perfil" component={Perfil}/>
          <Route path="/configuracoes" component={Configuracoes} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Body>
      <Footer />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
