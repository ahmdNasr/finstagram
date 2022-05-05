import { useState } from "react";
import { Link } from "react-router-dom";
import { apiBaseUrl } from "../../api/api";

const LoginForm = (props) => {
  const [username, setUsername] = useState("WaldiTea")
  const [password, setPassword] = useState("Brille123!")

  const [error, setError] = useState("")
  const loginUser = (event) => {
    event.preventDefault()

    fetch(apiBaseUrl + "/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // damit er die http only secure cookies sicher abspreichert im browser!
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if(!data.err) {
        props.loginSuccess(data.token)
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
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autoComplete="off"/>
          <label htmlFor="floatingInput">Username or Email</label>
        </div>
        <div className="form-floating mb-3">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" autoComplete="off" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button onClick={loginUser} className="w-100 mb-3 btn btn-lg rounded-4 btn-dark" type="submit">Anmelden</button>
        {error && <p className="text-danger">{error}</p>}
      </form>
      <small>
        <Link to="/passwort/reset" className="text-decoration-none text-dark">Passwort vergessen?</Link>
      </small>
    </div>
  );
}
 
export default LoginForm;