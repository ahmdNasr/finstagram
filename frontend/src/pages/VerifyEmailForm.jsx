import { Link } from "react-router-dom";

const VerifyEmailForm = () => {
    return (
      <div>
        <form>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autoComplete="off"/>
            <label htmFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control rounded-4" id="floatingPassword" placeholder="123456" autoComplete="off" />
            <label htmFor="floatingPassword">Verifcation Code</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-4 btn-dark" type="submit">Login</button>
          {/* <small>Forgot password?</small> */}
        </form>
        <Link to={'/signup'}>
        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-secondary fs-6" type="btn">Du hast kein Konto? Registrieren</button>
        </Link>
      </div>
    );
}
 
export default VerifyEmailForm;