function Milestone(){
    return(
        <div className="container-fluid py-5 flex justify-center items-center" style={{ backgroundColor: '#9A8350'}}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
      <div>
        <h1 className="text-white mb-2" style={{ fontSize: '64px', fontWeight: '400'}}>20</h1>
        <h1 className="text-white mb-6 " style={{ fontSize: '24px', fontWeight: '400'}}>All over world</h1>
      </div>
      <div>
        <h1 className="text-white mb-2" style={{ fontSize: '64px', fontWeight: '400'}}>12K+</h1>
        <h1 className="text-white mb-6 " style={{ fontSize: '24px', fontWeight: '400'}}>Product Sales</h1>
      </div>
      <div>
        <h1 className="text-white mb-2" style={{ fontSize: '64px', fontWeight: '400'}}>170+</h1>
        <h1 className="text-white mb-6" style={{ fontSize: '24px', fontWeight: '400'}}>Products Available</h1>
      </div>
    </div>
  </div>
    )
    
}

export default Milestone;