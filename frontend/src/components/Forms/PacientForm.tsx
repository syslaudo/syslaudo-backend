import {
  Button,
  ButtonGroup,
  Form,
  Input,
  InputGroup,
  Label,
  RadioButton,
  RadioGroup
} from './FormElements';

export default function PacientForm() {
  return (
    <Form>
      <InputGroup>
        <Label htmlFor="registro">Registro</Label>
        <Input id="registro" />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="data-nascimento">Data de Nascimento</Label>
        <Input type="date" id="data-nascimento" />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="sexo">Sexo</Label>
        <RadioGroup>
          <RadioButton name="sexo" id="Masculino" value="M" />
          <RadioButton name="sexo" id="Feminino" value="F" />
        </RadioGroup>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="cor">Cor</Label>
        <RadioGroup>
          <RadioButton name="cor" id="Branco" value="Branco" />
          <RadioButton name="cor" id="Pardo" value="Pardo" />
          <RadioButton name="cor" id="Preto" value="Negro" />
          <RadioButton name="cor" id="Amarelo" value="Amarelo" />
          <RadioButton name="cor" id="Indígena" value="Indígena" />
        </RadioGroup>
      </InputGroup>

      <ButtonGroup>
        <Button primary>Enviar</Button>
        <Button>Limpar</Button>
      </ButtonGroup>
    </Form>
  );
}
