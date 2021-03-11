import Body from '../components/Body';
import Footer from '../components/Footer';
import PacientForm from '../components/Forms/PacientForm';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';

export default function CadastrarPaciente() {
  return (
    <div className="CadastrarPaciente">
      <Navbar />
      <Body>
        <Title>Cadastro de Paciente</Title>
        <PacientForm />
      </Body>
      <Footer />
    </div>
  );
}
