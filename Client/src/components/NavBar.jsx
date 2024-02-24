// import ristekLogo from "../assets/Ristek Logo.svg"
import coinLogo from "../assets/coin.svg"
import personIcon from "../assets/person-circle.svg"


export default function NavBar({ username = ""}) {

    return (
        <>
            <nav className="navbar bg-dark border-body" data-bs-theme="dark">
                <div className="container-xl">
                    <a className="navbar-brand d-flex d-inline-block ms-2 ms-sm-4" href="/">
                        <img
                            src={coinLogo}
                            alt="Logo"
                            width="22"
                            className="d-inline-block my-1"
                            style={{filter: "invert(1)", width: "30px"}}
                        />
                        <p className="my-auto ms-3 ms-sm-4 pop-700">Money Manager</p>
                    </a>


                    {username && <div className="dropdown-center">
                        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="rounded-circle d-inline-block align-middle me-2" style={{width: "30px", height: "30px"}}>
                                <img src={personIcon} alt="" style={{filter: "invert(1)", width: "30px"}} />
                            </div>
                            <p className="text-light d-inline-block align-middle my-auto d-none d-sm-inline">{username}</p>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="/api/logout">Logout</a></li>
                        </ul>
                    </div>}
                </div>
            </nav>
        </>
    );
}



