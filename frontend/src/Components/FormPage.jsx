const FormPage = (props) => {
  return (
    <div className="App py-5">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-6 d-none d-lg-block">
            <div className="w-50 ms-auto me-2">
              <img src={props.sideImgSrc} alt="" className="w-100" />
            </div>
          </div>

          <div className="col-md-8 col-lg-6 col-xl-5">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default FormPage;