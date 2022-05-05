import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../api/api";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("")

  let navigate = useNavigate();

  const doRegistration = (event) => {
    event.preventDefault()

    fetch(apiBaseUrl + "/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullname, username, password })
    })
    .then(response => response.json())
    .then(data => {
      if(!data.err) {
        navigate("/verify-email")
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
      <form>
        <div className="form-floating mb-3">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autoComplete="off"/>
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autoComplete="off"/>
          <label htmlFor="floatingInput">Vollstäntiger Name</label>
        </div>
        <div className="form-floating mb-3">
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autoComplete="off"/>
          <label htmlFor="floatingInput">Benutzer Name</label>
        </div>
        <div className="form-floating mb-3">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" autoComplete="off" />
          <label htmlFor="floatingPassword">Passwort</label>
        </div>
        <button onClick={doRegistration} className="w-100 mb-2 btn btn-lg rounded-4 btn-dark" type="submit">Weiter</button>
        {error && <p className="text-danger">{error}</p>}
      </form>
      <Link to='/'>
        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-secondary fs-6" type="btn">Du hast ein Konto? Einloggen</button>
      </Link>
    </div>
  );
}
 
export default RegisterForm;