import { Button, TextField, CardContent, Card } from '@mui/material';
import React, { useState } from 'react';

function MaterialUI() {
  const [name, setName] = useState("");

  return (
    <Card sx={{ width: '400px', margin: '20px auto', padding: '20px' }}>
      <CardContent>
        <h1>Material UI Components</h1>

        <TextField
          id="name-field"
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: '20px' }}
          disabled={name === ""}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}

export default MaterialUI;