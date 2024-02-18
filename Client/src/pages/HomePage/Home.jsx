export default function Home() {
    return (
        <>
            <div className="container vh-100 mt-5 scrollbox">
                <div className="row">
                    <div className="col">
                        <h2 className="pop-700" style={{ lineHeight: "normal" }}>
                            Welcome back, <br />
                            <span style={{ color: "#88bfe8" }}>Guest</span>
                        </h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-8">
                        <form action="/tweet" id="form-tweet" method="POST">
                            <textarea
                                className="form-control"
                                type="text"
                                placeholder="What's happening?"
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
                        </form>
                    </div>
                    <div className="d-grid align-content-end gap-2 col-md-4 mt-3">
                        <button
                            type="submit"
                            form="form-tweet"
                            className="btn btn-light"
                            style={{ fontWeight: "700", height: "40px", fontSize: "15px" }}
                        >
                            Edit Close Friends
                            <img
                                src="images/closeFriends.svg"
                                alt=""
                                width="20px"
                                style={{ marginBottom: "2px", marginLeft: "2px" }}
                            />
                        </button>
                        <button
                            type="submit"
                            form="form-tweet"
                            className="btn btn-light"
                            style={{ fontWeight: "700", height: "40px", fontSize: "15px" }}
                        >
                            Post
                            <img
                                src="images/sendIcon.svg"
                                alt=""
                                width="20px"
                                style={{ marginBottom: "2px", marginLeft: "2px" }}
                            />
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}