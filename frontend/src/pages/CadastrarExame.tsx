import Body from '../components/Body';
import Footer from '../components/Footer';
import ExameCreateForm from '../components/Forms/ExamCreateForm';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';

export default function CadastrarExame() {
  return (
    <div className="CadastrarExame">
      <Navbar />
      <Body>
        <Title>Cadastro de Exames</Title>
        <ExameCreateForm />
      </Body>
      <Footer />
    </div>
  );
}
  