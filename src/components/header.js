import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    const isAuth = Boolean(localStorage.getItem("token"))

    const logout = () => {
        localStorage.removeItem("token")
        window.location.href = "/"
    }
    return (
        <header className="d-sm-flex justify-content-between align-items-center m-2 shadow-lg p-4 rounded-5">
            <div>
                <h1 className="text-center">
                    <Link to="/" className="nav-link">
                        React-Golang 
                    </Link>
                </h1>
            </div>
            <div>
                <Link to="/home" className="nav-link text-white ">Home</Link>
            </div>
            <div className="d-flex justify-content-end">
                {isAuth == false &&
                    <>
                        <Link className="btn btn-light rounded-2 shadow p-2 m-1 w-100" to="/register">Register</Link>
                        <Link className="btn btn-primary rounded-2 shadow p-2 m-1 w-100"to="/login">Login</Link>
                    </>
                }
                {isAuth == true &&
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                }
            </div>
        </header>
    )
}

export default Header