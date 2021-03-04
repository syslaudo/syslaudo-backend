import {
  Button,
  ButtonGroup,
  Form,
  Input,
  InputGroup,
  Label,
} from '../components/FormElements';
import { Title } from '../components/TextElements';

export default function CadastrarMedico() {
  return (
    <div className="CadastrarMedico">
      <Title>Cadastro de Médico</Title>
      <Form>
        <InputGroup>
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="crm">CRM</Label>
          <Input id="crm" />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="tipo">Tipo</Label>
          <Input id="tipo" disabled={true} />
        </InputGroup>

        <ButtonGroup>
          <Button primary>Enviar</Button>
          <Button>Limpar</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}
