export default function Login() {
    return (
        <>
            <div className="container formHeight">
                <div className="row formHeight">
                    <div className="col-10 col-md-8 col-lg-6 mx-auto my-auto">
                        <h2>Login</h2>
                        <form action="/api/login" method="POST">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label"
                                >Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    aria-describedby="username"
                                    name="username"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label"
                                >Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                />
                            </div>
                            <div className="d-flex justify-content-end"><a href="/register">Create a new account</a></div>
                            <div className="d-grid mt-2">
                                <button type="submit" className="btn btn-primary mt-2">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}