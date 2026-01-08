import { useState } from 'react';
import Form from './Form';
import SubmittedData from './SubmittedData';

import './App.css';

function App() {
  const [submitted, setSubmitted] = useState(null);

  return (
    <div>
      <h1>Simple Form SPA</h1>
      <Form onSubmit={setSubmitted} />
      {submitted && <SubmittedData data={submitted} />}
    </div>
  );
}

export default App;