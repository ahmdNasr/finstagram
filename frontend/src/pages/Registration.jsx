import RegisterForm from "./RegisterForm";
import logo from '../assets/img/Finstagram-logo-color.png'

const Registration = () => {
    return (
      <div className="App bg-dark">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-6">
            <div className="w-50 ms-auto me-2">
              <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png" alt="" className="w-100" />
            </div>
          </div>

          <div className="col-6 vh-100 py-5">
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
          </div>
        </div>
      </div>
      
      
    </div>
    );
}
 
export default Registration;