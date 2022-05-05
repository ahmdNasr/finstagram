import RegisterForm from "./RegisterForm";
import logo from '../../assets/img/Finstagram-logo-color.png'
import FormPage from "../../Components/FormPage";

const Registration = () => {
    return (
      <FormPage sideImgSrc="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png">
        <div className="w-75" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className=" p-5 pb-4 border-bottom-0">
              <img src={logo} alt="" className='w-25'/>
              <h2 className="logo">Finstagram</h2>
              <h5 className="text-secondary">
                Registriere dich, um die Fotos und Videos deiner Freunde zu sehen.
              </h5>
            </div>

            <div className="modal-body px-5 pb-5">
              <RegisterForm />
            </div>
          </div>
        </div>
      </FormPage>
    );
}
 
export default Registration;