import {
  Button,
  ButtonGroup,
  Form,
  Input,
  InputGroup,
  Label,
  MultilineInput
} from './FormElements';

export default function ExamCreateForm() {
  return (
    <Form>
      <InputGroup>
        <Label htmlFor="nome">Nome do Exame</Label>
        <Input id="nome" />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="recomendações">Recomendações</Label>
        <MultilineInput id="recomendações" />
      </InputGroup>

      <ButtonGroup>
        <Button primary>Enviar</Button>
        <Button>Limpar</Button>
      </ButtonGroup>
    </Form>
  );
}
