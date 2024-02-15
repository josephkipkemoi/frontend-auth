import axios from "axios"
import { useEffect, useState } from "react"
import loader from "../utils/Auth"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

const LoginPage = () => {
    useEffect(() => {
        loader()
    }, [])
    return (
        <>
            <Header/>
            <LoginComponent/>
            <Footer/>
        </>
    )
}

const LoginComponent = () => {
    const [errors, setErrors] = useState([])
    const [details, setDetails] = useState({
        phone_number: 0,
        password: ""
    })

    const onchange = (e) => setDetails(d => ({...d, [e.target.name]: e.target.value}))

    const onsubmit = async () => {
        const num = parseInt("254" + parseInt(details.phone_number))
        try {
            const res = await axios.post("api/login", {
                phone_number: num,
                password: details.password
            })
            if (res.status == 200) {
                localStorage.setItem("token",res.data.token)
                window.location.href = "/home"
            }
        } catch (error) {
            if (error.response.status == 422) {
                setErrors([error.response.data.error])
            }
            console.error(error)
        }
    }

    return (
        <div className="card w-50 d-flex p-3 bg-light mx-auto mt-5">
            <div className=" card-header bg-light">
                <h2 className="bg-light p-2 fw-bold">Login</h2>
            </div>
            <div className="card-body bg-light">
                {errors.length > 0 && errors.map(e => <span className="alert alert-danger d-block">{e}</span>)}
                <label className="bg-light text-secondary mb-2">Mobile number</label>
                <input className="form-control mb-3 p-3" name="phone_number" onChange={onchange} placeholder="Mobile Number" type="number"/>
                <label className="bg-light">Password</label>
                <input className="form-control mb-3 p-3"  name="password" onChange={onchange} placeholder="Password" type="password"/>
                <div className="bg-light d-flex justify-content-between m-3">
                    <div className="bg-light">
                        <input type="checkbox"/>
                        <label className="bg-light m-1 text-secondary">Remember Me</label>
                    </div>
                    <div className="bg-light">
                        <Link to="/forgot-password" className="bg-light nav-link text-primary">Forgot Password?</Link>
                    </div>
                </div>
                <div className="bg-light mt-2">
                    <button className="btn btn-primary mb-3 w-25 shadow-sm" onClick={onsubmit}>Sign In</button>
                </div>
            </div>
            <div className="card-footer bg-light">
                <p className="bg-light">
                    Not yet registered?
                    <Link className="bg-white nav-link text-primary" to="/register">Register Here</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage