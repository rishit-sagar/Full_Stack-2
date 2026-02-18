function Dashboard() {
  return (
    <section className="dashboard">
      <h2>Basic Dashboard</h2>
      <p className="hint">Just a few numbers we want to track.</p>
      <ul className="stat-list">
        <li className="stat-item">
          <span className="stat-label">Students</span>
          <span>23</span>
        </li>
        <li className="stat-item">
          <span className="stat-label">Chapters done</span>
          <span>4</span>
        </li>
        <li className="stat-item">
          <span className="stat-label">Next quiz</span>
          <span>Tuesday</span>
        </li>
      </ul>
    </section>
  );
}

export default Dashboard;