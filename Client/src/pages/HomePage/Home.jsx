import { redirect, useLoaderData } from "react-router-dom";
import Anggaran from "../../components/Anggaran";
import { useState } from "react";
import NavBar from "../../components/NavBar";

export async function loader() {
    const response = await fetch("/api");
    if (response.redirected) {
        return redirect(response.url);
    }
    const data = await response.json();
    return data;
}

export default function Home() {
    const [statusPageAnggaran, setStatusPageAnggaran] = useState("pengeluaran");

    const isPengeluaran = statusPageAnggaran === "pengeluaran" ? true : false;

    let { listPengeluaran, listPemasukan, user } = useLoaderData();


    const changeStatus = () => {
        if (statusPageAnggaran === "pengeluaran") {
            setStatusPageAnggaran("pemasukan");
        } else {
            setStatusPageAnggaran("pengeluaran");
        }
    }

    return (
        <>
            <NavBar username={user.username} />
            <div className="container vh-100 mt-5 scrollbox">
                <div className="row">
                    <div className="col">
                        <h2 className="pop-700" style={{ lineHeight: "normal" }}>
                            Welcome back, <br />
                            <span style={{ color: "#88bfe8" }}>{user.username}</span>
                        </h2>
                        <h3>Saldo anda: Rp{user.saldo.toLocaleString()}.00</h3>
                    </div>
                </div>
                <div className="row mt-3">
                    <form action={`/api/${statusPageAnggaran}/`} id="anggaran-form"
                        method="POST" className="row" style={{ width: "100% !important", margin: 0, padding: 0 }}>
                        <div className="col-md-8">
                            <textarea
                                className="form-control"
                                type="text"
                                placeholder="Catat anggaran kamu!"
                                aria-label="default input example"
                                style={{
                                    background: "#01162d",
                                    color: "white",
                                    height: "150px",
                                    resize: "none",
                                    border: "2px solid #88bfe8",
                                    boxShadow: "0px 1px 6px 0px #c5e0eb",
                                }}
                                name="body"
                            ></textarea>
                        </div>

                        <div className="d-grid align-content-end gap-2 col-md-4">

                            <div className="d-flex justify-content-end mt-3 mt-md-0">
                                <a href="#" className="link-offset-1"
                                    onClick={changeStatus}>Tambah {isPengeluaran ? "pemasukan?" : "pengeluaran?"}</a>
                            </div>
                            <div className="input-group">
                                <input name="nominal" type="text" className="form-control" aria-label="Indonesia Rupiah" />
                                <span className="input-group-text">IDR</span>
                            </div>
                            <button
                                type="submit"
                                form="anggaran-form"
                                className={"btn " + (isPengeluaran ? "btn-danger" : "btn-success")}
                                style={{ fontWeight: "700", height: "65px", fontSize: "15px" }}
                            >
                                Tambah {isPengeluaran ? "Pengeluaran" : "Pemasukan"}
                                <img
                                    src="images/sendIcon.svg"
                                    alt=""
                                    width="20px"
                                    style={{ marginBottom: "2px", marginLeft: "2px" }}
                                />
                            </button>
                        </div>
                    </form>
                </div>

                {isPengeluaran && listPengeluaran.map((pengeluaran) => <Anggaran key={pengeluaran._id} anggaran={pengeluaran} tipeAnggaran={"pengeluaran"} />)}
                {!isPengeluaran && listPemasukan.map((pemasukan) => <Anggaran key={pemasukan._id} anggaran={pemasukan} tipeAnggaran={"pemasukan"} />)}
            </div>
        </>
    )
}