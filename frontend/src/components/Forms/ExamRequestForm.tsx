import {
  Button,
  ButtonGroup,
  Form,
  Input,
  InputGroup,
  Label,
  MultilineInput,
  RadioButton,
  RadioGroup,
} from './FormElements';

export default function ExamForm() {
  return (
    <Form>
      <InputGroup>
        <Label htmlFor="registro">Registro do Paciente</Label>
        <Input id="registro" />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="nome">Nome do Paciente</Label>
        <Input id="nome" disabled/>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="tipo">Exame</Label>
        <RadioGroup>
          <RadioButton name="tipo" id="Ecocardiograma" value="Ecocardiograma" />
          <RadioButton name="tipo"id="Eletrocardiograma"value="Eletrocardiograma"/>
          <RadioButton name="tipo" id="Mapa" value="Mapa" />
          <RadioButton name="tipo" id="Router" value="Router" />
        </RadioGroup>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="data-prevista">Data Prevista</Label>
        <Input type="date" id="data-prevista" />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="hipótese">Hipótese Diagnosticada - CID</Label>
        <Input id="hipótese"/>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="recomendações">Recomendações</Label>
        <MultilineInput id="recomendações"/>
      </InputGroup>

      <ButtonGroup>
        <Button primary>Enviar</Button>
        <Button>Limpar</Button>
      </ButtonGroup>
    </Form>
  );
}
