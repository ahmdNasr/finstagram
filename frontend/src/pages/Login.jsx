import './App.css';
import logo from '../assets/img/Finstagram-logo-color.png'
import LoginForm from './LoginForm';
import FormPage from '../Components/FormPage';

function Login() {
  return (
    <FormPage sideImgSrc="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png">
        <div className="w-75" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className=" p-5 pb-4 border-bottom-0">
              <img src={logo} alt="" className='w-25'/>
              <h2 className="mb-0 gray-700 logo">Finstagram</h2>
            </div>

            <div className="modal-body px-5 pb-5">
              <LoginForm />
            </div>
          </div>
        </div>
    </FormPage>
  );
}

export default Login;
