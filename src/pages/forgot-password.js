import { Link } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"

const ForgotPassword = () => {
    return (
        <div>
            <Header/>
            <ForgotPasswordComponent/>
            <Footer/>
        </div>
    )
}

const ForgotPasswordComponent = () => {
    return (
        <div className="card w-50 d-flex p-3 bg-light mx-auto mt-5">
        <div className=" card-header bg-light">
            <h2 className="bg-light p-2 fw-bold">Forgot Password</h2>
        </div>
        <div className="card-body bg-light">
            <label className="bg-light">Enter mobile number</label>
            <input className="form-control mb-3" placeholder="Mobile Number" type="number"/>
            <div className="bg-light">
                <button className="btn btn-primary mb-3 w-25">Next</button>
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword