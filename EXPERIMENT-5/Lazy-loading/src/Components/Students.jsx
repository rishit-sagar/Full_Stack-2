function Students() {
  return (
    <section className="panel">
      <h2>Student List</h2>
      <ul className="simple-list">
        <li>
          <span>Riya</span>
          <span className="status ok">Present</span>
        </li>
        <li>
          <span>Harsh</span>
          <span className="status ok">Present</span>
        </li>
        <li>
          <span>Mahesh</span>
          <span className="status warn">Absent</span>
        </li>
      </ul>
    </section>
  );
}

export default Students;
