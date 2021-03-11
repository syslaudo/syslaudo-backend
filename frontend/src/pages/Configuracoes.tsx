import Body from '../components/Body';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';

export default function Configuracoes() {
  return (
    <div className="Configuracoes">
      <Navbar />
      <Body>
        <Title>Configurações</Title>
      </Body>
      <Footer />
    </div>
  );
}
