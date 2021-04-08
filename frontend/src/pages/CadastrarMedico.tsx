import Body from '../components/Body';
import Footer from '../components/Footer';
import DoctorForm from '../components/Forms/DoctorForm';
import Navbar from '../components/Navbar';
import { Title } from '../components/TextElements';


export default function CadastrarMedico() {
  return (
    <div className="CadastrarMedico">
      <Navbar />
      <Body>
        <Title>Cadastro de Médico</Title>
        <DoctorForm />
      </Body>
      <Footer />
    </div>
  );
}
