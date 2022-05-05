import { useState } from "react";
import { Link } from "react-router-dom";
import { apiBaseUrl } from "../../api/api";

const VerifyEmailForm = (props) => {
  const [email, setEmail] = useState("")
  const [sixDigitCode, setSixDigitCode] = useState("")

  const [error, setError] = useState("")

  const verifyAccount = (event) => {
    event.preventDefault()

    fetch(apiBaseUrl + "/api/users/verifyEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, sixDigitCode })
    })
    .then(response => response.json())
    .then(data => {
      if(!data.err) {
        setError("")
        props.userVerificationSuccessful()
        return
      }

      if(data.err.validationErrors) {
        const firstError = data.err.validationErrors[0]
        setError(firstError.msg + ": " + firstError.param)
        return
      }

      setError(data.err.message)      
    })
  }

  return (
    <div>
        {props.userWasVerified
        ? <Link to='/'>
            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-dark fs-6" type="btn">
              <div>Jetzt als {email} einloggen!</div>
            </button>
          </Link>
        : <form>
            <div className="form-floating mb-3">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autoComplete="off"/>
              <label htmFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input value={sixDigitCode} onChange={(e) => setSixDigitCode(e.target.value)} type="text" className="form-control rounded-4" id="floatingPassword" placeholder="123456" autoComplete="off" />
              <label htmFor="floatingPassword">Verifcation Code</label>
            </div>
            <button onClick={verifyAccount} className="w-100 mb-2 btn btn-lg rounded-4 btn-dark" type="submit">Account Verifzieren</button>
            {error && <p className="text-danger">{error}</p>}
          </form>
        }
    </div>
  );
}
 
export default VerifyEmailForm;