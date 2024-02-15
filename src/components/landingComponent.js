
const LandingComponent = () => {
    return (
       <div className="text-white p-5">
            <h3 className="text-center">React-Golang API Authentication</h3>
            <div className="d-sm-flex flex-row justify-content-center  p-5">
                <div className="card shadow p-4 bg-light m-2">
                    <h4 className="text-center bg-light">Backend Github Repository
                    <a className="text-primary nav-link mt-2" href="github.com/josephkipkemoi/go-authentication" target="_blank">Backend - Golang</a>
                    </h4>
                </div>
                <div className="card shadow p-4 bg-light m-2">
                    <h4 className="text-center bg-light">Frontend Github Repository
                        <a className="text-primary nav-link mt-2" href="www.github.com/josephkipkemoi/" target="_blank">Frontend - Reactjs</a>
                    </h4>
                </div>
            </div>
       </div>
    )
}


export default LandingComponent