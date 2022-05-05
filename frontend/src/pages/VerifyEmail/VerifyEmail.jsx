import '../App.css';
import logo from '../../assets/img/Finstagram-logo-color.png'
import VerifyEmailForm from './VerifyEmailForm';
import FormPage from '../../Components/FormPage';
import { useState } from 'react';

function VerifyEmail() {
  const [message, setMessage] = useState("Wir haben dir einen Verifzierungs-Code per Email zugesendet, damit du deinen account aktivierst.")
  const [userWasVerified, setUserWasVerified] = useState(false)

  const userVerificationSuccessful = () => {
    setMessage("Du hast dich erfolgreich registriert, nun darfst du dich einloggen...")
    setUserWasVerified(true)
  }

  return (
    <FormPage sideImgSrc="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png">
      <div className="w-75" role="document">
        <div className="modal-content rounded-5 shadow">
          <div className="p-5 pb-4 border-bottom-0">
            <img src={logo} alt="" className='w-25'/>
            <h4 className="mb-0 gray-700 logo">Finstagram</h4>
            {!userWasVerified && <div className="text-white bg-success rounded p-2 my-2">
              Schritt 2 – E-Mail verifzieren
            </div>}
            <h5 className="text-success mt-3">{message}</h5>
          </div>

          <div className="modal-body px-5 pb-5">
            <VerifyEmailForm
              userWasVerified={userWasVerified}
              userVerificationSuccessful={userVerificationSuccessful}/>
          </div>
        </div>
      </div>
    </FormPage>  
  );
}

export default VerifyEmail;
