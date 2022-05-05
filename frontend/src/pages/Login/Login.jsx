import '../App.css';
import logo from '../../assets/img/Finstagram-logo-color.png'
import LoginForm from './LoginForm';
import FormPage from '../../Components/FormPage';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <FormPage sideImgSrc="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png">
        <div className="w-75 mx-auto" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className=" p-5 pb-4 border-bottom-0">
              <img src={logo} alt="" className='w-25'/>
              <h2 className="mb-0 gray-700 logo">Finstagram</h2>
            </div>

            <div className="modal-body px-5 pb-5">
              <LoginForm loginSuccess={props.loginSuccess} />
            </div>
          </div>
          <Link to={'/signup'}>
              <button className="w-100 mt-3 btn btn-lg rounded-4 btn-secondary fs-6" type="btn">Du hast kein Konto? Registrieren</button>
            </Link>
        </div>
    </FormPage>
  );
}

export default Login;
