import { redirect, useLoaderData } from "react-router-dom";
import Anggaran from "../../components/Anggaran";

export async function loader() {
    const response = await fetch("/api");
    if (response.redirected) {
        return redirect(response.url);
    }
    const data = await response.json();
    return data;
}

export default function Home() {
    const { listPengeluaran, user } = useLoaderData();
    console.log(listPengeluaran);


    return (
        <>
            <div className="container vh-100 mt-5 scrollbox">
                <div className="row">
                    <div className="col">
                        <h2 className="pop-700" style={{ lineHeight: "normal" }}>
                            Welcome back, <br />
                            <span style={{ color: "#88bfe8" }}>{user.username}</span>
                        </h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <form action="/api/pengeluaran/" id="anggaran-form" method="POST" className="row" style={{width: "100% !important", margin: 0 }}>
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
                            <div className="d-flex justify-content-end mt-3 mt-md-0"><a href="#">Tambah pemasukan?</a></div>
                            <div className="input-group">
                                <input name="nominal" type="text" className="form-control" aria-label="Indonesia Rupiah" />
                                <span className="input-group-text">IDR</span>
                            </div>
                            <button
                                type="submit"
                                form="anggaran-form"
                                className="btn btn-danger"
                                style={{ fontWeight: "700", height: "65px", fontSize: "15px" }}
                            >
                                Tambah Pengeluaran
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

                {listPengeluaran.map((pengeluaran) => <Anggaran key={pengeluaran._id} anggaran={pengeluaran} tipeAnggaran={"pengeluaran"} />)}
            </div>
        </>
    )
}