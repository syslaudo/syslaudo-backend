import { useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  ButtonGroup,
  Form,
  Input,
  InputGroup,
  Label,
  RadioButton,
  RadioGroup,
} from './FormElements';

export const DoctorFormContainer = styled(Form)<{ doctorType?: string }>`
  .inputResidente {
    display: ${(props) => (props.doctorType === 'R' ? 'block' : 'none')};
  }

  .inputProfessor {
    display: ${(props) => (props.doctorType === 'P' ? 'block' : 'none')};
  }
`;

export default function DoctorForm() {
  const [doctorType, setDoctorType] = useState('M');

  return (
    <DoctorFormContainer doctorType={doctorType}>
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
        <RadioGroup>
          <RadioButton
            name="tipo"
            id="Médico Padrão"
            value="M"
            onChange ={() => setDoctorType('M')}
          />
          <RadioButton
            name="tipo"
            id="Médico Residente"
            value="R"
            onChange ={() => setDoctorType('R')}
          />
          <RadioButton
            name="tipo"
            id="Médico Professor"
            value="P"
            onChange ={() => setDoctorType('P')}
          />
        </RadioGroup>
      </InputGroup>

      <div className="inputResidente">
        <InputGroup>
          <Label htmlFor="data-residencia">Data de Início da Residência</Label>
          <Input type="date" id="data-residencia" />
        </InputGroup>
      </div>

      <div className="inputProfessor">
        <InputGroup>
          <Label htmlFor="titulacao">Titulação</Label>
          <Input id="titulacao" />
        </InputGroup>
      </div>

      <ButtonGroup>
        <Button primary>Enviar</Button>
        <Button>Limpar</Button>
      </ButtonGroup>
    </DoctorFormContainer>
  );
}
