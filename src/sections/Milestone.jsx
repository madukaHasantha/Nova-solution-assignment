function Milestone() {
  return (
    //Milestone
    <div
      className="flex items-center justify-center py-3 container-fluid"
      style={{ backgroundColor: "#9A8350" }}
    >
      <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-3">
        <div>
          <h1
            className="mb-2 text-white"
            style={{ fontSize: "64px", fontWeight: "400" }}
          >
            20
          </h1>
          <h1
            className="mb-6 text-white "
            style={{ fontSize: "24px", fontWeight: "400" }}
          >
            All over world
          </h1>
        </div>
        <div>
          <h1
            className="mb-2 text-white"
            style={{ fontSize: "64px", fontWeight: "400" }}
          >
            12K+
          </h1>
          <h1
            className="mb-6 text-white "
            style={{ fontSize: "24px", fontWeight: "400" }}
          >
            Product Sales
          </h1>
        </div>
        <div>
          <h1
            className="mb-2 text-white"
            style={{ fontSize: "64px", fontWeight: "400" }}
          >
            170+
          </h1>
          <h1
            className="mb-6 text-white"
            style={{ fontSize: "24px", fontWeight: "400" }}
          >
            Products Available
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Milestone;
