import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container-fluid py-5">
      <div className="row gx-4 gy-5 px-4">

        {/* CARD 1 */}
        <div className="col-md-6">
          <div className="card w-100 h-100 shadow">
            <img
              src="spider.png"
              className="card-img-top"
              alt="card"
            />
            <div className="card-body">
              <h5 className="card-title">With Great Powers Comes Great Responsibilty</h5>
              <p className="card-text">
                Click on the link to under this better.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-6">
          <div className="card w-100 h-100 shadow">
            <img
              src="image.png"
              className="card-img-top"
              alt="card"
            />
            <div className="card-body">
              <h5 className="card-title">Windows and microsoft</h5>
              <p className="card-text">
                The blue Operating system.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App