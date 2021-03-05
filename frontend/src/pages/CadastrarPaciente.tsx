import PacientForm from '../components/Forms/PacientForm';
import { Title } from '../components/TextElements';

export default function CadastrarPaciente() {
  return (
    <div className="CadastrarPaciente">
      <Title>Cadastro de Paciente</Title>
      <PacientForm />
    </div>
  );
}
