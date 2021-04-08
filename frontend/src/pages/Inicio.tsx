import { Link } from 'react-router-dom';
import Body from '../components/Body';
import { Card, CardGroup } from '../components/Cards';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';

export default function Inicio() {
  return (
    <div className="homeContainer">
      <Navbar />
      <Body>
        <div className="cards">
          <Title>Solicitações</Title>
          <CardGroup>
            <Link to="/cadastrar-paciente">
              <Card>
                <h1>Cadastrar Paciente</h1>
              </Card>
            </Link>
            <Link to="/solicitar-exame">
              <Card>
                <h1>Solicitar Exame</h1>
              </Card>
            </Link>
          </CardGroup>
          <br />
          <br />
          <br />
          <Title>Exames</Title>
          <CardGroup>
            <Link to="/listar-exames">
              <Card>
                <h1>Lista de Exames</h1>
              </Card>
            </Link>
            <Link to="/listar-exames">
              <Card>
                <h1>Exames Pendentes</h1>
              </Card>
            </Link>
            <Link to="/listar-exames">
              <Card>
                <h1>Laudos Pendentes</h1>
              </Card>
            </Link>
            <Link to="/listar-exames">
              <Card>
                <h1>Laudos Aprovados</h1>
              </Card>
            </Link>
          </CardGroup>
        </div>
        <div className="avisos">
          <Title>Avisos</Title>
          <p>Espaço reservado para avisos cadastrados pela administração!</p>
        </div>
      </Body>
      <Footer />
    </div>
  );
}
