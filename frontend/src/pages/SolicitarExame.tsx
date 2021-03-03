import {
  Button,
  ButtonGroup,
  Form,
  Input,
  InputGroup,
  Label,
  ValidationMessage,
} from '../components/FormElements';
import { Title } from '../components/TextElements';

export default function SolicitarExame() {
  return (
    <div className="SolicitarExame">
      <Title>Solicitação de Exames</Title>
      <Form>
        <InputGroup>
          <Label htmlFor="label">Label</Label>
          <Input id="label" />
          <ValidationMessage>This is the validation message</ValidationMessage>
        </InputGroup>
        <InputGroup>
          <Label>Label 2</Label>
          <Input />
          <ValidationMessage>This is the validation message</ValidationMessage>
        </InputGroup>
        <ButtonGroup>
          <Button primary={true}>Enviar</Button>
          <Button>Apagar</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}
