import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-success">Learning Bootstrap</h2>

      <div className="card shadow-lg border border-success p-3 mt-3">
        <input className="form-control mb-2" placeholder="Enter your name" />
        <input className="form-control mb-2" placeholder="Enter your mail" />
        <button className="btn btn-danger mt-3">Submit</button>
      </div>
    </div>
  )
}

export default App