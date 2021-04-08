import Body from '../components/Body';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';

export default function ListarMedicos() {
  return (
    <div className="ListarMedicos">
      <Navbar />
      <Body>
        <Title>Lista de Médicos</Title>
      </Body>
      <Footer />
    </div>
  );
  }
  