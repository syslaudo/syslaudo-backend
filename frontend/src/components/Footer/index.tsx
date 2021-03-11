import { StyledFooter } from './style';

export default function Footer(props: any) {
  return (
    <StyledFooter className={props.className}>
      <div className="container">
        <table>
          <tr>
            <th>Desenvolvedores</th>
            <th>Contato</th>
          </tr>

          <tr>
            <td>Alisson Felipe Lima Santos</td>
            <td>
              <a href="mailto:alisson.flima@souunit.com.br">
                <i className="fas fa-at"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/AlissonSantos17">
                <i className="fab fa-github"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>Bruno César Fontes Vieira</td>
            <td>
              <a href="mailto:bruno.cfontes@souunit.com.br">
                <i className="fas fa-at"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/BrunoCesar10">
                <i className="fab fa-github"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>Fernanda Amaral de Souza</td>
            <td>
              <a href="mailto:fernanda.amaral00@souunit.com.br">
                <i className="fas fa-at"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/euninha1">
                <i className="fab fa-github"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>Lucas Santos Souza</td>
            <td>
              <a href="mailto:lucas.santos00@souunit.com.br">
                <i className="fas fa-at"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/lucaixsk8">
                <i className="fab fa-github"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>Natália Braga da Fonseca</td>
            <td>
              <a href="mailto:natalia.braga@souunit.com.br">
                <i className="fas fa-at"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/nataliafonseca">
                <i className="fab fa-github"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>Natan Nascimento Oliveira Matos</td>
            <td>
              <a href="mailto:natan.oliveira@souunit.com.br">
                <i className="fas fa-at"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/natanascimento">
                <i className="fab fa-github"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>Natalie Pereira Macedo</td>
            <td>
              <a href="mailto:natalie.pereira@souunit.com.br">
                <i className="fas fa-at"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/NathyM">
                <i className="fab fa-github"></i>
              </a>
            </td>
          </tr>
        </table>

        <p>&#169; 2021 - Syslaudo</p>
      </div>
    </StyledFooter>
  );
}