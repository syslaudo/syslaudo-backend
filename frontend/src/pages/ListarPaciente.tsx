import Body from '../components/Body';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';

export default function ListarPacientes() {
  return (
    <div className="ListarPacientes">
      <Navbar />
      <Body>
        <Title>Lista de Pacientes</Title>
      </Body>
      <Footer />
    </div>
  );
}
