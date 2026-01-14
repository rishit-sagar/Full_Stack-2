import { useState } from 'react';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [uid, setUid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, dob, age, uid });
    setName('');
    setEmail('');
    setDob('');
    setAge('');
    setUid('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="UID"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;