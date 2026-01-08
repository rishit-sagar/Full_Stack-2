import './App.css';

function SubmittedData({ data }) {
  return (
    <div>
      <h2>Submitted Info:</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Date of Birth:</strong> {data.dob}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>UID:</strong> {data.uid}</p>
    </div>
  );
}

export default SubmittedData;