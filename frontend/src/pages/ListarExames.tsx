import Body from '../components/Body';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';

export default function ListarExames() {
  return (
    <div className="ListarExames">
      <Navbar />
      <Body>
        <Title>Lista de Exames</Title>
      </Body>
      <Footer />
    </div>
  );
}
