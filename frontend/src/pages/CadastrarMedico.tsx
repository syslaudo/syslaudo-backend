import { Title } from '../components/TextElements';
import DoctorForm from '../components/Forms/DoctorForm';


export default function CadastrarMedico() {
  return (
    <div className="CadastrarMedico">
      <Title>Cadastro de Médico</Title>
      <DoctorForm />
    </div>
  );
}
