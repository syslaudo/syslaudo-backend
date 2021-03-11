import Body from '../components/Body';
import Footer from '../components/Footer';
import LoginForm from '../components/Forms/LoginForm';
import LoginNavbar from '../components/Navbar/LoginNavbar';

export default function Login() {
  return (
    <div className="Login">
      <LoginNavbar />
      <Body>
        <LoginForm />
      </Body>
      <Footer />
    </div>
  );
  }
  