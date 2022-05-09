import Navigation from "./Navigation";

const DefaultPage = (props) => {
    return ( 
        <div>
            <Navigation />
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        {props.children}
                    </div>
                    <div className="col-4 d-none d-lg-block"></div>
                </div>
            </div>
        </div>
    );
}
 
export default DefaultPage;