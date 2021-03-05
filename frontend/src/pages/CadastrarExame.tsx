import ExameCreateForm from '../components/Forms/ExamCreateForm';
import { Title } from '../components/TextElements';

export default function CadastrarExame() {
  return (
    <div className="CadastrarExame">
      <Title>Cadastro de Exames</Title>
      <ExameCreateForm />
    </div>
  );
}
