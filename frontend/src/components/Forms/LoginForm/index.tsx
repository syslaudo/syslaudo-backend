import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Input, InputGroup, Label } from '../FormElements';
import { LoginFormContainer } from './style';

export default function LoginForm() {
  return (
    <LoginFormContainer>
      <h5>Login</h5>
      <div>
        <InputGroup>
          <Label htmlFor="user">Nome de Usuário</Label>
          <Input id="user" />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" />
          <Link to="/">
            <p>Esqueceu sua senha?</p>
          </Link>
        </InputGroup>

        <ButtonGroup>
          <Button primary>Login</Button>
        </ButtonGroup>
        <br />
      </div>
    </LoginFormContainer>
  );
}
