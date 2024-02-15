
const FirstAdvert = () => {
    return (
        <div className="d-sm-flex justify-content-around m-5">
        <div></div>
        <div className="main-advert">
            <h1>The future of money is here.</h1>
            <h5>We are the most trusted place in East Africa for people and businesses to buy, sell and manage crypto.</h5>
            <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="d-flex flex-column w-75">
                    <label htmlFor="phone_number">Phone number</label>
                    <input className="form-control" id="phone_number" type="number" placeholder="0700-123-123"/>
                </div>
                <div>
                    <button className="btn btn-primary btn-lg rounded-5">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    )
}

const SecondAdvert = () => {
    return (
        <div className="d-sm-flex justify-content-around m-5">
            <div>
                <h3>Explore crypto like Bitcoin, Worldcoin, Ethereum and Dogecoin</h3>
                <h5>Simply and securely buy, sell and manage cryptocurrencies.</h5>
                <button className="btn btn-primary btn-lg">See more assets</button>
            </div>
            <div>
                <button className="btn btn-primary m-1">Tradeable</button>
                <button className="btn btn-primary m-1">Top Gainers</button>
                <button className="btn btn-primary m-1">New on CryptExchange</button>
            </div>
        </div>
    )
}

const RegistrationComponent = () => {
    const [errs, setErrs] = useState([])

    const registerUser = async () => {
        setErrs([])
        try {
            const res = await axios.post("api/register", {
                phone_number: 254700545729,
                password: "1234",
                confirm_password: "1234"
            }, {
                // withCredentials: true
            }) 

            localStorage.setItem("token",res.data.token)

        } catch (error) {
            if(error.response.status == 422) {
                setErrs([error.response.data.error])
            }
        }
    }
    return (
        <div >
            {errs.length > 0 && 
            errs.map(e => 
            <div>
                <span className="alert alert-danger" key={errs}>{e}</span>
                </div>
            )}
            <div className="d-flex flex-column">
                <label>Mobile Number</label>
                <input className="form-control" type="number" placeholder="Login"/>
                <label>Password</label>
                <input className="form-control" type="password" placeholder="password"/>
                <label>Confirm Password</label>
                <input className="form-control" type="password" placeholder="password"/>
                <button className="btn btn-primary" onClick={registerUser}>Register</button>
            </div>
        </div>
    )
}

const ProtectedComponent = () => {
    const handleSell = async () => {
        const token = localStorage.getItem("token")
        try {
           const data = await axios.get("api/users/1/balance", 
        {
            headers: {
                "Authorization": `Bearer ${token}`
           }
        }
        )
           console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <button className="btn btn-danger btn-lg shadow rounded-5 w-25" onClick={handleSell}>Sell</button>
        </>
    )
}