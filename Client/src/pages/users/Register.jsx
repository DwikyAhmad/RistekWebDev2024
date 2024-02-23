export default function Register() {
    return (
        <>
            <div className="container formHeight">
                <div className="row formHeight">
                    <div className="col-10 col-md-8 col-lg-6 mx-auto my-auto">
                        <h2>Login</h2>
                        <form action="/api/register" method="POST">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="email"
                                    name="email"
                                />
                                <div id="emailHelp" className="form-text text-info">
                                    We&apos;ll never share your email with anyone else.
                                </div>
                            </div>
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
                            <div className="mb-3">
                                <label htmlFor="saldo" className="form-label"
                                >Saldo Awal</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="saldo"
                                    name="saldo"
                                />
                            </div>
                            <div className="d-flex justify-content-end"><a href="/login">Use an existing account</a></div>
                            <div className="d-grid mt-2">
                                <button type="submit" className="btn btn-primary mt-2">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}