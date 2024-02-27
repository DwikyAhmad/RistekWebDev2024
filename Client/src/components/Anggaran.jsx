import personIcon from "../assets/person-circle.svg"
import trashIcon from "../assets/trash.svg"

export default function Anggaran({ anggaran, tipeAnggaran }) {
    const isPengeluaran = tipeAnggaran === "pengeluaran";
    return (
        <>
            <div className="row mt-4" key={anggaran._id}>
                <div className="col">
                    <div
                        className="px-4 py-4 container"
                        style={{
                            minHeight: "150px",
                            borderRadius: "25.588px",
                            background: "linear-gradient(180deg,#213356 0%,#0c182f 100%)",
                            boxShadow: "6.397px 6.397px 19.191px 0px #1d2e4e",
                        }}
                    >
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                                <div>
                                    <div
                                        className="rounded-circle d-inline-block align-middle me-2 ms-md-2"
                                        style={{ width: "40px", height: "40px" }}
                                    >
                                        <img
                                            src={personIcon}
                                            alt=""
                                            width="40px"
                                            style={{ filter: "invert(1)" }}
                                        />
                                    </div>
                                    <p
                                        className="text-light d-inline-block my-auto pop-700"
                                    >
                                        {anggaran.author.username}
                                    </p>
                                    <p
                                        className="text-light d-md-inline-block my-auto ms-md-2 pt-2 pt-md-0"
                                        style={{ fontSize: "12px" }}
                                    >
                                        {new Date(anggaran.createdAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })}
                                    </p>
                                </div>
                                <form
                                    className="d-md-inline-block"
                                    action={`/api/${anggaran._id}/${tipeAnggaran}?_method=DELETE`}
                                    method="POST"
                                >
                                    <input className="me-md-2 pt-1" type="image" src={trashIcon} alt="" />

                                </form>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <p>{anggaran.body}</p>
                                <p className={isPengeluaran ? "text-danger" : "text-success"}>
                                    {isPengeluaran ? "-" : "+"}Rp{anggaran.nominal.toLocaleString()}.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}