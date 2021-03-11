import Body from '../components/Body';
import Footer from '../components/Footer';
import ExamRequestForm from '../components/Forms/ExamRequestForm';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';

export default function SolicitarExame() {
  return (
    <div className="SolicitarExame">
      <Navbar />
      <Body>
        <Title>Solicitação de Exames</Title>
        <ExamRequestForm />
      </Body>
      <Footer />
    </div>
  );
}
