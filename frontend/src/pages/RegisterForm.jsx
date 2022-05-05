import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <div>
        <form>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autocomplete="off"/>
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autocomplete="off"/>
            <label for="floatingInput">Vollstäntiger Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autocomplete="off"/>
            <label for="floatingInput">Benutzer Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" autocomplete="off" />
            <label for="floatingPassword">Passwort</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-4 btn-dark" type="submit">Weiter</button>
          {/* <small>Forgot password?</small> */}
        </form>
<Link to='/'>
<button className="w-100 mb-2 btn btn-lg rounded-4 btn-secondary fs-6" type="btn">Du hast ein Konto? Einloggen</button>
</Link>
</div>
    );
}
 
export default RegisterForm;