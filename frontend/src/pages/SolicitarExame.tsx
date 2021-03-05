import ExamRequestForm from '../components/Forms/ExamRequestForm';
import { Title } from '../components/TextElements';

export default function SolicitarExame() {
  return (
    <div className="SolicitarExame">
      <Title>Solicitação de Exames</Title>
      <ExamRequestForm />
    </div>
  );
}
