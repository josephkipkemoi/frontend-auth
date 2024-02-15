import { useEffect, useState } from "react"
import loader from "../utils/Auth"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "react-router-dom"
import axios from "axios"

const RegisterPage = () => {
    useEffect(() => {
        loader()
    }, [])
    return (
        <>
            <Header/>
            <RegistrationComponent/>
            <Footer/>
        </>
    )
}

const RegistrationComponent = () => {
    const [errors, setErrors] = useState([])
    const [details, setDetails] = useState({
        phone_number: '',
        password: '',
        confirm_password:''
    })

    const onchange = (e) => setDetails(d => ({...d, [e.target.name]: e.target.value}))

    const onsubmit = async () => {
        const num = parseInt("254"+parseInt(details.phone_number))
        try {
            const res = await axios.post("api/register", {
                phone_number: num,
                password: details.password,
                confirm_password: details.confirm_password
            })
            if (res?.status == 201) {
                localStorage.setItem("token", res.data.token)
                window.location.href = "/home"
            }
        } catch (error) {
            console.error(error)
            if(error.response.status == 422) {
                setErrors([error.response.data.error])
            }
        }
    }
    return (
        <div className="card w-50 d-flex p-3 bg-light mx-auto mt-5">
        <div className=" card-header bg-light">
            <h2 className="bg-light p-2 fw-bold">Register</h2>
        </div>
        <div className="card-body bg-light">
            {errors.length > 0 && errors.map(e => <span className="alert alert-danger d-block">{e}</span>)}
            <label className="bg-light text-secondary mb-2" htmlFor="mobile_no">Phone number</label>
            <input id="mobile_no" className="form-control mb-3 p-3" name="phone_number" onChange={onchange} placeholder="Phone no. e.g. 0700123123" type="number"/>
            <label htmlFor="password" className="bg-light text-secondary mb-2">Password</label>
            <input id="password" className="form-control mb-3 p-3" name="password" onChange={onchange} placeholder="Password" type="password"/>
            <label htmlFor="confirm_password" className="bg-light text-secondary mb-2">Confirm password</label>
            <input id="confirm_password" className="form-control mb-3 p-3" name="confirm_password" onChange={onchange} placeholder="Confirm password" type="password"/>
            <div className="bg-light d-flex justify-content-between mt-3">
                <div className="bg-light">
                    <input id="rem_me" type="checkbox"/>
                    <label htmlFor="rem_me" className="bg-light m-1 text-secondary">Remember Me</label>
                </div>
            </div>
            <div className="bg-light mt-2">
                <button className="btn btn-primary mb-3 w-25 shadow-sm" onClick={onsubmit}>Sign Up</button>
            </div>
            <div className="bg-light">
                <small className="bg-light">By clicking sign up, you accept the Terms and Conditions.</small>
            </div>
        </div>
        <div className="card-footer bg-light">
            <p className="bg-light">
                Already registered?
                <Link className="bg-white nav-link text-primary" to="/login">Login Here</Link>
            </p>
        </div>
    </div>
    )
}

export default RegisterPage